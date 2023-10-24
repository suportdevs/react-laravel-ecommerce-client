import styled from "styled-components";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { mobile } from "../../responsive";

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
const FilterText = styled.h3``;
const Select = styled.select`
    margin-left: 10px;
    padding: 10px 20px;
    ${mobile({padding: "5px"})}
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <>
        <Navbar />
        <Announcement />
        <Container>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option selected disabled>Color</Option>
                        <Option >White</Option>
                        <Option >Black</Option>
                        <Option >Blue</Option>
                        <Option >Green</Option>
                        <Option >Yellow</Option>
                        <Option >Red</Option>
                    </Select>
                    <Select>
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
                    <Select>
                        <Option selected >Newest</Option>
                        <Option >Price (ASC)</Option>
                        <Option >Price (DESC)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
        </Container>
        <Products />
        <Newsletter />
        <Footer />
        </>
    )
}

export default ProductList;