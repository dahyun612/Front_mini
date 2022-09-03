import { useNavigate } from "react-router-dom";
import {useState} from "react"
import styled from "styled-components";


const FormLogin = () => {
    let navigate = useNavigate();
    let initialState = {
        id: "",
        password: ""
    }
    let [member, setMember] = useState(initialState);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setMember({ ...member, [name]: value });
      };
    return (
        <div>
            <StContainer>
            <div>
                <Form>
                <Input placeholder="아이디"
                    onChange={onChangeHandler}
                    name="id"
                    value={member.id}
                    type="text"/>
                </Form>
            </div>
            <div>
            <Form>
            <Input placeholder="비밀번호"
                    onChange={onChangeHandler}
                    name="password"
                    value={member.password}
                    type="password"/>
             </Form>
            </div>
            
            <div>
                
                <Button onClick={()=>{navigate("/")}}>로그인</Button>
                <Button onClick={()=>{navigate("/signup")}}>회원가입</Button>
               
            </div>
             </StContainer>
        </div>
    )
}
export default FormLogin;

const StContainer = styled.div `
width:450px;
margin: 0 auto;
margin-top: 4rem;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;

`;

const Form = styled.div `
    overflow: hidden;
    display: block;
    width: 100%;
    margin: 0 0 8px 0;
    border: 1px solid #eee;
    color: #8F8F91;
`;

const Input = styled.input`
    width: 95%;
    height: 40px;
    line-height: 28px;
    padding: 2px 2px 2px 7px;
    border: 0 none;
    color: #8F8F91;
    vertical-align: middle;
`;
const Button = styled.button `
    background: #333;
    color: #fff;
    font-size: 17px;
    padding: 13px 0;
    margin: 15px 0 0;
    width: 400px;
    display: inline-block;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
`;