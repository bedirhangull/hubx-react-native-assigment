import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props: ITheme) => props.theme.colors.backgroundGreen};
`

const Wrapper = styled.ImageBackground`
    padding-horizontal: ${(props: ITheme) => props.theme.spacing.l};
    flex: 2;
`

const CloseWrapper = styled.TouchableOpacity`   
    margin-top: ${(props: ITheme) => props.theme.spacing.m};
    align-items: flex-end;
`

const Circle = styled.View`
    background-color: black;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    opacity: 0.7;
`

const TextContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
`

const Title = styled.Text`
    font-size: ${(props: ITheme) => props.theme.fontSizes.xl};
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
    color: ${(props: ITheme) => props.theme.colors.white};
`

const RegularTitle = styled.Text`
    font-size: ${(props: ITheme) => props.theme.fontSizes.xl};
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
    color: ${(props: ITheme) => props.theme.colors.white};
`
const Description = styled.Text`
    font-size: ${(props: ITheme) => props.theme.fontSizes.l};
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
    color: ${(props: ITheme) => props.theme.colors.white};
`

const FeatureSwiper = styled.ScrollView``

const FeatureContainer = styled.View`
    margin-vertical: ${(props: ITheme) => props.theme.spacing.m};
    justify-content: flex-end;
`

const BottomContainer = styled.View`
    padding-horizontal: ${(props: ITheme) => props.theme.spacing.l};
    background-color: ${(props: ITheme) => props.theme.colors.backgroundGreen}
`

const PrivacyContainer = styled.View`
    margin-top: ${(props: ITheme) => props.theme.spacing.xs}
    margin-bottom: ${(props: ITheme) => props.theme.spacing.xs}
`

const PrivacyText = styled.Text`
    font-size: ${(props: ITheme) => props.theme.fontSizes.xs};
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
    color: ${(props: ITheme) => props.theme.colors.gray};
    padding-horizontal: ${(props: ITheme) => props.theme.spacing.l};
    text-align: center; 
`

const ButtonContainer = styled.View`
    margin-vertical: ${(props: ITheme) => props.theme.spacing.m}
`

export { Container, Wrapper, CloseWrapper, Circle, Title, FeatureContainer, PrivacyText, PrivacyContainer, TextContainer, RegularTitle, Description, FeatureSwiper, ButtonContainer, BottomContainer }