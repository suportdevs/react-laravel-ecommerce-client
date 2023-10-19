import styled from "styled-components";
import {categories} from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Container = styled.div`
    padding: 20px;
    display: flex;
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