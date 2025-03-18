import { combineReducers } from "redux";

//state 초기값 설정
const initState = {
      type: '',
      num: 0,
      text: 'text'
}

//function dataReducer(state=initState: 초기값정의한거 가져다가 쓰라고, action) {
function dataReducer(state = initState, action) {
      switch (action.type) {

            case 'numberUp':
                  return {
                        ...state,
                        num: action.num
                  };

            case 'textIn':
                  return {
                        ...state,
                        text: action.text
                  };

            default:
                  return initState;
      }

}

// function dataReducer(state = initState, action) {
//       if (action.type == 'numberUp') {
//             return { ...state, num: num + 1 };//num: action.num
//       }

// }

const rootReducer = combineReducers({
      data: dataReducer, //data -임시저장 
      // list: listReducer,//
      // info: userReducer
});

export default rootReducer;