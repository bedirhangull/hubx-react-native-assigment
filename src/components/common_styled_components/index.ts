import styled from "styled-components/native";

const Container = styled.ImageBackground`
  flex: 1;
  padding: ${(props: ITheme) => props.theme.spacing.l};
`

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const ColumnContainer = styled.View`
    flex-direction: column;
    margin-horizontal: ${(props: ITheme) => props.theme.spacing.xs}
`

const ImageContainer = styled.View`
  flex: 1;
  margin-top: ${(props: ITheme) => props.theme.spacing.xl};
  align-items: center;
`

const Flex = styled.View`
  flex: 1;
`
const AlignWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`

const CenterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export { RowContainer, ColumnContainer, Container, ImageContainer, Flex, CenterContainer, AlignWrapper };