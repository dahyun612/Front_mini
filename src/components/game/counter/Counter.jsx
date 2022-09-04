import { useState, useEffect } from "react";
import styled from "styled-components";


const Counter = () => {
    let [count, setCount] = useState(0);
    let [timer, setTimer] = useState(30);
    let [start, setStart] = useState(false);
    let [bet, setBet] = useState("")

    useEffect(() => {
        if(start){
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            }else if(timer=0){
                setStart(false)
            }
        }
    }, [timer, start])
    return (
        <div>
            <p>카운터</p>
            <StContainer>
            <p>{count}</p>
            {timer <= 10 ? <p style={{ color: "red" }}>남은 시간: {timer}초</p> : <p>남은 시간: {timer}초</p>}
            <StButton onClick={()=>{setStart(true)}}>시작</StButton>
            <div>
                <Label>
                <Input placeholder="배팅금액"
                    onChange={(e) => { setBet(e.target.value) }}
                    name="bet"
                    value={bet}
                    type="text" />
                <StButton>배팅하기</StButton>
                </Label>
            </div>
            <div>
            <StButton onClick={() => {
                if (timer > 0) { setCount(count + 1) }
            }}>나를 눌러줘</StButton>
            <StButton onClick={() => timer === 0 ? alert(`${count}점 등록되었습니다. `) : null}>점수 처리</StButton>
            <StButton onClick={() => {
                if (timer === 0) { setTimer(30); setCount(0); setStart(true); }
            }}>재시작</StButton>
            
            </div>
            </StContainer>
        </div>
    )
}

export default Counter;


const StContainer = styled.div `
width:450px;
margin: 0 auto;
margin-top: 4rem;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;

`;


const StButton = styled.button`
    padding: 8px 15px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid #333;
    margin: 15px 8px 15px;
    background: #333;
    color: #fff;
    display: inline-block;
    line-height: normal;
    text-transform: uppercase;
    
    `

const Label = styled.label `
overflow: hidden;
display: block;
width: 100%;
margin: 0 0 8px 0;
border: 1px solid #eee;
color: #8F8F91;
`;

const Input = styled.input`
width: 55%;
height: 25px;
line-height: 28px;
padding: 0px 0px 2px 5px;
border: 0 none;
color: #8F8F91;

`;
  