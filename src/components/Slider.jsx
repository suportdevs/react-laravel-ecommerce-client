import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import styled from "styled-components";
import {sliderItems} from "../data";
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
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
    z-index: 2;
`;

const SliderWrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    -webkit-transition: all 1.5s ease;
    transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;
const SliderItem = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
    font-weight: bold;
    margin: 0;
`;
const Description = styled.p`
    font-size: 20px;
    margin: 20px 0;
    letter-spacing: 5px;
`;
const Button = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
`;

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleSliderDirection = (direction) => {
        if(direction === 'left'){
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        }else{
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arraw direction="left" onClick={() =>handleSliderDirection('left')}><ArrowBackIosNewOutlined /></Arraw>
            <SliderWrapper sliderIndex={sliderIndex}>
                {sliderItems && sliderItems.map((slider, index) =>(
                <SliderItem key={index} bg={slider.bg}>
                    <ImgContainer>
                        <Image src={slider.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{slider.title}</Title>
                        <Description>{slider.desc}</Description>
                        <Button>Order Now</Button>
                    </InfoContainer>
                </SliderItem>
                ))}
            </SliderWrapper>
            <Arraw direction="right" onClick={() =>handleSliderDirection('right')}><ArrowForwardIosOutlined /></Arraw>
        </Container>
    )
}

export default Slider;