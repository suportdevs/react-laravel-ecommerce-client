import styled from "styled-components";
import {mobile} from "../responsive"
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255, .5), rgba(255,255,255, .5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;
    ${mobile({height: '100%'})}
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({width: '75%', margin: '20px 0'})}
`;
const Title = styled.h1`
    font-size: 25px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    ${mobile({flexDirection: 'column'})}
`;
const InputContainer = styled.div`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    display: flex;
    flex-direction: column;
    ${mobile({width: '100%', margin: '5px 0'})}
`;
const Label = styled.label``;
const Input = styled.input`
    padding: 10px;
    border: 1px solid teal;
    margin-top: 5px;
    ${mobile({padding: "5px"})}
`;
const Agreement = styled.span`
    font-size: 13px;
    font-weight: 400;
    margin: 10px 0;
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
`;

const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        try{
            const data = {firstname, lastname, username, email, password, confirm_password};
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form onSubmit={handleRegisterSubmit}>
                    <InputContainer>
                        <Label>First Name</Label>
                        <Input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Last Name</Label>
                        <Input type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Username</Label>
                        <Input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Confirm Password</Label>
                        <Input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    </InputContainer>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b> <Link to="/login">Sign in</Link>
                    </Agreement>
                    <Button type="submit">Create</Button>
                    {/* <Button type="submit">{isLoading ? 'Loading...' : 'Create'}</Button> */}
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Register;