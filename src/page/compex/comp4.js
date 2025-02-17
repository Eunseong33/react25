import { Routes, Route, Link, useNavigate, Switch } from 'react-router-dom';
import { useState, useRef } from 'react'

// import Comp4A from './page/compex/comp4a.js'; 여기에다 주면 절대 작동안됨.
// import Comp4B from './page/compex/comp4b.js';


export default function Comp4() {


      return (
            <div>

                  {/* {보이기 && */}

                  <Start />
                  <Routes>
                        {/* <Route path={"/comp4a"} element={<Comp4A />}></Route> 여기에다 주면 절대 작동안됨.
                              <Route path={"/comp4b"} element={<Comp4B />}></Route> 
                        {/* <Route path={"/comp4c"} element={<Comp4C />}></Route>
                              <Route path={"/comp4d"} element={<Comp4D />}></Route> */}
                  </Routes>


                  <br />
                  <br />

            </div>
      )
}

function Start() {

      //변수명 = useNavigate(); //콜백함수원리
      const movePage = useNavigate(); //router //Component 변경 기능 (육안으로는 페이지 변경처럼 보임)

      return (
            <div>
                  <h2> 4-1 계산기</h2>
                  <input type="button" value="4-1. 계산기1" onClick={() => { movePage('/comp4a'); }} />
                  <input type="button" value="4-2. 계산기2" onClick={() => { movePage('/comp4b'); }} />
            </div>

      )
}