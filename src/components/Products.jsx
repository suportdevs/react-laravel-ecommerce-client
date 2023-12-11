import styled from "styled-components";
import {popularProducts} from "../data";
import ProductItem from "./ProductItem";
import { useGetProductsMutation } from "../services/webApi";
import { useEffect, useState } from "react";

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
    const [getProducts, {data, isLoading, isSuccess}] = useGetProductsMutation();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        category && getProducts({category});
    }, [category]);

    useEffect(() => {
        (data && isSuccess) && setProducts(data);
    }, [data, isSuccess]);

    useEffect(() => {
        category && setFilteredProducts(products.filter((item) => 
        Object.entries(filters).every((key, value) => item[key].includes(value))
        ))
    }, [category, products, filters]);
    
    useEffect(() => {
        if(sort === 'newest'){
            setFilteredProducts((prev) => 
                [prev].sort((a,b) => a.created_at - b.created_at)
            )
        }
        if(sort === 'asc'){
            setFilteredProducts((prev) => 
                [prev].sort((a,b) => a.rate - b.rate)
            )
        }
        if(sort === 'desc'){
            setFilteredProducts((prev) => 
                [prev].sort((a,b) => b.rate - a.rate)
            )
        }
    }, [sort])

    return (
        <Container>
        <Title>Hot Deal</Title>
        <Description>Find your best feelings in our deal</Description>
            <ProductContainer>
            {
                isLoading ? 'Loading...' : filteredProducts && filteredProducts.map((item, index) => <ProductItem item={item} key={index}/>)
            }
            </ProductContainer>
        </Container>
    )
}

export default Products;