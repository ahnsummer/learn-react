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

      <button onClick={()=>{                              // 버튼을 클릭하면
        // state가 array/object형식이면 shallow copy를 만들어서 수저해야함
        let copy = [...title];                            // 변수 title 배열을 복사해서
        copy[0] = '여자 코트 추천';                        // 0번째 배열의 값을 '여자 코트 추천' 으로 변경
        setTitle( copy );                                 // setTitle을 통해 copy 담아서 선언
      }}>
        글수정
      </button>

      {
        title.map(function(param, i){
          const styleCursor = {cursor: "pointer"}
          return (
            <div className="list" key={i}>
              <h4 style={styleCursor} onClick={() => {
                setModal(modal == true ? false : true);
                setContentTitle(i)
              }}>
                { title[i] }

                <span 
                  style={styleCursor}
                  onClick={(e)=>{
                    // 이벤트 버블링현상 막기 (span태그 클릭시 '상위 요소 태그 클릭시 모달창 뜨는 효과'막기)
                    e.stopPropagation(); 

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

      {/* 
        e = 이벤트 객체
        e.target = 이벤트가 발생하는 곳
      */}
      <input type="text" onChange={(e)=> { console.log(e.target.value) }} />

      {
        modal == true ? <Modal contentTitle={contentTitle} setTitle={setTitle} title={title} /> : null
      }
    </div>
  );
}

// Modal Component
function Modal(props){
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