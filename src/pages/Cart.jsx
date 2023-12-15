import styled from "@emotion/styled";
import { Add, Delete, Remove } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { mobile, tablet } from "../responsive";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    ${tablet({flexDirection: 'column'})};
    ${mobile({flexDirection: 'column'})};
`;
const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const ProductContainer = styled.div`
    flex: 3;
    ${tablet({flex: 1, width: '100%'})};
    ${mobile({flex: 1, width: '100%'})};
`;
const ProductWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductDetails = styled.div`
    flex: 3;
    display: flex;
    ${tablet({flex: 6})};
    ${mobile({flex: 6})};
`;
const ProductImg = styled.div`
    display: flex;
`;
const Image = styled.img`
    width: 100px;
    margin-right: 20px;
    ${mobile({width: '75px', marginRight: '5px'})}
`;
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    border-radius: 50%;
`;
const ProductSize = styled.span``;
const ProductPriceSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-center;
`;
const PriceButtons = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    ${tablet({flexDirection: 'column', marginBottom: '0px'})};
    ${mobile({flexDirection: 'column', marginBottom: '0px'})};
`;
const ProductQuantity = styled.span`
    margin: 0 10px;
`;
const Price = styled.span`
    font-size: 30px;
    ${tablet({fontSize: '25px'})};
    ${mobile({fontSize: '25px'})};
`;
const ProductRemove = styled.div`
    flex: 1;
`;
const SummaryWrapper = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  ${tablet({fontSize: '30px'})};
  ${mobile({fontSize: '30px'})};
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  ${tablet({margin: '10px 0'})};
  ${mobile({margin: '10px 0'})};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Cart =() => {
    const cart = useSelector(state => state.cart);

    return (
        <>
        <Navbar />
        <Announcement />
        <Container>
                <Title>Your Bag</Title>
            <Wrapper>
                <ProductContainer>
                    {cart.products.length > 0 ? cart.products.map(product => (
                        <ProductWrapper>
                            <ProductDetails>
                                <ProductImg>
                                    <Image src={product.image} />
                                </ProductImg>
                                <ProductInfo>
                                    <ProductName><b>Product Name: </b>{product.name}</ProductName>
                                    <ProductId><b>Id: </b>{product.id}</ProductId>
                                    <ProductColor color={product.colorName} />
                                    <ProductSize><b>Size:</b> {product.sizeName}</ProductSize>
                                </ProductInfo>
                            </ProductDetails>
                            <ProductPriceSection>
                                <PriceButtons>
                                    <Add />
                                    <ProductQuantity>{product.quantity}</ProductQuantity>
                                    <Remove />
                                </PriceButtons>
                                <Price>${product.quantity * product.rate}</Price>
                            </ProductPriceSection>
                            <ProductRemove>
                                <Delete />
                            </ProductRemove>
                        </ProductWrapper>
                    )) : <Link to="/"><h1>Your cart is empty! Continue shopping.</h1></Link>}
                </ProductContainer>
                <SummaryWrapper>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </SummaryWrapper>
            </Wrapper>
        </Container>
        <Footer />
        </>
    )
}

export default Cart;