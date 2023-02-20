import styled from "styled-components/native";

const Container = styled.ImageBackground`
    margin-right: ${(props: ITheme) => props.theme.spacing.xs}; s
    align-items: center;
    height: 160px;
    width: 240px;
`

const Wrapper = styled.View`
    border-radius: ${(props: ITheme) => props.theme.radiusValues.xs};
    background-color: blue;
    flex: 1;
`

const Title = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.white}
    font-size: ${(props: ITheme) => props.theme.fontSizes.m};
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
`

const TextContainer = styled.View`
    padding: ${(props: ITheme) => props.theme.spacing.m};
    justify-content: flex-end;
    flex: 1;
`

export { Container, Title, TextContainer, Wrapper };