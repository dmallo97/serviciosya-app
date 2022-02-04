import React from 'react';
import styled from 'styled-components/native';
import colors from 'styles/constants/colors';

function LoginContainer() {
    return(
        <Container>
            <DevMessage>Not implemented</DevMessage>
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${colors.background};
    align-items: center;
    justify-content: center;
`;

const DevMessage = styled.Text``;

export default LoginContainer;