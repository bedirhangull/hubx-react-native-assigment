import React from 'react';
import { Container, FeatureImage, FeatureSubTitle, FeatureTitle } from './style';

const FeatureCard = (props: IFeatureCard) => {

    const { icon, title, subTitle } = props;

    return(
        <Container>
            <FeatureImage source={icon} />
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureSubTitle>{subTitle}</FeatureSubTitle>
        </Container>
    )
}

export default FeatureCard;