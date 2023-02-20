import React from 'react';
import { ButtonContainer, Icon } from './style'

import { scan_white } from '@assets'

const BottomBarButton = () => {
    return(
        <ButtonContainer>
            <Icon source={scan_white} />
        </ButtonContainer>
    )
}

export default BottomBarButton;