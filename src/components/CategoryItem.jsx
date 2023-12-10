import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    top: 70%;
    // bottom: 0;
    padding: 10px 20px;
    background-color: #fff;
    color: gray;
    font-size: 15px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0;
    transition: all .3s ease;
    &:hover{
        background-color: teal;
        border: none;
        color: #fff;
    }
`;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
    &:hover ${Button}{
        top: 55%;
        opacity:1;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 40vh;
    object-fit: cover;
    transition: all .3s ease;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    color: white;
`;
const Title = styled.h1`
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 20px;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`products/${item.name}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Shop Now</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem;