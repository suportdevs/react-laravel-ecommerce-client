import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import {mobile} from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useGetColorsQuery, useGetSizesQuery } from "../services/webApi";

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
    const {data: colors, isLoading:isColorLoading, isSuccess:isColorSuccess} = useGetColorsQuery();
    const {data: sizes, isLoading: isSizeLoading, isSuccess: isSizeSuccess} = useGetSizesQuery();
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
                    <Select name="colors" onChange={handleFilters}>
                        <Option selected disabled value="">{isColorLoading ? 'Loading' : 'Color'}</Option>
                        {
                            (isColorSuccess && colors) && colors.map((color, index) => <Option value={color.id} key={color.id}>{color.name}</Option>)
                        }
                    </Select>
                    <Select name="sizes" onChange={handleFilters}>
                        <Option selected disabled value="">{isSizeLoading ? 'Loading...' : 'Size'}</Option>
                        {
                            (isSizeSuccess && sizes) && sizes.map((size, index) => <Option value={size.id} key={size.id}>{size.name}</Option>)
                        }
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