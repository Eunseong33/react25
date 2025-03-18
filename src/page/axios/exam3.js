import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { FaRegular } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import AxiosExam2Detail from './exam2detail.js';

export default function AxiosExam3() {

      //item list 가져오기: done
      //find by Name 가져오기: done
      //아이템 등록: ***추가하자마자 useEffect 추가되기 어떻게 하는지 확인
      //좋아요done

      //find api가져오기 아이템 상세 정보 보기  :***데이터 보여주는 창 띄워주기


      const [itemList, setItemList] = useState([]); //item리스트담기

      const [findInput, setFindInput] = useState(null);//아이템 검색
      const [findList, setFindList] = useState([]); //검색결과 보여주기

      const [itemNameInput, setItemNameInput] = useState(null);//아이템 검색
      const [itemPriceInput, setItemPriceInput] = useState(null);//아이템 검색
      const [itemCiInput, setItemCiInput] = useState(''); //아이템 검색
      const [itemDetail, setItemDetail] = useState({}); //item상세정보
      const [itemLike, setItemLike] = useState(null); //

      // const [tempName, setTempName] = useState('');

      //전체리스트
      useEffect(() => {
            axios.get('http://192.168.0.123:8080/api/item/list')
                  .then(response => {
                        setItemList(response.data.data);
                  });
      }, []);


      //상세정보
      const handlerItemDetail = itemIdx => {
            axios.get('http://192.168.0.123:8080/api/item/find', {
                  params: { itemIdx: itemIdx }

            })
                  .then(response => {
                        setItemDetail(response.data.data);
                        console.log(response.data.data);
                  });
      }


      /** 상품검색 */
      const handlerFind = name => {
            const input = { name: findInput };
            axios.get('http://192.168.0.123:8080/api/item/findByName', {
                  params: input
            })
                  .then(response => {
                        console.log(response);
                        setFindList(response.data.data);
                  });
      }

      const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                  handlerFind();
            }
      }

      /**상품입력 */
      const handlerInput = () => {
            const item = { name: itemNameInput, price: itemPriceInput, categoryId: itemCiInput }
            console.log(item);

            axios.post('http://192.168.0.123:8080/api/item/regist',
                  JSON.stringify(item), {
                  headers: {
                        'Content-Type': 'application/json' //json이여야 하는건지 확인
                  }
            }
            ).then(response => {
                  console.log(response);
            })
      }

      /**좋아요 */
      const handlerLike = (itemIdx) => {
            const hitLike = { itemIdx: itemIdx };
            axios.get('http://192.168.0.123:8080/api/item/good',
                  {
                        params: {
                              hitLike
                        }
                  }
                  //       JSON.stringify(hitLike), {
                  //       headers: {
                  //             'Content-Type': 'application/json' 
                  //       }
                  // }
            ).then(response => {
                  console.log(response);
            })
      }

      return (
            <div>
                  <br />
                  <div>
                        <input type="text" onChange={e => setItemNameInput(e.target.value)} placeholder='이름' />
                        <input type="number" onChange={e => setItemPriceInput(e.target.value)} placeholder='가격' />
                        <select
                              value={itemCiInput}
                              onChange={e => setItemCiInput(e.target.value)}
                        >
                              <option value="">카테고리 선택</option>
                              <option value="1">도서</option>
                              <option value="2">전자</option>
                              <option value="3">생활</option>
                        </select>

                        &nbsp;
                        <input type="button"
                              value="추가"
                              onClick={handlerInput}
                        />
                  </div>
                  {/* <추가 /> */}
                  <br />
                  <input type="text" onChange={e => setFindInput(e.target.value)} placeholder="검색명을 입력하세요." onKeyDown={handleKeyDown} />
                  <input type="button" value="검색" onClick={handlerFind} style={{ borderStyle: 'none' }} />

                  <br />
                  <br />

                  <div style={{
                        display: 'flex'
                  }}>
                        {itemList && itemList.map((item, index) => (

                              <div key={index} onClick={() => handlerItemDetail(item.itemIdx)} style={{
                                    border: '1px solid dodgerblue',
                                    padding: '10px',
                                    width: '200px',
                                    backgroundColor: '#b4b4b4',
                                    color: 'white',
                                    cursor: 'pointer'
                              }}>
                                    {/* <span>상품idx</span>
                                    {item.itemIdx}.&nbsp;
                                    <br /> */}
                                    <span>상품명: </span>
                                    {item.name}
                                    <br />
                                    가격: {item.price}원
                                    <br />
                                    <button onClick={() => handlerLike(item.itemIdx)} style={{
                                          border: 'none',
                                          backgroundColor: 'transparent',
                                          cursor: 'pointer',
                                          padding: '0',
                                    }}>
                                          <FaThumbsUp />
                                    </button>  {item.good}

                                    {/* <br /> 카테고리 번호: {item.categoryId} */}

                                    {/* [ip:port]/[contextPath]/[mapping]?request */}

                                    {/* <input type="button" value="좋아요" onClick={() => handlerLike(item.itemIdx)} /> */}
                              </div>
                        ))
                        }
                  </div>
                  <br />

                  {/* 검색 결과 보여주기 */}
                  <div style={{
                        // display: 'flex',
                        // justifyContent: 'center'
                  }}>
                        {findList && findList.map((item, index) => (
                              // <아이템 리스트 list={item}/>

                              <div key={index} style={{
                                    border: '1px solid dodgerblue',
                                    padding: '10px',
                                    width: '200px',
                                    backgroundColor: '#181818',
                                    color: 'white'
                              }}>
                                    {/* <span>상품idx</span>
                                    {item.itemIdx}.&nbsp;
                                    <br /> */}
                                    <span>상품명: </span>
                                    {item.name}
                                    <br />
                                    가격: {item.price}원
                                    <br />
                                    <FaThumbsUp />:  {item.good}



                                    {/* <br /> 카테고리 번호: {item.categoryId} */}


                                    {/* [ip:port]/[contextPath]/[mapping]?request */}

                              </div>
                        ))
                        }
                  </div>
                  {/* 상세보기영역 */}


                  {/* <AxiosExam2Detail detail={tempName}
                        handlerReset={() => {
                              setAreaDetail(null);
                              setTempName('');
                        }} /> */}


                  {Object.keys(itemDetail).length > 0 && <ItemDetail data={itemDetail} handlerReset={
                        () => {
                              setItemDetail({});
                        }
                  } />}
            </div >

      )
}

function ItemDetail(props) {
      return (
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
                  onClick={() => props.handlerReset()}
            >

                  <div style={{
                        width: '500px',
                        height: '500px',
                        borderRadius: '15px',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        display: 'flex', //
                        justifyContent: 'center',
                        alignContent: 'center' //
                  }}>
                        {/* {itemDetail.name} */}
                        <h2>{props.data.name}</h2>
                        <br />
                        <br />
                        <p>{props.data.categoryName}</p>
                        <p>{props.data.price}원</p>
                        <p>     <FaThumbsUp />{props.data.good}</p>
                  </div>

            </div >
      )
}
// function 추가() { //자식버전
//       return (
//             <div>
//             </div>
//       )
// }