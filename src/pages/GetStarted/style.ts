import styled from 'styled-components/native';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: ${(props: ITheme) => props.theme.spacing.xs};
`

const TitleContainer = styled.View``;

const Title = styled.Text`
  color: ${(props: ITheme) => props.theme.colors.black};
  font-size: ${(props: ITheme) => props.theme.fontSizes.xl};
  font-family: ${(props: ITheme) => props.bold ? props.theme.fontFamily.bold : props.theme.fontFamily.regular};
`

const Description = styled.Text`
  margin-top: ${(props: ITheme) => props.theme.spacing.m};
  color: ${(props: ITheme) => props.theme.colors.gray};
  font-size: ${(props: ITheme) => props.theme.fontSizes.m};
  font-family: ${(props: ITheme) =>props.bold ? props.theme.fontFamily.bold : props.theme.fontFamily.regular};
`

const ImageContainer = styled.View`
  margin-top: ${(props: ITheme) => props.theme.spacing.xl};
  justify-content: center;
  align-items: center;
  flex: 1;
`

const ButtonContainer = styled.View``;

const PrivacyContainer = styled.View`
  padding-horizontal: ${(props: ITheme) => props.theme.spacing.xl}
`

const PrivacyText = styled.Text`
  display: flex;
  text-align: center;
  margin-top: ${(props: ITheme) => props.theme.spacing.m};
  color: ${(props: ITheme) => props.theme.colors.gray};
  font-size: ${(props: ITheme) => props.theme.fontSizes.xs};
  font-family: ${(props: ITheme) => props.theme.fontFamily.regular};
`

export {
  Wrapper,
  Title,
  TitleContainer,
  Description,
  ImageContainer,
  ButtonContainer,
  PrivacyContainer,
  PrivacyText,
};
