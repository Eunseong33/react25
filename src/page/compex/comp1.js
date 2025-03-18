import { useState } from 'react';
export default function Comp1() {

      const [아이디, set아이디] = useState('');
      const [비밀번호, set비밀번호] = useState('');
      const [완료, set완료] = useState(false);


      /** 취미 */
      const [취미, set취미] = useState([]);
      const handlerHobbyCheck = e => {
            console.log(e.target.value);
            /** 배열에 값 존재 */
            if (취미.includes(e.target.value)) {
                  set취미(취미.filter(item => item !== e.target.value));
            }
            /** 배열에 값이 존재 하지 않는다. */
            else {
                  //얕은 복사:
                  //변수는 2개인데, 같은 주소를 바라보면 얕은 변수
                  set취미([...취미, e.target.value]);
            }
      }
      return (
            <div>
                  {/* 입력 공간 */}
                  <form>
                        <input type="text" value={아이디} onChange={
                              e => set아이디(e.target.value)
                        } />

                        {/* 아이디값을 콘솔에 찍어보고 싶을 때 */}
                        {/* <input type="text" value={아이디} onChange={
                              e => {
                                    set아이디(e.target.value);
                                    console.log('아이디 입력값:', e.target.value);
                              }
                        } /> */}

                        <input type="password" value={비밀번호} onChange={
                              e => set비밀번호(e.target.value)
                        } />
                        <input
                              type="checkbox"
                              name="hobbys"
                              value="수영"
                              onChange={handlerHobbyCheck} />수영
                        <input
                              type="checkbox"
                              name="hobbys"
                              value="독서"
                              onChange={handlerHobbyCheck} />독서
                        <input
                              type="checkbox"
                              name="hobbys"
                              value="운동"
                              onChange={handlerHobbyCheck} />운동

                        <input type="button" value="전송"
                              onClick={() => set완료(true)}
                        />
                  </form>
                  {/* 출력 공간 */}
                  <출력화면 />

            </div>
      )
}

function 출력화면() {
      return (
            <div>

            </div>
      )
}
