import styled from "styled-components";

const PaymentSuccess = () => {

    const Container = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const Wrapper = styled.div`
        width: 40%;
        text-align: center;
    `;

    return (
        <Container>
            <Wrapper>
                <h1>Payment Successfull...</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus nostrum doloribus perspiciatis itaque, nam, amet architecto minima quidem sequi, similique fugit iusto exercitationem? Aliquam ullam aperiam explicabo expedita omnis.</span>
            </Wrapper>
        </Container>
    );
}

export default PaymentSuccess;