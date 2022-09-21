import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [date] = useState('2월 17일 발행')
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [contentTitle, setContentTitle] = useState(1);

  let [input, setInput] = useState('');
  const onReset = (e) => {
    setInput('');
  };

  return (
    <div className="App w-full">
      <div className="py-4 bg-yellow-400 text-white font-bold text-4xl">
        <h4>Blog</h4>
      </div>
      
      <button 
        className='w-40 bg-pink-300 p-2 m-4 rounded-2xl text-white font-bold'
        onClick={()=>{
          let copy = [...title];
          copy.sort();
          setTitle( copy );
        }}
      >
        가나다라순 정렬
      </button>

      <button 
        className='w-40 bg-pink-300 p-2 m-4 rounded-2xl text-white font-bold'
        onClick={()=>{ 
          // state가 array/object형식이면 shallow copy를 만들어서 수저해야함
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle( copy ); 
        }}
      >
        글제목 수정
      </button>

      {
        title.map(function(param, i){
          return (
            <div className="mb-2 px-4 flex items-center justify-between border-gray-300 border-y-[1px] rounded-2xl cursor-pointer" key={i}>
              <div 
                onClick = {() => {
                  setModal(modal === true ? false : true);
                  setContentTitle(i)
                }}
              >
                { title[i] }
                <span 
                  className='ml-2'
                  onClick = {(e)=>{ 
                    e.stopPropagation(); // event bubbling현상 막아줌
                    let copy = [...like]
                    copy[i] = copy[i] + 1
                    setLike( copy ) 
                  }}
                >
                  💚
                </span> 
                { like[i] }
                <p>{ date }</p>
              </div> 
              <button 
                onClick={()=> {
                  let copy = [...title];
                  copy.splice(i, 1);
                  setTitle(copy);
                }}
                className='w-12 py-2 rounded-xl bg-red-500 text-white font-bold'
              >
                삭제
              </button>
            </div>
          )
        })
      }

      <div className='w-full'>
        <input
          className='border-[1px] border-gray-400 mr-4 p-2'
          onChange={(e)=> { 
            setInput(e.target.value);
          }}
        />
        <button 
          onClick={(e) => {
            let copy = [...title];
            copy.unshift(input);
            setTitle(copy);
          }}
          className='w-20 py-2 rounded-xl bg-blue-300 text-white font-bold'
        >
          추가
        </button>
      </div>
      
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
