import { useState, useRef } from 'react'
export default function Comp6() {
      return (
            <div>
                  <br />
                  <br />
                  <span>6. 학생성적관리</span>
                  <h2> 학생 성적</h2>
                  <입력 />

            </div>
      )
}
function 입력() {
      return (
            <div>
                  <input type="text" placeholder='이름' />      <input type="text" placeholder='국어' />      <input type="text" placeholder='영어' />      <input type="text" placeholder='수학' />
                  &nbsp;
                  <input type="button"
                        value="추가"
                  // onClick={() => {
                  //       // console.log('1');
                  //       //   console.log(document.getElementById('rf'));
                  //       console.log(inpu.current); //reference 가져올때에는 ref {} 안에 이름 이름에 꼭.current를 붙여줘야함
                  // }}
                  />
            </div>
      )
}