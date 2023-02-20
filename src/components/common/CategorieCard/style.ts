import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${(props: ITheme) => props.theme.colors.gramsWhite};
  border-color: ${(props: ITheme) => props.theme.colors.gray};
  border-radius: ${(props: ITheme) => props.theme.radiusValues.xs};
  margin-top: ${(props: ITheme) => props.theme.spacing.xs};
  margin-right: ${(props: ITheme) => props.theme.spacing.xs};
  flex-direction: column;
  border-width: 1px;
  width: 47%;
`;

const PlantImage = styled.Image`
  height: 150px;
`;

const CategorieName = styled.Text`
  font-family: ${(props: ITheme) => props.theme.fontFamily.bold};
  font-size: ${(props: ITheme) => props.theme.fontSizes.m};
  color: ${(props: ITheme) => props.theme.colors.black};
  flex-wrap: wrap;
`;

const TextWrapper = styled.View`
  padding: ${(props: ITheme) => props.theme.spacing.m}
  flex: 1;
`;

const ImageWrapper = styled.View`
  flex: 1;
`;

export {
  Container,
  CategorieName,
  PlantImage,
  TextWrapper,
  ImageWrapper,
};
