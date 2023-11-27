import styled from "styled-components";
import {mobile} from "../responsive"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../utilies/axios";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255, .5), rgba(255,255,255, .5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({width: '75%'})}
`;
const Title = styled.h1`
    font-size: 25px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const InputContainer = styled.div`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    display: flex;
    flex-direction: column;
`;
const Label = styled.label``;
const Input = styled.input`
    padding: 10px;
    border: 1px solid teal;
    margin-top: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border:none;
    border-radius: 5px;
    background-color: teal;
    color: white;
    font-size 20px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        await csrf();
        try{
            await axios.post('/login', {email,password});
        }catch(err){
            console.log(err);
        }
    }
        
    return (
        <>
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form onSubmit={handleLoginSubmit}>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} placeHolder="Email" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeHolder="Password" />
                    </InputContainer>
                    <Button type="submit">Log In</Button>
                    <Link to="/forgot-password" style={{marginTop: '15px'}}>Forgot your password</Link>
                    <p style={{marginTop: '15px'}}>New member? <Link to="/register" > Create an account</Link></p>
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Login;