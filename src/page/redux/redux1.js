import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

export default function 실행() {
      return (
            <div>
                  <h1>redux</h1>
                  <Provider store={store}>
                        <Input />
                        <Output />
                  </Provider>
            </div>
      )
}

function Input() {
      const dispatch = useDispatch();
      const [inputNum, setInputNum] = useState(0);
      const [content, setContent] = useState('');

      return (
            <div>
                  <h1>input area</h1>
                  숫자 전송 문자전송 인풋 만들고

                  {/* <input type="text" value={카운트} onChange={(e) =>
                        set카운트(e.target.value)

                  } /> */}
                  <br />
                  텍스트 입력 <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                  <input type="button"
                        value="전송"
                        onClick={() => {

                              const text = content;
                              const action = { type: 'input', val: text }

                              dispatch({
                                    type: 'numberUp',
                                    num: 100
                              });
                        }}
                  />
                  <br />
                  숫자 입력 <input type="number" value={inputNum} onChange={(e) => setInputNum(e.target.value)} />


                  <input type="button"
                        value="전송"
                        onClick={() => {
                              const num = inputNum;
                              const text = content;
                              const action = { type: 'input', val: num }

                              dispatch({
                                    type: 'numberUp',
                                    num: 100
                              });
                        }}
                  />
            </div>
      )
}
function Output() {
      const number = useSelector(state => state.data.num);  //data가 전부 필요하면state.data만 쓰고
      const text = useSelector(state => state.data.text);  //data가 전부 필요하면state.data만 쓰고
      //  const data = useSelector(state => state.data);  //data가 전부 필요하면state.data만 쓰고
      return (
            <div>
                  <h1>Out area</h1>

                  //숫자
                  <p>{number}</p>

                  //문자
                  <p> {text}</p>
            </div>
      )
}