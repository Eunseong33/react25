import { useState, useRef } from 'react'

export default function Comp3() {

      const [input, setInput] = useState('');
      const [입력, set입력] = useState('');

      return (
            <div>
                  <br />
                  <br />

                  <h2>Hello World</h2>
                  <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                  {input}<br />

                  <input type="text" />
                  <input type="button" value="자식에게 전송" onClick={() => {
                        alert('전송');
                  }} />

                  <div style={{
                        width: '300px',
                        height: '300px',
                        border: '1px solid green'
                  }}>
                        <h2>Child2</h2>
                        {input}
                  </div>
                  <Second data={input} data2='hello' />
            </div>
      )
}

function Second(props) {
      return (
            <div style={{
                  width: '300px',
                  height: '300px',
                  border: '1px solid blue'
            }}>
                  <h2>Child3</h2>
                  {props.data}
                  <br />
                  {props.data2}
            </div>
      )
}