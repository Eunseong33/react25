import { useState, useRef } from 'react'

export default function Comp10b() {

      return (
            <div>

                  <div style={{
                        borderStyle: 'none',
                        backgroundColor: 'tomato',
                        color: 'white'
                  }}>
                        <h2>first div</h2>
                        <Second msg="second div" />
                        <Third />

                  </div>
            </div>
      )
}

function Second(props) {
      return (
            <div style={{
                  width: '50%',
                  height: '100px',
                  border: '3px solid',
                  borderStyle: 'none',
                  padding: '5px',
                  backgroundColor: 'dodgerblue',
                  color: 'white',
                  float: 'left',
            }}>
                  <h2>second div</h2>
                  {props.msg}
            </div>
      )
}

function Third() {
      return (

            <div style={{
                  border: '3px solid',

                  height: '100px',
                  borderStyle: 'none',
                  padding: '5px',
                  backgroundColor: 'mediumseagreen',

                  color: 'white'
            }}>
                  <h2> third div</h2>
            </div>

      )
}
