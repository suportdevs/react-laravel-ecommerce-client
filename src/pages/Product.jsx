import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useGetProductsMutation } from "../services/webApi";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../services/cartSlice";

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({flexDirection: 'column', padding: '20px'})}
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 80vh;
    ${mobile({height: "50vh"})}
`;
const InfoContainer = styled.div`
    flex: 1;
`;
const Title = styled.h1`
    ${mobile({fontSize: "20px", marginTop: "5px"})}
`;
const Description = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-size: 50px;
    ${mobile({fontSize: "20px"})}
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({flexDirection: 'column', alignItems: 'start'})}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({marginTop: '5px'})}
`;
const FilterTitle = styled.h3`
    font-weight: 200;
`;
const FilterColor = styled.div`
    padding: 10px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props => props.color};
    cursor: pointer;
`;
const Select = styled.select`
    padding: 5px 10px;
    margin-left: 10px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({width: '100%'})}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items:center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const AddtoCartButton = styled.button`
    padding: 10px 20px;
    background-color: teal;
    color: white;
    border:1px solid gray;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
`;

const Product = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [colorName, setColorName] = useState("");
    const [size, setSize] = useState("");
    const [sizeName, setSizeName] = useState("");
    const location = useLocation();
    const product_id= location.pathname.split("/")[2];
    const [getProducts, {data, isLoading, isSuccess}] = useGetProductsMutation();

    useEffect(() => {
        getProducts({product_id});
    }, [product_id]);

    const handleQuantity = (direction) => {
        if(direction === 'decrease'){
            quantity > 1 && setQuantity(quantity - 1);
        }else{
            setQuantity(quantity + 1);
        }
    }
    const handleAddToCart = () => {
        if(color === ""){
            toast.error("Please select any color.");
            return false;
        }
        if(size === ""){
            toast.error("Please select any size.");
            return false;
        }
        const productObj = {
            id: data?.product?.id,
            name:data?.product?.name,
            image:data?.product?.image,
            description: data?.product?.description,
            rate: data?.product?.rate,
        }
        dispatch(addToCart({...productObj, color, colorName, size, sizeName, quantity}));
        toast.success(`Successfully ${data.name} product added in your cart`);
    }

    return(
        <>
        <Navbar />
        <Announcement />
        <Container>
            <Wrapper>
                {
                    (!isSuccess && isLoading && data) ? 'Loading...' : (
                        <>
                    <ImageContainer>
                        <Image src={data?.product?.image}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{data?.product?.name}</Title>
                        <Description>{data?.product?.description}</Description>
                        <Price>${data?.product?.rate}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {
                                    data?.colors?.map(color => (
                                        <FilterColor color={color.color} onClick={(e) => setColor(color.id)} onClickCapture={() => setColorName(color.color)} key={color.color}></FilterColor>
                                    ))
                                }
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <Select onChange={(e) => {
                                    setSize(e.target.value);
                                    setSizeName(e.target.options[e.target.selectedIndex].text);
                                }}>
                                    <Option value="">Select Size</Option>
                                    {
                                        data?.sizes?.map(size => (
                                            <Option value={size.id} ey={size.id}>{size.name}</Option>
                                        ))
                                    }
                                </Select>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity('decrease')} style={{cursor: 'pointer'}} />
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity('increase')} style={{cursor: 'pointer'}} />
                            </AmountContainer>
                            <AddtoCartButton onClick={handleAddToCart}>Add to Cart</AddtoCartButton>
                        </AddContainer>
                    </InfoContainer>
                    </>
                    )
                }
            </Wrapper>
        </Container>
        <Newsletter />
        <Footer />
        </>
    )
}

export default Product;