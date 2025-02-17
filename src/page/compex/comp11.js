import { useState, useRef } from 'react'

export default function Comp11() {
      const [화면, set화면] = useState(1);
      return (
            <div>

                  <input type="button" value="1" onClick={() => set화면(1)} />
                  <input type="button" value="2" onClick={() => set화면(2)} />

                  {/* 화면 보이기, 안보이기// 컴포넌트 관리 */}

                  {화면 == '1' &&

                        <div style={{
                              height: '300px',
                              backgroundColor: 'tomato'
                        }}>
                        </div>
                  }

                  {화면 == '2' &&
                        <div style={{
                              height: '300px',
                              backgroundColor: 'dodgerblue'
                        }}>

                        </div>
                  }

            </div>
      )
}