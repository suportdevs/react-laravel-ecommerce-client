import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    padding: 20px;
    display: flex;
    ${mobile({flexDirection: 'column'})}
`;

const Categories = () => {
    return (
        <Container>
            {
                categories && categories.map((item, index) => <CategoryItem item={item} key={index}></CategoryItem>)
            }
        </Container>
    )
}

export default Categories;