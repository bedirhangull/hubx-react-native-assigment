import React from 'react';
import { Image, View } from 'react-native'
import { Container, CategorieName, PlantImage, TextWrapper, ImageWrapper } from './style'
import { RowContainer } from '@global'

const CategorieCard = (props: ICatogorieCard) => {

    const { plantImage, plantName } = props;
    
    return (
        <Container>
            <TextWrapper>
                <CategorieName>{plantName}</CategorieName>
            </TextWrapper>
            <ImageWrapper>
                <PlantImage source={{uri: plantImage}} />
            </ImageWrapper>
        </Container>
    )
}

export default CategorieCard;