/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let [title, titleSet] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [date, dateSet] = useState('2월 17일 발행')
  let [like, likeSet] = useState(0);
  /**
   * 변수와 state의 차이점
   * state는 변경되면 쓰던 html은 자동으로 재렌더링 됨
   * -> 언제써야하는지? 변동시 자동으로 html에 반영되게 만들고 싶으면 state쓰면 됨
   */

  function addLike(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        titleSet(copy);
      }}>가나다라순정렬</button>

      <button className="btn" onClick={()=>{ 
        // state가 array/object형식이면 shallow copy를 만들어서 수저해야함
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        titleSet(copy); 
        }}>글수정</button>

      <div className='list'>
        <h4>{ title[0] } <span onClick={()=>{ likeSet( like + 1 ) }}>💚</span> { like } </h4>
        <p>{ date }</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>{ date }</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>{ date }</p>
      </div>
    </div>
  );
}

export default App;
