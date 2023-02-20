import styled from "styled-components/native";

const SlideContainer = styled.SafeAreaView`
    flex: 1;
`

const ImageContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  bottom: ${(props) => props.absolute ? -60 : 0}px;
`

const ButtonContainer = styled.View`
  margin-bottom: 50px;
`

const Title = styled.Text`
  color: ${(props: ITheme) => props.theme.colors.black};
  font-size: ${(props: ITheme) => props.theme.fontSizes.xl};
  font-family: ${(props: ITheme) => props.bold ? props.theme.fontFamily.bold : props.theme.fontFamily.regular};
`

const PlantImage = styled.Image`
  position: absolute;
  top: -25;
  right: 0;
  z-index: 1;
`

export { SlideContainer, ImageContainer, ButtonContainer, Title, PlantImage }