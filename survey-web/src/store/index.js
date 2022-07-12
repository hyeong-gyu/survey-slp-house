import { createStore } from 'vuex';
import { router } from '../router/';
import { VueCookieNext } from 'vue-cookie-next';
import CryptoJS from 'crypto-js';
import icbToken from '../assets/token/icbToken.json';
import conveToken from '../assets/token/conveToken.json';
import genToken from '../assets/token/genToken.json';

const store = createStore({
    //데이터 저장 공간
    state() {
        return {
            parentNode: null,
            surveyType: null,
            icbCode: null,
            conveCode: null,
            icbTokenData: icbToken,
            conveTokenData: conveToken,
            genTokenData: genToken,
            validCheck: true,
            icb: {
                name: null,
                birth: null,
                matrix: 1
            },
            conve: {
                name: null,
                birth: null
            }
        }
    },
    //실행 함수 요청
    mutations: {
        //common
        getParents(state, {el, parentSelector}) {
            state.parentNode = null;

            if (parentSelector === undefined) {
                parentSelector = document;
            }
            var parents = [];
            var p = el.parentNode;
            while (p !== parentSelector) {
                var o = p;
                parents.push(o);
                p = o.parentNode;
            }

            parents.push(parentSelector);
            return state.parentNode = parents;
        },
        codeType(state, type) {
            state.surveyType = type;
        },
        codeInput(state, code) {
            switch (state.surveyType) {
                case 'icb':
                    state.icbCode = code;
                    break;

                case 'conve':
                    state.conveCode = code;
                    break;

                case 'gen':
                    state.genCode = code;
                    break;

                default:
                    break;
            }
        },
        codeValidation(state) {
            //0S8O0CMW2, conve : T7UI9E
            let _tokenData = null;
            let _tokenInpData = null;
            
            switch (state.surveyType) {
                case 'icb':
                    _tokenData = state.icbTokenData.token
                    _tokenInpData = state.icbCode;
                    break;

                case 'conve':
                    _tokenData = state.conveTokenData.token;
                    _tokenInpData = state.conveCode;
                    break;

                case 'gen':
                    _tokenData = state.genTokenData.token;
                    _tokenInpData = state.genCode;
                    break;

                default:
                    break;
            };
            
            const _tokenValid = _tokenData.filter((_token) => {
                // console.log(CryptoJS.AES.encrypt(_token, 'SLP-HOUSE-LIVE').toString());

                let _bytes = CryptoJS.AES.decrypt(_token, 'SLP-HOUSE-LIVE');
                let _tokenString = _bytes.toString(CryptoJS.enc.Utf8);
                return _tokenString === _tokenInpData;
            });

            // var testA = CryptoJS.AES.decrypt('U2FsdGVkX19+36cIjkomhnb+kTSa12taeNrbOcnBWTg=', 'SLP-HOUSE-LIVE');
            // console.log(testA.toString(CryptoJS.enc.Utf8));
            
            if (_tokenValid.length > 0) {
                state.validCheck = true;
                const _modalBack = document.querySelector('.modal-backdrop');
                if (_modalBack) _modalBack.remove();

                document.getElementsByTagName('body')[0].classList.remove('modal-open');
                if (state.surveyType === 'icb') {
                    VueCookieNext.setCookie('token', `${_tokenValid}`);
                    VueCookieNext.setCookie('type', `${state.surveyType}`);
                    router.push('/icb/main');
                }
                
                if (state.surveyType === 'conve') {
                    VueCookieNext.setCookie('conve-token', `${_tokenValid}`);
                    VueCookieNext.setCookie('type', `${state.surveyType}`);
                    router.push('/conve/main');
                }

                if (state.surveyType === 'gen') {
                    VueCookieNext.setCookie('gen-token', `${_tokenValid}`);
                    VueCookieNext.setCookie('type', `${state.surveyType}`);
                    router.push('/gen/main');
                }
                
            } else {
                state.validCheck = false;
            }
        },
        //icb
        icbPlay(state) {
            state.icb.name = document.getElementById('icb-info-name').value;
            state.icb.birth = document.getElementById('icb-info-birth').value;
            state.icb.matrix = Number(document.getElementById('icb-info-matrix').value);

            let _cookieText = {
                name: state.icb.name, birth: state.icb.birth, matrix: state.icb.matrix
            };

            _cookieText = JSON.stringify(_cookieText);
            VueCookieNext.setCookie('info', _cookieText);
            if (state.icb.name !== null && state.icb.birth !== null) router.push('/icb/matrix');
        }
    },
    //action은 ajax 요청하는 곳
    actions: {
        
    }
});

export default store;