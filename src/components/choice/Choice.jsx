import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Choice = () => {
    let navigate = useNavigate();
    return (
        <div>
            <p>전체게임</p>
                <StButton onClick={() => { navigate("/chart") }}> 랭킹보기 </StButton>
                <StButton onClick={() => { navigate("/admin/:id") }}> 관리자 </StButton>
            <div>
                
            </div>
            <div>
            <GameBox>
                <Button onClick={() => { navigate("/game/counter") }}> 카운터 </Button>
                <Button onClick={() => { navigate("/game/oddeven") }}> 홀짝 </Button>
                <Button onClick={() => { navigate("/game/dice") }}> 주사위 </Button>
                <Button onClick={() => { navigate("/game/lotto") }}> 로또 </Button>
            </GameBox>
            </div>
        </div>
    )
}

export default Choice;

const GameBox = styled.div `
display: flex;
margin-top: 4rem;
padding:12px 24px 24px 24px;
background-size: 240px;

`;

const Button = styled.button `
    border: 1px solid #333;
    background: #333;
    color: #fff;
    font-size: 19px;
    padding: 13px 0;
    margin: 15px 15px 15px;
    width: 400px;
    display: inline-block;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
`;

const StButton = styled.button `
    outline: none;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    border-radius: 4px;
    line-height: 1;
    font-weight: 500;
    transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;
    text-decoration: none;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    user-select: none;
    white-space: nowrap;
    max-width: 100%;
    height: 42px;
    font-size: 20px;
    padding: 0px 22px;
    min-width: 64px;
    background-color: transparent;
    border-color: transparent;
    color: rgb(48, 52, 65);
    margin-right: 16px;
    `
