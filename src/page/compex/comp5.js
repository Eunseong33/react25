import { useState } from 'react';
export default function Comp5() {
      const [DarkMode, setDarkMode] = useState(true);
      return (
            <div>
                  <br />
                  {/* <span>1. 다크모드</span> */}

                  <input type="button" value="다크모드"
                        onClick={() => {
                              setDarkMode(!DarkMode);
                        }} ></input>
                  <br />
                  <br />

                  <div style={{
                        width: '100%',
                        height: '100px',
                        border: '1px solid red',
                        backgroundColor: DarkMode ? '#F5F5DC' : '#181818',
                        color: DarkMode ? '#181818' : '#FFFFF0'
                  }}>
                        <h2>Hello World</h2>
                  </div>


            </div>
      )
}