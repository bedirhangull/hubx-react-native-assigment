import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { DocumentationCard, CategorieCard } from '@components'
import {
    Container,
    Wrapper,
    HiText,
    DayTitle,
    WrapperElement,
    SearchContainer,
    SearchInput,
    SearchIcon,
    SearchWrapper,
    NotificationContainer,
    NotificationImage,
    NotificationTitle,
    NotificationDescription,
    ArrowContainer,
    QuestionContainer,
    Title,
    TitleContaıner,
    CategoriesContainer,
    Scroll
} from './style';
import { ColumnContainer, AlignWrapper } from '@global';

import { search_background, search, notification, gold_arrow } from '@assets'

//redux
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from "@store"
import { fetchQuestions } from "../../store/slices/questionSlice"
import { fetchCategories } from '../../store/slices/categoriesSlice';

const Home = () => {

    const dispatch = useAppDispatch();
    const questions = useSelector((state: RootState) => state.questions)
    const categories = useSelector((state: RootState) => state.categories)

    const OStype: boolean = Platform.OS == "android" ? true : false;

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchQuestions());
    }, [])

    return (
        <Scroll>
            <Container>
                <Wrapper>
                    <WrapperElement>
                        <HiText>Hi, plant lover!</HiText>
                        <DayTitle>Good Afternoon! ⛅</DayTitle>
                    </WrapperElement>
                    <SearchContainer source={search_background} >
                        <SearchWrapper>
                            <SearchIcon source={search} />
                            <SearchInput OStype={OStype} placeholder='Search plants' />
                        </SearchWrapper>
                    </SearchContainer>
                    <WrapperElement>
                        <NotificationContainer>
                            <AlignWrapper>
                                <NotificationImage source={notification} />
                                <ColumnContainer>
                                    <NotificationTitle>FREE Premium Available</NotificationTitle>
                                    <NotificationDescription>Tap to upgrade your account!</NotificationDescription>
                                </ColumnContainer>
                                <ArrowContainer>
                                    <NotificationImage source={gold_arrow} />
                                </ArrowContainer>
                            </AlignWrapper>
                        </NotificationContainer>
                        <TitleContaıner>
                            <Title>Get Started</Title>
                            <QuestionContainer horizontal>
                                {questions.questions.map((quest: Question) => <DocumentationCard image={quest.image_uri} title={quest.title} />)}
                            </QuestionContainer>
                        </TitleContaıner>
                    </WrapperElement>
                    <CategoriesContainer>
                        {categories.data.map((categorie: ICategory) => <CategorieCard plantImage={categorie.image.url} plantName={categorie.title} />)}
                    </CategoriesContainer>
                </Wrapper>
            </Container>
        </Scroll>
    )
}

export default Home;