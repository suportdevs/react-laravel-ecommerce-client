import { Language, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";

const Navbar = () => {
    const Container = styled.div`
        height: 60px;
        background-color: teal;
        color: #fff;
    `;
    const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    const Left = styled.div`
        flex: 1;
    `;
    const Logo = styled.h1`
        margin: 0;
        cursor: pointer;
    `;
    // const Center = styled.div`
    //     flex: 1;
    // `;
    const Right = styled.div`
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `;
    const MenuItem = styled.div`
        margin-left: 10px;
        cursor: pointer;
        color: #fff;
    `;

    return (
        <Container>
            <Wrapper>
                <Left><Logo>E-commerce</Logo></Left>
                {/* <Center>Center</Center> */}
                <Right>
                    <MenuItem>
                        Register
                    </MenuItem>
                    <MenuItem>
                        Login
                    </MenuItem>
                    <MenuItem>
                        <SearchOutlined />
                    </MenuItem>
                    <MenuItem>
                        <Language />
                    </MenuItem>
                    <MenuItem>
                        <Badge color="secondary" badgeContent={100}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;