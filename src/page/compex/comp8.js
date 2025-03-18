import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Popup from './Popup.js';

export default function Comp8() {

      //아이디, 비번, 이름, 이메일, 연락처, 생일, 성별, 취미
      const [username, setUsername] = useState();
      const [password, setPassword] = useState();
      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [phone, setPhone] = useState();
      const [birthdate, setBirthdate] = useState();
      const [gender, setGender] = useState();
      const [extratime, setExtratime] = useState([]);
      const [result, setResult] = useState(false);

      //오류메시지
      const [usernameMsg, setUsernameMsg] = useState();
      const [passwordMsg, setPasswordMsg] = useState();
      const [emailMsg, setEmailMsg] = useState();
      const [phoneMsg, setPhoneMsg] = useState();
      // const [birthdateMsg, setBirthdateMsg] = useState();

      //유효성 검사
      const [isUsername, setIsUsername] = useState(false);
      const [isPassword, setIsPassword] = useState(false);
      const [isEmail, setIsEmail] = useState(false);
      const [isPhone, setIsPhone] = useState(false);
      // const [isBirthdate, setIsBirthdate] = useState(false);

      const handlerUsernameUpdate = (e) => {
            const currentUsername = e.target.value;
            setUsername(currentUsername);
            const usernameRegExp = /^[a-zA-z0-9]{4,12}$/;

            if (!usernameRegExp.test(currentUsername)) {
                  setUsernameMsg("4-12 사이 대소문자 또는 숫자만 입력해주세요.");
                  setIsUsername(false);
            } else {
                  setUsernameMsg(
                        <span>&nbsp;<FaCheck /> <FontAwesomeIcon icon="fa-solid fa-check" />
                              &nbsp;사용 가능한 아이디입니다.</span>
                  );
                  setIsUsername(true);
            }
      };

      const handlerPwUpdate = (e) => {
            const currentPassword = e.target.value;
            console.log(e.target.value);
            setPassword(currentPassword);
            const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
            if (!passwordRegExp.test(currentPassword)) {
                  setPasswordMsg(
                        "영어 대소문자 + 숫자 + 특수문자 조합으로 8자리 이상 입력해주세요!"
                  );
                  setIsPassword(false);
            } else {
                  setPasswordMsg("사용 가능한 비밀번호입니다.");
                  setIsPassword(true);
            }
      }

      const handlerNameUpdate = (e) => {
            console.log(e.target.value);
            setName(e.target.value);
      }

      const handlerBirthdateUpdate = (e) => {
            console.log(e.target.value);
            setBirthdate(e.target.value);
      }

      const handlerPhoneUpdate = (e) => {
            console.log(e.target.value);
            const currentPhone = e.target.value;
            setPhone(currentPhone);
            const phoneRegExp = /^01([0])([0-9]{4})([0-9]{4})$/;
            //const phoneRegExp = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;

            if (!phoneRegExp.test(currentPhone)) {
                  setPhoneMsg("올바른 형식이 아닙니다!");
                  setIsPhone(false);
            } else {
                  setPhoneMsg("사용 가능한 번호입니다.");
                  setIsPhone(true);
            }
      };

      const handlerEmailUpdate = (e) => {
            const currentEmail = e.target.value;
            setEmail(currentEmail);
            const emailRegExp =
                  /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

            if (!emailRegExp.test(currentEmail)) {
                  setEmailMsg("이메일의 형식이 올바르지 않습니다!");
                  setIsEmail(false);
            } else {
                  setEmailMsg("사용 가능한 이메일 입니다.");
                  setIsEmail(true);
            }
      }
      const handlerGenderUpdate = (e) => {
            console.log(e.target.value);
            setGender(e.target.value);
      }

      const handlerHobbyUpdate = (e) => {
            const value = e.target.value;
            setExtratime((prev) =>
                  prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
            );
      };


      return (
            <div>


                  <div className="container">
                        <h2 className="text-center my-4">회원가입</h2>

                        <div className="d-flex align-items-center">
                              <div>
                                    <span>	<label htmlFor="username" >아이디</label></span>
                              </div>
                              <div className="mr-3">
                                    <input type="text" autoComplete="off" className="form-control"
                                          id="username" name="username" onChange={handlerUsernameUpdate} required />
                                    {/* value={username} */}
                              </div>
                              <div>
                                    <p> {usernameMsg}</p>
                              </div>

                        </div>


                        {/* 비번 */}
                        <div className="d-flex align-items-center">
                              <div>
                                    <span>	<label htmlFor="password" >password</label></span>
                              </div>
                              <div>
                                    <input type="password" autoComplete="off" id="password"
                                          name="password" className="form-control" placeholder="8자 이상. 영어 대소문자, 숫자, 특수문자" onChange={handlerPwUpdate} required /> </div>
                              <div>   <p> {passwordMsg}</p></div>

                        </div>

                        {/* 이름 */}

                        <div className="d-flex align-items-center">

                              <div>
                                    <span>	<label htmlFor="name" >이름</label></span>
                              </div>

                              <div>
                                    <input type="text" autoComplete="off" class="form-control"
                                          id="name" name="name" placeholder="본명" onChange={handlerNameUpdate} required />
                              </div>



                        </div>



                        {/* 메일 */}
                        <div className="d-flex align-items-center">
                              <div>
                                    <span>	<label htmlFor="email" >이메일</label></span>
                              </div>
                              <div className="ml-5">
                                    <input type="email" className="form-control" id="email" placeholder="abc@abc.com"
                                          name="email" onChange={handlerEmailUpdate} required />  </div>
                              <div> <p>{emailMsg}</p></div>

                        </div>


                        {/* 연락처 */}
                        <div className="d-flex align-items-center">
                              <div>
                                    <span>	<label htmlFor="phone" >연락처</label></span>
                              </div>

                              <div className="ml-2">
                                    <input type="tel" autoComplete="off" className="form-control"
                                          id="phone" name="phone" placeholder="-없이 숫자만 (01012345678)" onChange={handlerPhoneUpdate}
                                          required />   </div>
                              <div>   <p> {phoneMsg}</p> </div>

                        </div>

                        {/* 생년월일 */}

                        <div className="d-flex align-items-center">

                              <div>
                                    <span>	<label htmlFor="birthdate" >생일</label></span>
                              </div>

                              <div>
                                    <input type="date" className="form-control" id="birthdate"
                                          name="birthdate" onChange={handlerBirthdateUpdate} required />
                              </div>
                        </div>


                        <br />
                        {/* 성별 */}

                        <div className="d-flex align-items-center justify-content-start">

                              <div className="mr-3">
                                    <span>	<label htmlFor="gender" >성별</label></span>

                              </div>

                              <div className="d-flex">
                                    <div className="form-check">
                                          <input type="radio" autoComplete="off" class="form-check-input"
                                                id="male" name="gender" value="male" onChange={handlerGenderUpdate} /> <label htmlFor="male"
                                                      className="form-check-label">남성</label>
                                    </div>
                                    &nbsp;
                                    <div className="form-check inline-radio">
                                          <input type="radio" autoComplete="off" className="form-check-input"
                                                id="female" name="gender" value="female" onChange={handlerGenderUpdate} /> <label
                                                      htmlFor="female" class="form-check-label">여성</label>
                                    </div>
                              </div>

                        </div>

                        <br />

                        {/*취미 */}

                        <div className="d-flex align-items-center">

                              <div>
                                    <span><label htmlFor="extratime" >취미</label></span>
                              </div>

                              <div>
                                    <input type="checkbox" name="extratime" value="컴퓨터" onChange={handlerHobbyUpdate} />&nbsp;컴퓨터
                                    <input type="checkbox" name="extratime" value="인터넷" onChange={handlerHobbyUpdate} />&nbsp;인터넷
                                    <input type="checkbox" name="extratime" value="여행" onChange={handlerHobbyUpdate} />&nbsp;여행
                                    <input type="checkbox" name="extratime" value="영화감상" onChange={handlerHobbyUpdate} />&nbsp;영화감상
                                    <input type="checkbox" name="extratime" value="음악감상" onChange={handlerHobbyUpdate} />&nbsp;음악감상
                              </div>
                        </div>

                        <div>
                              {/* <input type="reset" value="reset" /> */}
                              {/* <input type='button' onClick={reset} /> */}
                              <input type="button" id="submitButton" value="submit"
                                    onClick={
                                          () => { setResult(true) }
                                    } />

                        </div>

                        {/* 입력결과 보기 */}
                        {result && (
                              <div>
                                    <p><strong>아이디:</strong> {username}</p>
                                    <p><strong>비밀번호:</strong> {password}</p>
                                    <p><strong>이메일:</strong> {email}</p>
                                    <p><strong>연락처:</strong> {phone}</p>
                                    <p><strong>생일:</strong> {birthdate}</p>
                                    <p><strong>성별:</strong> {gender}</p>
                                    <p><strong>취미:</strong> {extratime.join(", ")}</p>
                              </div>
                        )}


                  </div>
            </div>
      )
}