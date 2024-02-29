import { useState } from "react";
import "./App.css";

function App() {
  let post = "일산 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "일산 맛집추천",
    "홍대 맛집추천",
    "동성로 맛집추천",
    "밤리단길 맛집추천"
  ]);
  let [따봉, 따봉변경] = useState(new Array(글제목.length).fill(0));
  let [modal, setModal] = useState(null);
  let [입력값 ,입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <div className="list">
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "강서구 맛집 추천";
            글제목변경(copy);
          }}
        >
          첫번쨰 제목 변경하기
        </button>

        <button
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy);
          }}
        >
          가나다순으로 정렬하기
        </button>
      </div>

      {글제목.map(function (a,i) {
        let 따봉복사본 = [...따봉];
        return (
          <div className="list">
            <h4 onClick={() =>
            setModal(i)
            }>
              {글제목[i]}{" "}
              <span onClick={(e) => 
                {
                  e.stopPropagation()
                  따봉복사본[i] += 1;
                  따봉변경(따봉복사본);}}>👍</span>{" "}{따봉복사본[i]
                }
                <button onClick={(e)=>{
                  e.stopPropagation();
                  let delete_content=[...글제목];
                  delete_content.splice(i,1);
                  글제목변경(delete_content);
                }

                }>삭제버튼</button>
            </h4>
            
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal != null ? <Modal 글제목={글제목[modal]} 글제목변경={글제목변경}></Modal> : null}

      <input type="text" onChange={(e)=>{
        입력값변경(e.target.value)
      console.log(입력값)}
      }></input>
      <button onClick={() =>{
        if(!입력값){
          return;
        }
        const copy_content=[...글제목];
        const copy_ddabong = [...따봉, 0];
        copy_content.unshift(입력값);
        글제목변경(copy_content);
        따봉변경(copy_ddabong);
      }}>글생성</button>

    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>      
    </div>    
  )
}

export default App;
