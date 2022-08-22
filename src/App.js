/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [date] = useState('2월 17일 발행')
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [contentTitle, setContentTitle] = useState(1);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle( copy );
      }}>
        가나다라순정렬
      </button>

      <button onClick={()=>{ 
        // state가 array/object형식이면 shallow copy를 만들어서 수저해야함
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle( copy ); 
      }}>
        글수정
      </button>

      {
        title.map(function(param, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(modal == true ? false : true);
                setContentTitle(i)
              }}>
                { title[i] }
                <span onClick={()=>{ 
                  let copy = [...like]
                  copy[i] = copy[i] + 1
                  setLike( copy ) 
                }}>
                  💚
                </span> 
                { like[i] }
              </h4> 
              <p>{ date }</p>
            </div>
          )
        })
      }

      <button>글제목</button>

      {
        modal == true ? <Modal contentTitle={contentTitle} setTitle={setTitle} title={title} /> : null
      }
    </div>
  );
}

// Modal Component
function Modal(props, i){

  return (
    <div className='modal'>
      <h4>{props.title[props.contentTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;