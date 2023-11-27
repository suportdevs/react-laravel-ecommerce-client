import styled from "@emotion/styled";

const Announcement = () =>{
    const Container = styled.div`
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: teal;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
    `;
    return (
        <Container>Super deal! Free shopping on orders over $50</Container>
    );
}

export default Announcement;