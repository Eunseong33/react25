import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';

import AxiosExam2Detail from '../../page/axios/exam2detail.js';

export default function AxiosExam2() {

      const [areaList, setAreaList] = useState([]);//지역리스트담기
      const [areaDetail, setAreaDetail] = useState(null);//
      const [tempName, setTempName] = useState('');
      const [areaInput, setAreaInput] = useState(null);//

      const handlerAreaList = () => {
            //   alert('지역 리스트 불러오기');
            axios.get('http://192.168.0.123:8080/api/area/list')
                  .then(response => {
                        console.log(response);
                        setAreaList(response.data.data);
                  });
      }

      const handlerAreaDetail = (idx) => {
            axios.get('http://192.168.0.123:8080/api/area/findById', {
                  params: {
                        id: idx //여기다가 데이터를 보내면 post쓰는 으미가 없다. 데이타는 바디에 넣어라.
                  }
            })
                  .then(response => {
                        console.log(response);
                        setAreaDetail(response.data.data);
                        setTempName(response.data.data.areaName);
                  });
      }

      const handlerInput = () => {
            const obj = { areaName: areaInput };

            console.log(obj);

            axios.post('http://192.168.0.123:8080/api/area/regist',
                  JSON.stringify(obj), {
                  headers: {
                        'Content-Type': 'application/json'
                  }
            }
            ).then(response => {
                  console.log(response);
            })
      }

      return (
            <div>
                  <h2>서버 호출하기</h2>

                  <h4>지역등록</h4>
                  <input type="text" onChange={e => setAreaInput(e.target.value)} />
                  <input type="button" value="지역 입력" onClick={handlerInput} />
                  <br />
                  <h4>지역출력</h4>

                  <input type="button" value="지역리스트 불러오기" onClick={handlerAreaList} />



                  {areaList.map((item, index) => (

                        <div key={index}>
                              {item.idx}.&nbsp;
                              {item.areaName}
                              <input type="button" value="param 전달하기" onClick={
                                    () => handlerAreaDetail(item.idx)} />
                              {/* [ip:port]/[contextPath]/[mapping]?request */}
                        </div>
                  ))}
                  <br />

                  {/* 상세보기영역 */}
                  {/* {areaDetail !== null && <AxiosExam2Detail detail={tempName}
                        handlerReset={() => {
                              setAreaDetail(null);
                              setTempName('');
                        }} />} */}

                  {areaDetail !== null &&

                        <div>
                              {/* <h2>test</h2> */}



                              <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100vw',
                                    height: '100vh',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex', //
                                    justifyContent: 'center',
                                    alignContent: 'center', //
                                    alignItems: 'center'
                              }}
                                    // onClick={() => setAreaDetail(null)}
                                    //onClick={() => props.handlerReset()}
                                    onClick={() => {
                                          setAreaDetail(null);
                                          setTempName('');
                                    }}
                              >

                                    <div style={{
                                          width: '100px',
                                          height: '50px',
                                          borderRadius: '15px',
                                          backgroundColor: 'rgba(255, 255, 255, 1)',
                                          display: 'flex', //
                                          justifyContent: 'center',
                                          alignContent: 'center' //
                                    }}>

                                          {tempName}
                                          {/* {childDetail.areaName}
                              {props.detail} */}

                                    </div>
                              </div>

                        </div>}
            </div >


      )
}
