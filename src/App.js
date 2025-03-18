import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Switch } from 'react-router-dom';
import axios from 'axios';
import Comp1 from './page/compex/comp1.js';
import Comp2 from './page/compex/comp2.js';
import Comp3 from './page/compex/comp3.js';
import Comp4 from './page/compex/comp4.js';
import Comp4a from './page/compex/comp4a.js';
import Comp4b from './page/compex/comp4b.js';
import Comp5 from './page/compex/comp5.js';
import Comp6 from './page/compex/comp6.js';
import Comp7 from './page/compex/comp7.js';
import Comp8 from './page/compex/comp8.js';
import Comp9 from './page/compex/comp9.js';
import Comp10 from './page/compex/comp10.js';
import Comp10a from './page/compex/comp10a.js';
import Comp10b from './page/compex/comp10b.js';
import Comp10c from './page/compex/comp10c.js';
import Comp10d from './page/compex/comp10d.js';
import Comp10e from './page/compex/comp10e.js';
import Comp10f from './page/compex/comp10f.js';
import Comp11 from './page/compex/comp11.js';

import AxiosExam1 from './page/axios/exam1.js';
import AxiosExam2 from './page/axios/exam2.js';
import AxiosExam3 from './page/axios/exam3.js';

import UseEffect1 from './page/useHock/useEffect1.js';

import UseCallBack1 from './page/useHock/useCallBack/Parent.js';
import UseMemo1 from './page/useHock/useMemo/Memo1.js';
import Reducer1 from './page/reducer1.js';
import Reducer1a from './page/reducer1a.js';

import 실행 from './page/redux/redux1.js';

function App() {
  return (
    <div className="App">
      {/* 원래 리덕스는 여기에 설치하는거임*/}
      <Router>
        {/* {보이기 && */}

        {/* <Start /> */}
        <헤더 />
        <Routes>
          <Route path={"/"} element={<시작화면 />}></Route>
          <Route path={"/comp1"} element={<Comp1 />}></Route>
          <Route path={"/comp2"} element={<Comp2 />}></Route>
          <Route path={"/comp3"} element={<Comp3 />}></Route>
          <Route path={"/comp4"} element={<Comp4 />}></Route>
          <Route path={"/comp4a"} element={<Comp4a />}></Route>
          <Route path={"/comp4b"} element={<Comp4b />}></Route>
          <Route path={"/comp5"} element={<Comp5 />}></Route>
          <Route path={"/comp6"} element={<Comp6 />}></Route>
          <Route path={"/comp7"} element={<Comp7 />}></Route>
          <Route path={"/comp8"} element={<Comp8 />}></Route>
          <Route path={"/comp9"} element={<Comp9 />}></Route>
          <Route path={"/comp10"} element={<Comp10 />}></Route>
          <Route path={"/comp10a"} element={<Comp10a />}></Route>
          <Route path={"/comp10b"} element={<Comp10b />}></Route>
          <Route path={"/comp10c"} element={<Comp10c />}></Route>
          <Route path={"/comp10d"} element={<Comp10d />}></Route>
          <Route path={"/comp10e"} element={<Comp10e />}></Route>
          <Route path={"/comp10f"} element={<Comp10f />}></Route>
          <Route path={"/comp11"} element={<Comp11 />}></Route>
          {/* 엑시오스 연습 시작 */}
          <Route path={"/axios1"} element={<AxiosExam1 />}></Route>
          <Route path={"/axios2"} element={<AxiosExam2 />}></Route>
          <Route path={"/axios3"} element={<AxiosExam3 />}></Route>
          {/* useEffect연습시작 */}
          <Route path={"/useEffect1"} element={<UseEffect1 />}></Route>

          {/* useCallBack연습 */}
          <Route path={"/parent"} element={<UseCallBack1 />}></Route>
          <Route path={"/memo1"} element={<UseMemo1 />}></Route>
          <Route path={"/reducer1"} element={<Reducer1 />}></Route>
          <Route path={"/reducer1a"} element={<Reducer1a />}></Route>

          <Route path={"/redux1"} element={<실행 />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

/** 첫번째 화면 */
// function Start() {

//   //변수명 = useNavigate(); //콜백함수원리
//   const movePage = useNavigate(); //router //Component 변경 기능 (육안으로는 페이지 변경처럼 보임)

//   return (
//     <div>
//       <h2> 연습용</h2>
//       <Link to="/">home</Link> &nbsp;
//       <Link to="/comp1">comp1 화면으로 이동</Link> &nbsp;
//       <input type="button" value="comp2 이동"
//         onClick={() => {
//           movePage('/comp2');
//         }} />
//     </div>

//   )
// }

function 헤더() {
  const movePage = useNavigate(); //router //Component 변경 기능 (육안으로는 페이지 변경처럼 보임)

  return (
    <div style={{
      border: '1px solid #ff3399'
    }}>
      <h2 style={{
        cursor: 'pointer'
      }} onClick={() => movePage('/')}>home으로 이동</h2>

      {/* <Link to="/comp1">comp1</Link> &nbsp;
      <Link to="/comp2">comp2</Link> &nbsp;
      <Link to="/comp3">comp3</Link> &nbsp; */}

      <input type="button" value="1. comp1 이동" onClick={() => { movePage('/comp1'); }} />
      <input type="button" value="2. comp2 이동" onClick={() => { movePage('/comp2'); }} />
      <input type="button" value="3. comp3 이동" onClick={() => { movePage('/comp3'); }} />
      <input type="button" value="4. comp4 이동" onClick={() => { movePage('/comp4'); }} />
      <input type="button" value="5. 다크모드" onClick={() => { movePage('/comp5'); }} />
      <input type="button" value="6. 학생성적관리" onClick={() => { movePage('/comp6'); }} />
      <input type="button" value="7. comp7 이동" onClick={() => { movePage('/comp7'); }} />
      <input type="button" value="8.회원가입" onClick={() => { movePage('/comp8'); }} />
      <input type="button" value="9. 구구단" onClick={() => { movePage('/comp9'); }} />
      <input type="button" value="10. comp예제" onClick={() => { movePage('/comp10'); }} />
      <input type="button" value="11. comp11 이동" onClick={() => { movePage('/comp11'); }} />

      <br />
      <br />
      {/* 엑시오스 연습 시작 */}
      <input type="button" value="1. axios1 api 지역" style={{ backgroundColor: '#ffc0cb', border: "1px solid #ffc0cb" }} onClick={() => { movePage('/axios1'); }} />&nbsp;
      <input type="button" value="2. axios2 api 지역등록" style={{ backgroundColor: '#ffc0cb', border: "1px solid #ffc0cb" }} onClick={() => { movePage('/axios2'); }} />&nbsp;
      <input type="button" value="3. axios3 api 아이템" style={{ backgroundColor: '#ffc0cb', border: "1px solid #ffc0cb" }} onClick={() => { movePage('/axios3'); }} />&nbsp;
      <br />
      <br />
      {/* useEffect연습시작 */}
      <input type="button" value="1. useEffect연습1" style={{ backgroundColor: '#B0E0E6', border: "1px solid #B0E0E6" }} onClick={() => { movePage('/useEffect1'); }} />&nbsp;

      {/* useCallBack연습 */}
      <input type="button" value="2. useCallBack" style={{ backgroundColor: '#B0E0E6', border: "1px solid #B0E0E6" }} onClick={() => { movePage('/parent'); }} />&nbsp;
      <input type="button" value="3. useMemo" style={{ backgroundColor: '#B0E0E6', border: "1px solid #B0E0E6" }} onClick={() => { movePage('/memo1'); }} />&nbsp;
      <input type="button" value="1. Reducer" style={{ backgroundColor: '#B0E0E6', border: "1px solid #B0E0E6" }} onClick={() => { movePage('/reducer1'); }} />&nbsp;
      <input type="button" value="1a. Reducer 버튼" style={{ backgroundColor: '#B0E0E6', border: "1px solid #B0E0E6" }} onClick={() => { movePage('/reducer1a'); }} />&nbsp;
      <input type="button" value="1. Redux 버튼" style={{ backgroundColor: '#B0E0E6', border: "1px solid #B0E0E6" }} onClick={() => { movePage('/redux1'); }} />&nbsp;

    </div >

  )

}


function 시작화면() {
  return (
    <div>
      <span>http://192.168.0.123:3000/</span><br />
      <a href="http://192.168.0.123:3000/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        http://192.168.0.123:3000/</a>

      <a href="https://emojipedia.org/?form=MG0AV3" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        https://emojipedia.org/?form=MG0AV3</a>

    </div>
  )
}

export default App;
