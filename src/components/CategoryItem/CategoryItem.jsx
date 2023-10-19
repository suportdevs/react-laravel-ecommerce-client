import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-weight: 800;
    margin-bottom: 20px;
`;
const Button = styled.button`
    padding: 10px 20px;
    background-color: #fff;
    color: gray;
    font-size: 20px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Shop Now</Button>
                </Info>
        </Container>
    )
}

export default CategoryItem;