import styled from "@emotion/styled";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    min-height: 300px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Circle = styled.div``;
const Image = styled.img`
    height: 70%;
`;
const Info = styled.div``;
const Icon = styled.div``;

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