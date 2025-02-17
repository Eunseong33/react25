import { useState, useRef } from 'react'

export default function Comp10a() {

      return (
            <div>
                  <div style={{
                        borderStyle: 'none',
                        padding: '5px',
                        backgroundColor: 'tomato',
                        color: 'white'

                  }}>
                        <h2>first div</h2>


                  </div>

                  <div style={{
                        border: '3px solid',
                        borderStyle: 'none',
                        padding: '5px',
                        backgroundColor: 'dodgerblue',
                        color: 'white'

                  }}>
                        <h2>second div</h2>


                  </div>

                  <div style={{
                        border: '3px solid',
                        borderStyle: 'none',
                        padding: '5px',
                        backgroundColor: 'mediumseagreen',
                        color: 'white'
                  }}>
                        <h2> third div</h2>

                  </div>
            </div>
      )
}