import styled from "styled-components/native";

const Container = styled.View`
    justify-content: flex-start;

`

const BoldText = styled.Text`
    margin-top: 14px;
    color: ${(props: ITheme) => props.theme.colors.black};
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
    font-size: ${(props: ITheme) => props.theme.fontSizes.xl};
`

const UnderLine = styled.Image`
    width: ${(props) => props.width}px;
`

export { BoldText, UnderLine, Container };