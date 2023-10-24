import { SendOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    padding: 20px;
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 60px;
    font-weight: 900;
    ${mobile({fontSize: "40px"})}
`;
const Description = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
`;
const InputContainer = styled.div`
    width: 50%;
    border: 1px solid lightgray;
    display: flex;
    ${mobile({width: '100%'})}
`;
const Input = styled.input`
    flex: 8;
    border: none;
    padding: 5px;
    padding-left: 10px;
`;
const Button = styled.button`
    flex: 1;
    border:none;
    background-color: teal;
    color: white;
    padding: 5px;
    cursor: pointer;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newslatter</Title>
            <Description>Lorem ipsum dolor sit amet.</Description>
            <InputContainer>
            <Input placeHolder="Your email" />
            <Button><SendOutlined /></Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter;