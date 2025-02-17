import { useState, useRef } from 'react'

export default function Comp2() {


      //form 에 등록된 값
      const [formData, setFormData] = useState({
            username: '', password: ''
      });


      /** useRef 유효성검사 */
      const validationRef = useRef({ username: false, password: false });

      /** 값 insert */
      const handlerChange = e => {
            console.log(e.target);

            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value })) //값 변경
            validateField(name, value); //값 유효성 검사
      }

      /**유효성 검사 함수 */
      const validateField = (name, value) => {
            console.log('val: ', name, value);
            let isValid = true;
            if (name === 'username') {
                  isValid = value.trim().length > 6;
            } else if (name === 'password') {
                  isValid = value.trim().length > 6;
            }
            validationRef.current[name] = isValid;
      }

      /**회원가입, 완료 */
      const handlerSubmit = e => {
            e.preventDefault();
            if (Object.values(validationRef.current).every(Boolean)) {
                  console.log('FormData', formData);
            } else {
                  console.log('Validation error');
            }
      }

      return (
            <div>
                  <label>Username: </label>
                  <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handlerChange}
                  />

                  <br />

                  <label>Password: </label>
                  <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handlerChange} />


                  <input type="button" value="회원가입"
                        onClick={handlerSubmit} />

                  <출력공간 submitData={formData} />


            </div>
      )
}
function 출력공간(props) {
      return (
            <div style={{
                  width: '100%',
                  height: '300px',
                  border: '1px solid blue'
            }}>
                  <h2>출력</h2>
                  <span> {props.submitData.username}</span><br />
                  <span> {props.submitData.password}</span><br />
            </div>

      )
}