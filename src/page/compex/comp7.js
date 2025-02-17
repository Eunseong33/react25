import { useState, useRef } from 'react'

export default function Comp7() {

      let count = 0;
      const [Cnt, setCnt] = useState(0);


      const rst = useRef(null);
      const [result, setResult] = useState();

      const inpu = useRef(null);
      const refCount = useRef(0);


      //다크모드
      const [darkMode, setDarkMode] = useState(true);
      const [접기, set접기] = useState(true);

      // obj변경
      const obj = {
            title: '기본',
            color: 'black'

      }
      const [title, setTitle] = useState(obj);


      return (
            <div>


                  <input type="text" ref={inpu} id="rf" />
                  <input type="button"
                        value="확인"
                        onClick={() => {
                              // console.log('1');
                              //   console.log(document.getElementById('rf'));
                              console.log(inpu.current); //reference 가져올때에는 ref {} 안에 이름 이름에 꼭.current를 붙여줘야함
                        }}
                  />
                  <br />

                  <span> {refCount.current}</span>
                  <input type="button"
                        value="ref 증가"
                        onClick={
                              () => {
                                    refCount.current = refCount.current + 1;
                                    console.log(refCount);
                              }}
                  />
                  <br />
                  <span> {count}</span>
                  <input type="button"
                        value="count 증가"
                        onClick={() => {
                              // console.log('1');
                              console.log('let: ', ++count);
                        }}
                  />
                  <br />

                  <span> {Cnt}</span>
                  <input type="button"
                        value="useState 증가"
                        onClick={() =>
                              setCnt(Cnt + 1)
                        }
                  />
                  <br />
                  <br />
                  <input type="text" ref={rst}></input>
                  <input type="button"
                        value="버튼"
                        onClick={() => {
                              //setResult(document.getElementById('input1').value)
                              setResult(rst.current.value)
                              //console.log(rst.value)
                              //***  =''; (값 초기화)
                              rst.current.value = '';
                              rst.current.focus();
                        }
                        }
                  />
                  <span>{result}</span>

                  <br />

                  <input type="button" value="다크모드" onClick={
                        () => {
                              setDarkMode(!darkMode);
                        }
                  }></input>

                  <input type="button" value="열기/닫기" onClick={
                        () => {
                              set접기(!접기);
                        }
                  } />

                  {/* 비교대상 > || == n ? 'true' : 'false' */}
                  <div style={{
                        width: '100%',
                        height: '600px',
                        border: '1px solid red',
                        backgroundColor: darkMode ? 'white' : '#181818 ',
                        display: 접기 ? 'block' : 'none'
                  }}>
                  </div>


                  <h2 style={{ color: title.color }}>{title.title}</h2>
                  <input type="button" value="빨강" onClick={
                        () => {
                              //  setTitle({ title: '사과', color: 'red' });
                              setTitle({ title: title.title, color: 'red' });
                              //** 주의사항: 색상 바꾸겠다고 냅다 color만 바꾸는 코드 쓰지 말 것!! title 불러오고 나서 color 바꿔주기
                              // setTitle({color: 'red' });

                        }
                  } />

                  {/* //오브젝트 안에 키값을 다 넣을 수없기 떄문에, ... 얕은 복사, 앞에 적힌 것 다 불러오는 것(앞에 내용을 복사해오고 싶을 떄) */}
                  <input type="button" value="파랑" onClick={
                        () => {
                              //  setTitle({ title: '사과', color: 'red' });
                              setTitle({ ...title, color: 'blue' });

                        }
                  } />
                  <input type="button" value="초록" onClick={
                        () => {
                              //  setTitle({ title: '사과', color: 'red' });
                              setTitle({ title: title.title, color: 'green' });

                        }
                  } />
                  <input type="button" value="보라" onClick={
                        () => {
                              //  setTitle({ title: '사과', color: 'red' });
                              setTitle({ title: title.title, color: 'purple' });

                        }} />
                  <br />



            </div>
      )
}