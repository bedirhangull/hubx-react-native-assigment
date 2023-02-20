import styled from "styled-components/native";

const Container = styled.View`
    margin-right: ${(props: ITheme) => props.theme.spacing.xs}
    width: 150px;
    height: 130px;
    padding: ${(props: ITheme) => props.theme.spacing.m};
    background-color: ${(props: ITheme) => props.theme.colors.darkGreen};
    border-radius: ${(props: ITheme) => props.theme.radiusValues.xs};
`

const FeatureImage = styled.Image``

const FeatureTitle = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.white};
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
    font-size: ${(props: ITheme) => props.theme.fontSizes.m};
    margin-top: ${(props: ITheme) => props.theme.spacing.xs};
    margin-bottom: 4px;
`

const FeatureSubTitle = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.white};
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
    font-size: ${(props: ITheme) => props.theme.fontSizes.xs};
`

export { Container, FeatureImage, FeatureSubTitle, FeatureTitle }