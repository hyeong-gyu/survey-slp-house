import { createStore } from 'vuex';

const store = createStore({
    //데이터 저장 공간
    state() {
        return {
            icbCode: null,
            weatherData: null
        }
    },
    //실행 함수 요청
    mutations: {
        codeValidation(state, code) {

            console.log(state.icbCode);
            console.log(code);

        }
    },
    //action은 ajax 요청하는 곳
    actions: {
        
    }
});

export default store;