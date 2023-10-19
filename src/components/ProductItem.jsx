import styled from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    letf: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, .2);
    transition: all .3s ease;
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    min-height: 300px;
    background-color: #f5fbfd;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    &:hover ${Info}{
        opacity: 1;
    }    
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`;
const Image = styled.img`
    height: 70%;
    width: 100%;
    z-index: 2;
`;
const Icon = styled.div`
    padding: 10px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const ProductItem = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                <ShoppingCartOutlined />
                </Icon>
                <Icon>
                <SearchOutlined />
                </Icon>
                <Icon>
                <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem;