import { FacebookOutlined, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`;
const Left = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({padding: '10px 20px'})}
`;
const Logo = styled.h1`
    font-weight: 800;
    ${mobile({fontSize: '30px'})}
`;
const Description = styled.p`
    margin: 20px 0;
    ${mobile({margin: '10px 0'})}
`;
const SocialContainer = styled.div`
    display: flex;
    align-items: center;

`;
const SocialIcon = styled.div`
    margin: 0 10px;
    cursor: pointer;
`;
const Center = styled.div`
    padding: 20px;
    flex: 1;
    ${mobile({padding: '10px 20px'})}
`;
const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
    ${mobile({fontSize: '20px', marginBottom: '10px'})}
`;
const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: space-between;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;
const Right = styled.div`
    padding: 20px;
    flex: 1;
    ${mobile({padding: '10px 20px'})}
`;
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 100%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E-commrece</Logo>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, consectetur.</Description>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon>
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull Links</Title>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;