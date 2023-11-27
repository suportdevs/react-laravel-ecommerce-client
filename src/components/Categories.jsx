import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

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
    return (
        <Container>
            <Title>All Categories</Title>
            <Description>Find your best feelings in our deal</Description>
            <CategoryContainer>
            {
                categories && categories.map((item, index) => <CategoryItem item={item} key={index}></CategoryItem>)
            }
            </CategoryContainer>
        </Container>
    )
}

export default Categories;