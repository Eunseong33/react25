import { useState, useReducer } from 'react'

export default function Reducer1a() {

      //   const [사용변수명: count, 저장할때 호출하는 함수명: dispatch1(함수명임):걍 호출하는거라 함수 따로 필요 없음] 
      // = useReducer('dispatch호출하게 되면 처리하는 함수명'-받는친구 이름을 여기 둔다: sendReducer, '초기값, 무엇을 저장할 것인지':0)

      //reducer 받아서 처리하는 부분
      //function sendReducer(state: 이전 데이터 보관하는 영역, 그 영역을 갖고오는 것이 action: reducer한테 뭐 시킬건지)
      //action 이 숫자를 늘리겠다일때 

      const [카운트, set카운트] = useState(0);

      const [count, dispatch1] = useReducer(sendReducer, 0);

      //reducer 받아서 처리하는 부분
      //action = text => json
      //action => type: 어떤 형태로 ㅍ변형할 것인가?
      //         임의값 => 타입에 따라서 어떻게 스테이트에 적용할 거신가?
      //{type: 'input', val: 0}

      function sendReducer(state, action) {
            if (action === 'up') {
                  return state + 1;
            }

            else if (action === 'down') {

                  if (state > 0)
                        return state - 1;

                  else
                        return 0;

            }
            else if (action === 'reset') {
                  return 0;

            }
            else if (action.type === 'input') {
                  return action.val;
            }
      }

      return (
            <div>
                  <h1>reducer</h1>
                  {count}

                  <input type="button"
                        value="증가"
                        onClick={() => {
                              set카운트(count + 1);
                              dispatch1('up');
                        }}
                  />


                  <input type="button"
                        value="감소"
                        onClick={() => {
                              set카운트(count - 1);
                              dispatch1('down');
                        }}
                  />

                  <input type="button"
                        value="초기화"
                        onClick={() => {
                              set카운트(count);
                              dispatch1('reset');
                        }}
                  />
                  <br />
                  <input type="text" value={카운트} onChange={(e) =>
                        set카운트(e.target.value)

                  } />

                  <input type="button" value="전송"
                        onClick={() => {
                              const num = 카운트;
                              const action = { type: 'input', val: num }
                              dispatch1(action);
                        }} />
            </div >
      )
}