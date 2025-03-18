import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';

export default function AxiosExam2Detail(props) { //자식입장

      const [childDetail, setChildDetail] = useState('');

      // //onLoad기능
      useEffect(() => {
            setChildDetail(props.detail);//data가 변화가 감지되면 넣겠따는 얘기.
      }, [props.detail]); //[]여기서 감지, []여기 안에 바꿀 대상 작성가능


      // { props.detail.areaName }


      return (
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

                              {/* {childDetail.areaName}
                              {props.detail} */}

                        </div>
                  </div>

            </div>
      )
}
<br />

