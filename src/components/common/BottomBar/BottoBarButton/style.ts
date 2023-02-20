import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${(props: ITheme) => props.theme.colors.green};
    border-color: ${(props: ITheme) => props.theme.colors.lightGreen};
    border-width: 4px;
    top: -32;
    height: 64px;
    width: 64px;
    borderRadius: 64;
    justify-content: center;
    align-items: center;
`

const Icon = styled.Image``

export { ButtonContainer, Icon };