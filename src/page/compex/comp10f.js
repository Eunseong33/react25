import { useState, useRef } from 'react'
import img2 from './quiver.jpg'
import img1 from './hungry.jpg'


export default function Comp10f() {
      const data = [
            {
                  "title": "제목1",
                  "content": "내용1",
                  "img": img1
            },
            {
                  "title": "제목2",
                  "content": "내용2",
                  "img": img2

            }
      ]


      return (
            <div>
                  <span>6번</span>

                  {data.map((item, index) => (
                        <연습 img={item.img} title={item.title} content={item.content} />
                  ))
                  }

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
                        <img src={props.img} alt='picture' height='200px' width='200px' />
                  </div>

                  <div>
                        <h2>&nbsp;{props.title}</h2>
                        <span> {props.content}</span>
                  </div>

            </div>
      )
}