import { Field } from "formik";
import styled from "styled-components";
import { colors, screenSizes } from "../../styles/theme";
export const RangeSliderWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    width: 97%;
  }
`;

export const InputRangeSlider = styled(Field)`
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background-color: ${colors.blackRussian};
  display: block;
  &:focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    transition: 0.4s all ease-out;
    box-shadow: 0px 0px 0px ${colors.black};
    background: ${colors.sliderBackground};
    border-radius: 28px;
    border: 0px solid ${colors.black};
  }
  ::-webkit-slider-thumb {
    border: 2px solid ${colors.white};
    box-shadow: 1px 1px 1px ${colors.black};
    height: 36px;
    width: 36px;
    transition: 0.4s all ease-out;
    border-radius: 50px;
    background: ${colors.sliderBackground};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${colors.sliderBackground};
  }
  ::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    transition: 0.4s all ease-out;
    box-shadow: 0px 0px 0px ${colors.black};
    background: ${colors.sliderBackground};
    border-radius: 4px;
    border: 0px solid ${colors.black};
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px ${colors.black};
    border: 1px solid ${colors.black};
    height: 30px;
    width: 30px;
    border-radius: 50px;
    background: ${colors.sliderBackground};
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: ${colors.sliderBackground};
    border: 0px solid ${colors.black};
    border-radius: 10px;
    box-shadow: 0px 0px 0px #000000;
  }
  ::-ms-fill-upper {
    background: ${colors.sliderBackground};
    border: 0px solid ${colors.black};
    border-radius: 10px;
    box-shadow: 0px 0px 0px ${colors.black};
  }
  ::-ms-thumb {
    box-shadow: 1px 1px 1px ${colors.black};
    border: 1px solid ${colors.black};
    height: 30px;
    width: 30px;
    border-radius: 50px;
    background: ${colors.sliderBackground};
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: ${colors.sliderBackground};
  }
  &:focus::-ms-fill-upper {
    background: ${colors.sliderBackground};
  }
`;
