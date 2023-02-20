import styled from "styled-components/native";

const Scroll = styled.ScrollView``

const Container = styled.SafeAreaView``

const Wrapper = styled.View``

const WrapperElement = styled.View`
    padding: ${(props: ITheme) => props.theme.spacing.l};
`

const HiText = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.black}
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
    font-size: ${(props: ITheme) => props.theme.fontSizes.m};
`

const DayTitle = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.black}
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
    font-size: ${(props: ITheme) => props.theme.fontSizes.xl};
`

const SearchContainer = styled.ImageBackground`
    padding: ${(props: ITheme) => props.theme.spacing.l};
    border-color: ${(props: ITheme) => props.theme.colors.gray};
    border-width: 0.4px;
    background-color: #f7f8f7;
`

const SearchInput = styled.TextInput`
    border-radius: ${(props: ITheme) => props.theme.radiusValues.xs};
    padding: ${(props) => props.OSType ? 10 : 12 }px;
    width: 100%;
`

const SearchWrapper = styled.View`
    background-color: ${(props: ITheme) => props.theme.colors.white};
    border-radius: ${(props: ITheme) => props.theme.radiusValues.xs};
    align-items: center;
    flex-direction: row;
`

const SearchIcon = styled.Image`
    margin-left: ${(props: ITheme) => props.theme.spacing.m};
`

const NotificationContainer = styled.View`
    border-radius: ${(props: ITheme) => props.theme.radiusValues.xs};
    background-color: ${(props: ITheme) => props.theme.colors.brown};
    padding: ${(props: ITheme) => props.theme.spacing.xs};
`

const NotificationImage = styled.Image``

const NotificationTitle = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.gold}
    font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
    font-size: ${(props: ITheme) => props.theme.fontSizes.m};
`

const NotificationDescription = styled.Text`
    color: ${(props: ITheme) => props.theme.colors.gold}
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
    font-size: ${(props: ITheme) => props.theme.fontSizes.xs};
`

const ArrowContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const QuestionContainer = styled.ScrollView`
    margin-top: ${(props: ITheme) => props.theme.spacing.m}
`

const TitleContaıner = styled.View``

const Title = styled.Text`
    font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
    font-size: ${(props: ITheme) => props.theme.fontSizes.m};
    margin-top: ${(props: ITheme) => props.theme.spacing.m}
`

const CategoriesContainer = styled.View`
    padding-horizontal: ${(props: ITheme) => props.theme.spacing.l};
    flex-wrap: wrap;
    flex-direction: row;
`

export { Container, Wrapper, WrapperElement, CategoriesContainer, Scroll, TitleContaıner, QuestionContainer, Title ,HiText, NotificationImage, ArrowContainer, NotificationDescription, DayTitle, NotificationTitle, SearchContainer, NotificationContainer, SearchInput, SearchIcon, SearchWrapper };