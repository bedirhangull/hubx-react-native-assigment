import React from 'react';
import { Container, PackageName, PackageDescription, Circle, DiscountContainer, DiscountTitle, Wrapper } from './style'
import { RowContainer, ColumnContainer } from '@global';

const PaymentCard = (props: IPaymentCard) => {

    const { selected, packageDescription, packageName, onPress, discount = false } = props;

    const _discountHandler = () => {
        if (discount) {
            return (
                <DiscountContainer>
                    <DiscountTitle>Save 50%</DiscountTitle>
                </DiscountContainer>
            )
        }
    }

    return (
        <Container selected={selected}>
            <RowContainer>
                {_discountHandler()}
                <Wrapper>
                    <RowContainer>
                        <Circle onPress={onPress} selected={selected} />
                        <ColumnContainer>
                            <PackageName>{packageName}</PackageName>
                            <PackageDescription>{packageDescription}</PackageDescription>
                        </ColumnContainer>
                    </RowContainer>
                </Wrapper>
            </RowContainer>
        </Container>
    )
}

export default PaymentCard;