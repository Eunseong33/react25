import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { FaRegular } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UseEffect1() {
      //1. 유즈이펙트쓰기 // 람다, 대괄호

      //2. index.js 스트릭트 모드 제거


      // useEffect(() => {
      //       alert('마운팅');
      // }, []);

      //3. 
      const [count, setCount] = useState(0);
      //const [count2, setCount2] = useState(0);

      useEffect(() => {
            console.log('카운트 되었습니다.');
            console.log('카운트 된 숫자' + count);

            //    set(count + 1);
      }, [count]);
      //}, [count, count2]);
      //대괄호는 주소를 기준으로 감지

      //4. 
      useEffect(() => {
            console.log('mount 시작//////////////////////////////');
            console.log('mount');
            console.log('action, 액션실행부분');
            return () => {

                  console.log('unmount 시작=====================');
                  console.log('unmount');
            }
      }, [count]);

      //5. useEffect 계산기 연습 ==============================================

      const 입력1ref = useRef(0);
      const 입력2ref = useRef(0);
      const opRef = useRef('+');

      const [계산, set계산] = useState(0);  //계산 결과
      const [히스토리, set히스토리] = useState([]); //계산 기록

      useEffect(() => {
            console.log('계산 결과를 출력합니다');
            console.log(계산);
            return () => {
                  console.log('unmount');
            }
      }, [계산])


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
                  <h1> useEffect</h1>
                  <input type="button"
                        value="증가"
                        onClick={
                              () => setCount(count + 1)} />

                  {/* 아이디 중복검사, 유효성에 활용 */}


                  <span> {count}</span>
                  <br />
                  <br />

                  <span>계산기에 숫자 입력시 입력되었다고 log받기 ==============================================</span>
                  <br />

                  <span>계산: </span>
                  <span>{계산}</span>
                  <br />

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
                        <div>
                              {히스토리.map((item, index) =>
                                    <컴포넌트 data={item} key={index}> </컴포넌트>

                              )}
                        </div>
                  </div>
            </div>
      )
}

/** 입력 Component */
function 입력_컴포넌트(props) {

      const [자식_입력1, set자식_입력1] = useState(0);
      const [자식_입력2, set자식_입력2] = useState(0);
      const [자식_op, set자식_op] = useState('+');

      useEffect(() => {
            console.log('숫자1 입력 완료.');
            return () => {
                  //console.log('');
            }

      }, [자식_입력1]);

      useEffect(() => {
            console.log('숫자2 입력 완료.');
            return () => {
                  //console.log('');
            }

      }, [자식_입력2]);

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