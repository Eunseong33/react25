import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';

export default function AxiosExam1() {

      const [dataList, setDataList] = useState([]);
      const [dataDetail, setDataDetail] = useState({});

      const handlerAxios1 = () => {
            console.log('handlerAxios1');

            axios.get('https://jsonplaceholder.typicode.com/posts')
                  .then(response => {
                        // console.log(response);
                        // console.log(response.data);
                        setDataList(response.data);
                  });

            //1. response에서 온 데이터를 변수에 넣는다.
            //2. 화면에 보이는가 안보이는가 체크.
      }

      const handlerDetail = (id) => {
            console.log('handlerDetail');
            //      alert(id);
            const URL = 'https://jsonplaceholder.typicode.com/posts/' + id;

            axios.get(URL) //url: uppercase 
                  .then(response => {
                        setDataDetail(response.data);
                  });
      }
      return (
            <div>
                  <br />
                  <h2> Axios Exam</h2>
                  <input type="button" value="axios 호출 1" onClick={handlerAxios1} />
                  <br />
                  <h3>리스트 호출</h3>
                  {dataList.map((item, index) => (
                        <div key={index} onClick={() => handlerDetail(item.id)} style={{ cursor: 'pointer' }} >
                              {item.title}
                        </div>
                  ))}

                  <br />

                  <div>
                        <span style={{ color: '#ff3399' }}> 제목: {dataDetail.title}</span>
                        <br />
                        <span style={{ color: '#ff3399' }}>내용: {dataDetail.body}</span>
                  </div>


            </div >
      )
}
