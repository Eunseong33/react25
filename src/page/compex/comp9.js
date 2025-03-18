import { useState, useRef } from 'react'

export default function Comp9() {


      //1. 사칙연산
      const refNum1 = useRef(0);
      const refNum2 = useRef(0);
      const refOp = useRef(null);

      const [calcResult, setCalcResult] = useState(null);


      //2. 구구단
      const numJ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      const [numI, setNumI] = useState(1);


      return (
            <div>

                  {/* 1. 사칙연산 */}
                  <div>
                        <span>계산 결과: </span>
                        <span>{calcResult}</span>
                        <br />

                        <input type="text" ref={refNum1} />

                        <select ref={refOp}>
                              <option value="add">+</option>
                              <option value="sub">-</option>
                              <option value="mul">*</option>
                              <option value="div">/</option>
                        </select>

                        <input type="text" ref={refNum2} />

                        <button type="button" onClick={() => {

                              const value1 = refNum1.current;
                              const value2 = refNum2.current;
                              const oper = refOp.current.value;

                              let resultValue = 0;

                              switch (oper) {

                                    case 'add':
                                          resultValue = Number(value1.value) + Number(value2.value);
                                          break;
                                    case 'sub':
                                          resultValue = Number(value1.value) - Number(value2.value);
                                          break;
                                    case 'mul':
                                          resultValue = Number(value1.value) * Number(value2.value);
                                          break;
                                    case 'div':
                                          resultValue = Number(value1.value) / Number(value2.value);
                                          break;
                                    default:
                                          resultValue = 0;
                              }

                              console.log(resultValue);
                              setCalcResult(resultValue);
                              value1.value = '';
                              value2.value = '';
                              value1.focus();

                        }}>결과 계산</button>

                  </div>

                  {/* 2. 구구단 */}
                  <input type="number" />
                  <input type="button" value="입력" onClick={(e) => {
                        setNumI(document.querySelector('input[type="number"]').value);
                  }}></input>

                  {numJ.map(((item, index) => (
                        <div key={index}>
                              {numI} * {item} = {item * numI}
                        </div>
                  )))}

            </div>
      )
}