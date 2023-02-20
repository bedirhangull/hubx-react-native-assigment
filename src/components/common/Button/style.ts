import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
    background-color: ${(props: ITheme) => props.theme.colors.green};
    padding: ${(props) => props.large ? props.theme.spacing.l : props.theme.spacing.m};
    border-radius: ${(props: ITheme) => props.theme.radiusValues.xs}
    justify-cotent: center;
    align-items: center;
`

const ButtonText = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.white};
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
    font-size: ${(props: ITheme) => props.theme.fontSizes.m};
`

export { Container, ButtonText }