import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
`;

const index: NextPage = () => {
    return (
        <Container>
            <h1>hello Typescript!</h1>
            <h2>hello Typescript!</h2>
            <ul>hello Typescript!</ul>
            <p>hello Typescript!</p>
            <a>hello Typescript!</a>
        </Container>
    );
};

export default index;