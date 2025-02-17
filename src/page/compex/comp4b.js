import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Switch } from 'react-router-dom';
import { useState, useRef } from 'react'

export default function Comp4b() {

      const 입력1ref = useRef(0);
      const 입력2ref = useRef(0);
      const opRef = useRef('+');


      const [계산, set계산] = useState(0);  //계산 결과
      const [히스토리, set히스토리] = useState([]); //계산 기록

      const handlerResult = () => {

            let result = 0;   //계산 결과

            switch (opRef.current) {
                  case '+':
                        result = Number(입력1ref.current) + Number(입력2ref.current);
                        break;
                  case '-':
                        result = Number(입력1ref.current) - Number(입력2ref.current);
                        break;
                  case '*':
                        result = Number(입력1ref.current) * Number(입력2ref.current);
                        break;
                  case '/':
                        result = Number(입력1ref.current) / Number(입력2ref.current);
                        break;
                  default:
                        result = 0;
            }

            console.log('도착 여부 확인');
            set계산(result);
            const his = { num1: 입력1ref.current, num2: 입력2ref.current, op: opRef.current, result: result };
            set히스토리([his, ...히스토리]);
      }


      return (
            <div>
                  <br />
                  <br />
                  <span>4-2 계산기 2</span>

                  <span>계산: </span>
                  <span>{계산}</span>
                  <br />
                  {/* <input type="text" onChange={e=>set입력1(e.target.value)} value={입력1} />
      <select onChange={e=>setOp(e.target.value)}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
      <input type="text" onChange={e=>set입력2(e.target.value)} />
      <input type="button" value="계산 결과" onClick={handlerResult} /> */}
                  <입력_컴포넌트 handlerInput={

                        /**
                         * 
                         * @param {*} obj 
                         * num1: input입력 1
                         * num2: input입력 2
                         * op: 사칙연산 기호
                         */
                        (obj) => {
                              //인스턴스 변수처럼 저장한다. ok
                              //화면에 표시 안 된다. ok
                              입력1ref.current = obj.num1;
                              입력2ref.current = obj.num2;
                              opRef.current = obj.op;

                              handlerResult();

                        }
                  } />

                  {/* 계산결과 영역 */}
                  <div style={{
                        border: '3px solid red'
                  }}>
                        <h1>History</h1>
                        <div>
                              {히스토리.map((item, index) =>
                                    <컴포넌트 data={item} key={index}> </컴포넌트>

                              )}
                        </div>
                  </div>

                  <부모호출 handlerChild={
                        val => {
                              alert('자식이 부모 호출');
                              alert(val);
                        }
                  } />
            </div>
      );
}

/** 입력 Component */
function 입력_컴포넌트(props) {

      const [자식_입력1, set자식_입력1] = useState(0);
      const [자식_입력2, set자식_입력2] = useState(0);
      const [자식_op, set자식_op] = useState('+');

      function handlerSend() {
            const obj = { num1: 자식_입력1, num2: 자식_입력2, op: 자식_op };

            /** 부모호출 */
            props.handlerInput(obj);
      }

      return (
            <div>
                  <input type="text" onChange={e => set자식_입력1(e.target.value)} />
                  <select onChange={e => set자식_op(e.target.value)}>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                  </select>
                  <input type="text" onChange={e => set자식_입력2(e.target.value)} />
                  <input type="button" value="계산" onClick={handlerSend} />
            </div>
      )
}


function 컴포넌트(props) {
      return (
            <div>
                  {props.data.num1}
                  {props.data.op}
                  {props.data.num2} =
                  {props.data.result}
            </div>
      )
}

/** 자식이 부모 호출 */
function 부모호출(props) {
      return (
            <div>
                  <input type="button" value="부모호출" onClick={
                        () => {
                              alert('부모 호출');
                              props.handlerChild('HI');
                        }
                  } />

            </div>
      )
}