import React from 'react';
import { Container, ButtonText } from './style';

const Button = (props: IButton) => {

    const { buttonText, onPress, large = true } = props;

    return(
        <Container large={large} onPress={onPress}>
            <ButtonText>{buttonText}</ButtonText>
        </Container>        
    )
}

export default Button;