import { useState, useRef } from 'react'
import img2 from './quiver.jpg'
import img1 from './hungry.jpg'

export default function Comp10e() {

      const 메시지1 = "내용1";
      const 메시지2 = "내용2";


      return (
            <div>

                  <span>5번</span>

                  <연습 img={img1} msg={메시지1} title="제목1" />
                  <연습 img={img2} msg={메시지2} title="제목2" />

            </div>
      )
}
function 연습(props) {
      return (
            <div style={{
                  borderStyle: 'none',
                  padding: '5px',
                  backgroundColor: '#b4b4b4',
                  color: 'white',
                  display: 'flex'
            }}>

                  <div>
                        <img src={props.img} alt='img' height='200px' width='200px' />
                  </div>

                  <div>
                        <h2>&nbsp;{props.title}</h2>
                        <span> {props.msg}</span>
                  </div>

            </div>
      )
}

