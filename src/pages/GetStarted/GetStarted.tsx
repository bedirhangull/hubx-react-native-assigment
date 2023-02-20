import React from 'react';
import { Image } from 'react-native';
import { Button } from '@components';
import { Container } from '@global'
import { Wrapper, Title, TitleContainer, Description, ImageContainer, ButtonContainer, PrivacyContainer, PrivacyText  } from './style';

import { background, first_onboarding_image } from '@assets'    

import { StackScreenProps } from '@react-navigation/stack';

const GetStarted = ({ navigation }:StackScreenProps<{GetStarted: String}>) => {

    const _goToOnboarding = () => { navigation.navigate("Onboarding" as never) }

    return(
        <Container source={background}>
            <Wrapper> 
                <TitleContainer>
                    <Title>Welcome to <Title bold> PlantApp</Title></Title>
                    <Description>Identify more than 3000+ plants and 88% accuracy.</Description>
                </TitleContainer>
                <ImageContainer>
                    <Image source={first_onboarding_image} />
                </ImageContainer>
                <ButtonContainer>
                    <Button buttonText='Get Started' onPress={_goToOnboarding} />
                </ButtonContainer>
                <PrivacyContainer>
                    <PrivacyText>By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.</PrivacyText>
                </PrivacyContainer>
            </Wrapper>
        </Container>
    )
}

export default GetStarted;