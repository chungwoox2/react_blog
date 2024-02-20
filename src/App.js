
import { useState } from 'react';
import './App.css';



function App() {

  let post = "일산 우동 맛집";
  let [a,b] = useState(["30대 남자코트추천","40대 여자 코트추천",'20대 남자 코트추천']);
  let [따봉,따봉변경] = useState(0);
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className='list'>

      <button onClick={()=>{
          let copy=[...a];
          copy[0]="여자 코트 추천~"
          b(copy)
        }}>첫번쨰 제목 변경하기</button>

        <button onClick={()=>{
          let copy=[...a];
          copy.sort();
          b(copy)
        }}>가나다순으로 정렬하기</button>
        <h4>{a[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉}</h4>
        
        
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
