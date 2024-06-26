// 액션타입 참조 (순서는 actionType먼저 정해주고 action -> reducer)
import {USER_LOGIN} from "../../constants/actionTypes"

// 초기값
// 리듀서 전역데이터 관리 초기값 구조정의 및 값할당
const INIT_STATE = {
    token: "",
    loginUser: {}
}

const Auth = (state=INIT_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {...state,
                    token: action.payload.token,
                    loginUser: action.payload.loginUser
                    };
        default:
            return {...state}
    }
}


export default Auth