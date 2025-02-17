import { useState, useRef } from 'react'

export default function Comp10c() {

      return (
            <div>
                  <span>3번</span>
                  <연습 />
            </div>
      )
}
function 연습() {
      return (
            <div style={{
                  borderStyle: 'none',
                  padding: '5px',
                  backgroundColor: '#6a5acd',
                  color: 'white',
                  display: 'flex'
            }}>

                  <div>
                        <img src='https://www.3riversarchery.com/blog/wp-content/uploads/2018/01/Quiver-1.jpg' alt='picture1' height='200px' width='200px' />
                  </div>

                  <div>
                        <h2>&nbsp;first div</h2>
                        <span> ...</span>
                  </div>
            </div>
      );
}
