import { createStore } from 'vuex';
import { router } from '../router/';
import CryptoJS from 'crypto-js';
import icbToken from '../assets/token/icbToken.json';

const store = createStore({
    //데이터 저장 공간
    state() {
        return {
            parentNode: null,
            surveyType: null,
            icbCode: null,
            icbTokenData: icbToken,
            validCheck: true,
            icb: {
                name: null,
                birth: null,
                matrix: 1
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

                default:
                    break;
            }
        },
        codeValidation(state) {
            const _tokenData = state.surveyType === 'icb' ? state.icbTokenData.token : '';
            const _tokenValid = _tokenData.filter((_token) => {
                let _bytes = CryptoJS.AES.decrypt(_token, 'SLP-HOUSE-LIVE');
                let _tokenString = _bytes.toString(CryptoJS.enc.Utf8);

                return _tokenString === state.icbCode;
            });
            
            if (_tokenValid.length > 0) {
                state.validCheck = true;
                const _modalBack = document.querySelector('.modal-backdrop');
                if (_modalBack) _modalBack.remove();

                router.push('/icb/main');
            } else {
                state.validCheck = false;
            }
        },
        //icb
        icbPlay(state) {
            state.icb.name = document.getElementById('icb-info-name').value;
            state.icb.birth = document.getElementById('icb-info-birth').value;
            state.icb.matrix = Number(document.getElementById('icb-info-matrix').value);

            if (state.icb.name !== null && state.icb.birth !== null) router.push('/icb/matrix');
        }
    },
    //action은 ajax 요청하는 곳
    actions: {
        
    }
});

export default store;