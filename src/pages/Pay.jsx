import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div``;
const Button = styled.button`
padding: 10px 25px;
border: none;
border-radius: 5px;
background-color: #000;
color: #fff;
font-size: 20px;
cursor: pointer;
`;

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makePaymentRequest = async () => {
            // create here backend reqeust
        }
    })

    return (
        <Container>
            <Wrapper>
                <StripeCheckout name="Suport Devs" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAz1BMVEX///97eXojHyD+AAAAAAAgHB3q6urb2tseGRve3t4vLC3T09Pw8PDm5eb19fV4dneAf4BsaWsoJyeYl5hwbm+xsLHCwsIAICKNjY3+9/f8u7v98vKnpqYcHyDLy8v96ur9y8v7hYX70dD7Y2L8w8L9tLT8cnH7mJn83Nz9qKj8Liz6QED9ExD7TU38IyP7jIz7VVZLS0sUDhD8Ojk5OTlXVleQUVEsHyDvAAAQFBbaDAvr3NzkGxvCpKRvAADFEBCBGBlLHR4+HB6zCgknNDRNLuCHAAADVUlEQVRoge2Xa3eiMBCGgyBKuQvBIAgU763Vra273e697f//TZuEoIB6jN3D2Q/l/eKBiU+SycxkAKBRo0aNGjX6qAoCMADAT2qB+z6IwXWcDtLReFLLDAGIJ+k0mc3H80UtEwD/Jg3mt+IkqYU+Gd1M5+O4HjgYi8vFNFjcxbXQJ8lKvBPFkV8LHaxFonU9cDCj9Pm/YmSlcygZfCLwmaHvpV1MRvdX7e6hdJAQ+K1sCztZlhNdMkG4kbrtQ0kQ2wh8BZC5pwuma0KDl42kduuINjYx3lK4V4RjuYLOx4bSMXSrLRk5/AHIFThevcoFf+wyWsUpHrUuMfwaALNKF0yFg61uMvTmqqSWRa0B8XkCgJVLcNk0psUB96hX2r1Ik0vKrAviFZyi2k56KGR4N+KHH98lifNZ5Z1umbxLj5hbSsd674b0OFMSK0H1L+x47fPxaFy1Dw+0u5EkhI24bokDMsotgbLI5AmY8HgotqQtLS1TulahBNdoxpreeTgwT9E/L0kCEUVlOOCH4xTdHMnR4ZenXUUM3w8HHVOqqNsa9p+yEKcw64hbeGIxk6wWBR+/9p/37MgtwyE9UJuzvhxI72H2MmVPyCzBdZZF72SDb99xZuZXs2ILRbjKkijkQxlKWZ0fDzgGdxczqeYKqwqK57Ai5sp8cKtynD+xu/fNVuQSB+fKC5cL+dhRKdD7w1+iWOhWjGqxzdiIj631ClE+7P/GmTMomNFBKSdsh49dzNBh/8+zuJoV2yDPPUSbvD7B11xerob9l1fxZl3u32AVju9n1OFky4+tHtXb28vr02pRLbCw4hXL8S5InjyC46k4Tfj/doHixd1ocH7Y5fLTwXqdnh93MdeP0ySJ62nB/aCm5rvR/5ChsFxjv/gDIqvRss4MOuvDZGYAWduvs2c87lRjJAvQoQUIhSEtch7KXhhbGCJmEKjBYiO1e3IpG6FNH1UBhqd6XcS+PlQ8MCTdk+dAOothw5B0/h42wCiDZ9M7enZxOnTBqo1ONl1eCPSI7gAYJtkm9PQtdY+VuUXGTdxWoyNlOkCxUVZsHbquCBrayX7Rs7JBCkIUpmpAptvOux0dIbptRQEyeafiGSg8okzZcRzu3qVRo0aNGjVq1Oij6C/km0AkeBV+SgAAAABJRU5ErkJggg=="
                description="Your total is $20"
                billingAddress
                shippingAddress
                amount={2000}
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                    <Button>Pay</Button>
                </StripeCheckout>
            </Wrapper>
        </Container>
    );
}

export default Pay;