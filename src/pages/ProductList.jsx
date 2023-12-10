import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import {mobile} from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 900;
    ${mobile({textAlign: "center"})}
`;
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: 'column', alignItems: "start"})}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({marginTop: "10px"})}
`;
const FilterText = styled.h3`
    font-size: 15px;
`;
const Select = styled.select`
    margin-left: 10px;
    padding: 7px 20px;
    ${mobile({padding: "5px"})}
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest")

    const handleFilters = (event) => {
        setFilters({...filters, [event.target.name]: event.target.value});
    }
    return (
        <>
        <Navbar />
        <Announcement />
        <Container>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option selected disabled>Color</Option>
                        <Option >White</Option>
                        <Option >Black</Option>
                        <Option >Blue</Option>
                        <Option >Green</Option>
                        <Option >Yellow</Option>
                        <Option >Red</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option selected disabled>Size</Option>
                        <Option >XS</Option>
                        <Option >S</Option>
                        <Option >M</Option>
                        <Option >L</Option>
                        <Option >XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select name="sort" onChange={e => setSort(e.target.value)}>
                        <Option value="newest" selected >Newest</Option>
                        <Option value="asc" >Price (ASC)</Option>
                        <Option value="desc" >Price (DESC)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
        </Container>
        <Products category={category} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
        </>
    )
}

export default ProductList;