import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255, .5), rgba(255,255,255, .5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
`;
const Title = styled.h1`
    font-size: 25px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
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
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <InputContainer>
                        <Label>First Name</Label>
                        <Input type="text" placeholder="First Name" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Last Name</Label>
                        <Input type="text" placeholder="Last Name" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Username</Label>
                        <Input type="text" placeholder="Username" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input type="text" placeholder="Email" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password" />
                    </InputContainer>
                    <InputContainer>
                        <Label>Confirm Password</Label>
                        <Input type="password" placeholder="Confirm Password" />
                    </InputContainer>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;