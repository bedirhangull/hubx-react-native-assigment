import React, { useState } from 'react';
import { BoldText, Container, UnderLine } from './style'

import { underline } from '@assets';

const UnderLineText = (props: IUnderlineText) => {

    const [containerWidth, setWidth] = useState<Number>(0);

    const { text } = props;

    const _calculateSize = (event: any) => {
        var { width } = event.nativeEvent.layout;
        setWidth(width);
    }

    return(
        <Container>
            <BoldText onLayout={(event) => _calculateSize(event)}>{text}</BoldText>
            <UnderLine width={containerWidth} resizeMode='contain' source={underline} />
        </Container>
    )
}

export default UnderLineText;