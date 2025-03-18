import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Switch } from 'react-router-dom';
import { useState, useRef } from 'react'

export default function Comp4a() {

      const count = 'Hello World';

      //btn1은 함수지만 변수와 비슷한 입장이라서 onclick 할 때 onClick={btn1}으로 적어준다.
      function btn1() {
            alert('btn1');
      }

      const btn2 = function () {
            alert('btn2');
      }

      const btn3 = () => {
            alert('btn3');
      }
      let calc = () => {

            const value1 = document.getElementById('num1');
            const value2 = document.getElementById('num2');
            const oper = document.getElementById('op').value;


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


            document.getElementById('resultSpan').innerHTML = resultValue;
            value1.value = '';
            value2.value = '';
            value1.focus();

      }
      const subTitle = {
            fontSize: '30px',
            textDecoration: 'underline',
            color: 'blue'
      }

      return (
            <div>
                  <br />
                  <br />
                  <span>4-1 계산기 1</span>

                  <h1>Hello World</h1>
                  <div style={subTitle}>
                        react, {count}
                  </div>

                  <div style={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        color: 'red'
                  }}>
                        react, {count}
                  </div>


                  <input className="btn" type="button" value="버튼1" onClick={btn1} />
                  <input type="button" value="버튼2" onClick={btn2} />
                  <input type="button" value="버튼3" onClick={btn3} />

                  <input type="button" value="버튼4" onClick={() => {
                        alert('btn4');
                  }} />

                  <br />
                  <br />

                  <span>계산 결과: </span>
                  <span id="resultSpan">결과 값</span>
                  <br />

                  <input type="text" id="num1" />

                  <select id="op">
                        <option value="add">+</option>
                        <option value="sub">-</option>
                        <option value="mul">*</option>
                        <option value="div">/</option>

                  </select>

                  <input type="text" id="num2" />

                  <button type="button" value="계산" onClick={calc}>계산</button>

            </div>
      )
}