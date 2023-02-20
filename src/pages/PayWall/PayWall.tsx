import React from 'react';
import { useState } from 'react';
import { Image } from 'react-native';
import { FeatureCard, PaymentCard, Button } from '@components';
import {
    Container,
    Wrapper,
    Circle,
    CloseWrapper,
    Title,
    TextContainer,
    RegularTitle,
    Description,
    FeatureSwiper,
    FeatureContainer,
    BottomContainer,
    PrivacyContainer,
    PrivacyText,
    ButtonContainer
}
    from './style'

import { paywall_background, white_close, speed, scan } from '@assets'
import { CenterContainer } from '@global';

const PayWall = ({ navigation }) => {

    const [selectSub, setSelectSub] = useState<boolean>(true);

    const features: IFeatureCard[] = [
        { title: "Unlimited", subTitle: "Plant Identify", icon: scan },
        { title: "Faster", subTitle: "Process", icon: speed },
        { title: "Security", subTitle: "Safe", icon: scan },
    ];

    const _selectSub = () => { setSelectSub(!selectSub) }
    const _goToHome = () => { navigation.navigate('BottomBar') };

    return (
        <Container>
            <Wrapper source={paywall_background}>
                <CloseWrapper onPress={_goToHome}>
                    <Circle>
                        <Image source={white_close} />
                    </Circle>
                </CloseWrapper>
                <TextContainer>
                    <Title>PlantApp<RegularTitle> Premium</RegularTitle></Title>
                    <Description>Access All Features</Description>
                </TextContainer>
                <FeatureContainer>
                    <FeatureSwiper horizontal>
                        {features.map((feature: IFeatureCard) => {
                            return (
                                <FeatureCard title={feature.title} subTitle={feature.subTitle} icon={feature.icon} />
                            )
                        })}
                    </FeatureSwiper>
                </FeatureContainer>
            </Wrapper>
            <BottomContainer>
                <PaymentCard onPress={_selectSub} selected={!selectSub} packageName='1 Month' packageDescription='2,99$/month, auto renewable' />
                <PaymentCard discount onPress={_selectSub} selected={selectSub} packageName='1 Year' packageDescription='First 3 days free, then $529,99/year' />
                <ButtonContainer>
                    <Button large={false} onPress={_goToHome} buttonText='Continue' />
                </ButtonContainer>
            </BottomContainer>
            <PrivacyContainer>
                <PrivacyText>After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable</PrivacyText>
            </PrivacyContainer>
            <CenterContainer>
                <PrivacyText>Terms      Privacy         Restore</PrivacyText>
            </CenterContainer>
        </Container>
    )
}

export default PayWall;