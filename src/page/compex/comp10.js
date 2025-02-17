import { Routes, Route, Link, useNavigate, Switch } from 'react-router-dom';
import { useState, useRef } from 'react'

export default function Comp10() {

      return (
            <div>
                  <Start />

            </div>
      )
}
function Start() {

      //변수명 = useNavigate(); //콜백함수원리
      const movePage = useNavigate(); //router //Component 변경 기능 (육안으로는 페이지 변경처럼 보임)

      return (
            <div>
                  <h2> 10</h2>
                  <input type="button" value="10-1. comp예제1" onClick={() => { movePage('/comp10a'); }} />
                  <input type="button" value="10-2. comp예제2" onClick={() => { movePage('/comp10b'); }} />
                  <input type="button" value="10-2. comp예제3" onClick={() => { movePage('/comp10c'); }} />
                  <input type="button" value="10-2. comp예제4" onClick={() => { movePage('/comp10d'); }} />
                  <input type="button" value="10-2. comp예제5" onClick={() => { movePage('/comp10e'); }} />
                  <input type="button" value="10-2. comp예제6" onClick={() => { movePage('/comp10f'); }} />
            </div>

      )
}