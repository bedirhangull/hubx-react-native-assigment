import React from 'react';
import { useRef } from 'react';
import { View, Image } from 'react-native'
import Swiper from 'react-native-swiper';
import { Button, UnderLineText } from '@components'
import { Container, RowContainer } from '@global';
import { SlideContainer, ImageContainer, ButtonContainer, Title } from './style'

import { background, second_onboarding_image, third_onboarding_image } from '@assets'


const Onboarding = ({ navigation }) => {

    const { activeDots } = styles;

    const swiperRef = useRef<Swiper | null>(null);

    const _goToPage = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(2, true);
        }
    };


    const _goToPayWall = () => { navigation.navigate('PayWall'); }

    return (
        <Container source={background}>
            <Swiper ref={swiperRef} activeDotStyle={activeDots} activeDotColor='black' showsButtons={false} loop={false}>
                <SlideContainer>
                    <RowContainer>
                        <Title>Take a photo to </Title>
                        <UnderLineText text='identify' />
                    </RowContainer>
                    <View>
                        <Title>the plant!</Title>
                    </View>
                    <ImageContainer>
                        <Image source={second_onboarding_image} />
                    </ImageContainer>
                    <ButtonContainer>
                        <Button onPress={_goToPage} buttonText='Continue' />
                    </ButtonContainer>
                </SlideContainer>
                <SlideContainer>
                    <RowContainer>
                        <Title>Get plant</Title>
                        <UnderLineText text=' care guides' />
                    </RowContainer>
                    <ImageContainer absolute={true}>
                        <Image source={third_onboarding_image} />
                    </ImageContainer>
                    <ButtonContainer>
                        <Button onPress={_goToPayWall} buttonText='Continue' />
                    </ButtonContainer>
                </SlideContainer>
            </Swiper>
        </Container>
    )
};

const styles = {
    activeDots: {
        height: 12,
        width: 12,
        borderRadius: 12
    }
}

export default Onboarding