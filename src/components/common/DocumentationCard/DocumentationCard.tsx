import React from 'react';
import { Container, Title, TextContainer } from './style'

import { IDocumentationCard } from '../../../types/documentationCard'

const DocumentationCard = (props: IDocumentationCard) => {

    const { image, title } = props;

    return(
        <Container imageStyle={{ borderRadius: 12, justifyContent: 'center'}} resizeMode="cover" source={{uri: image}}>
           <TextContainer>
                <Title>{title}</Title>
           </TextContainer>
        </Container>

    )
}

export default DocumentationCard;