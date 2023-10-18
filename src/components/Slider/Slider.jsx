import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: coral;
`;
const Arraw = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
`;

const SliderWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;
const SliderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    height: 80vh;
`;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const Button = styled.button``;

const Slider = () => {
    return (
        <Container>
            <Arraw direction="left"><ArrowBackIosNewOutlined /></Arraw>
            <SliderWrapper>
                <SliderItem>
                    <ImgContainer>
                        <Image src='https://i.ibb.co/cXFnLLV/3.png' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugit!</Description>
                        <Button>Order Now</Button>
                    </InfoContainer>
                </SliderItem>
            </SliderWrapper>
            <Arraw direction="right"><ArrowForwardIosOutlined /></Arraw>
        </Container>
    )
}

export default Slider;