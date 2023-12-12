import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
import { useGetCategoriesQuery } from "../services/webApi";

const Container = styled.div`
    padding: 20px;
    text-align: center;
`;
const CategoryContainer = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`;
const Title = styled.h1`
    font-size: 25px;
    color: teal;
`;
const Description = styled.p`
    color: #717171;
    margin-bottom: 20px;
`;

const Categories = () => {
    const {data: categories, isLoading, isSuccess} = useGetCategoriesQuery();
    return (
        <Container>
            <Title>All Categories</Title>
            <Description>Find your best feelings in our deal</Description>
            <CategoryContainer>
            {
                isLoading ? 'Loading...' : (isSuccess && categories) && categories.map((item, index) => <CategoryItem item={item} key={index}></CategoryItem>)
            }
            </CategoryContainer>
        </Container>
    )
}

export default Categories;