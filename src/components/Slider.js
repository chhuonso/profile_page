import React from 'react'
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

const SliderSection = styled.section`
    height:100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;

`;

const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const MainSlide = styled.div``;
const MainSlider = styled.div``;
const MainImage = styled.img``;
const MainContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;


function Slider({slides}) {
  return (
    <SliderSection>
        <SliderWrapper>
            {slides.map((slide, idx) => {
                return (
                    <MainSlide key={idx}>
                        <MainSlider>
                            <MainImage/>
                            <MainContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.quote}</p>
                                <Button to={slide.path} css={`max-width: 130px`}>
                                    {slide.label}
                                    <Arrow />
                                </Button>
                            </MainContent>
                        </MainSlider>
                    </MainSlide>
                )
            })}
        </SliderWrapper>
    </SliderSection>
  )
}

export default Slider;