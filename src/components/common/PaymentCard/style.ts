import styled from "styled-components/native";

const Container = styled.View`
    background-color: ${(props: ITheme) => props.theme.colors.darkGreen};
    border-radius: ${(props: ITheme) => props.theme.radiusValues.xs};
    border-color: ${(props) => props.selected ? props.theme.colors.green : props.theme.colors.gray};
    margin-vertical: ${(props: ITheme) => props.theme.spacing.xs}
    border-width: 1px;
`

const Wrapper = styled.View`
    padding: ${(props: ITheme) => props.theme.spacing.m};
`

const DiscountContainer = styled.View`
    background-color: ${(props: ITheme) => props.theme.colors.green};
    border-top-right-radius: ${(props: ITheme) => props.theme.radiusValues.xs}; 
    border-bottom-left-radius: 20px;
    position: absolute;
    top: 0;
    right: 0; 
    padding: 6px;
`

const DiscountTitle = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.white}; 
    font-size: ${(props: ITheme) => props.theme.fontSizes.xs};
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
`

const PackageName = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.white};
    font-size: ${(props: ITheme) => props.theme.fontSizes.m}
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold}
`

const PackageDescription = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.white};
    opacity: 0.7;
    font-size: ${(props: ITheme) => props.theme.fontSizes.xs}
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular}
`

// i need to ignore this lines because i have to use selected props for selected featture of the card.
// @ts-ignore-start
const Circle = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: ${(props: ITheme) => props.theme.colors.white};
    opacity: ${(props) => props.selected ? 1 : 0.1};
    border-width: ${(props) => props.selected ? 8 : 0}px;
    border-color: ${(props: ITheme) => props.theme.colors.green};
`
// @ts-ignore-end

export { Container, PackageDescription, PackageName, Wrapper, Circle, DiscountTitle, DiscountContainer }