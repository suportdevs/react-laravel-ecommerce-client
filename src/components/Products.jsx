import styled from "styled-components";
import {popularProducts} from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
    padding: 20px;
    text-align: center;
`;
const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Title = styled.h1`
    font-size: 25px;
    color: teal;
`;
const Description = styled.p`
    color: #717171;
    margin-bottom: 20px;
`;


const Products = ({category, filters, sort}) => {
    return (
        <Container>
        <Title>Hot Deal</Title>
        <Description>Find your best feelings in our deal</Description>
            <ProductContainer>
            {
                popularProducts && popularProducts.map((item, index) => <ProductItem item={item} key={index}/>)
            }
            </ProductContainer>
        </Container>
    )
}

export default Products;