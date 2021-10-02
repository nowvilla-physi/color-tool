import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Strings from '../strings';
import '../assets/sass/home.scss';
import {
    BaseColor,
    ColorSlider,
    PaletteLabel,
    RGBTextField,
} from '../components';
import HEXTextField from '../components/HEXTextField';
import ComplementaryColorArea from '../components/ComplementaryColorArea';
import { RootState } from '../reducks/store/store';
import {
    updateApproximateColor,
    updateB,
    updateComplementaryColor,
    updateG,
    updateH,
    updateHex,
    updateHexForHSV,
    updateR,
    updateS,
    updateV,
} from '../reducks/colors/actions';
import { toHSVFromRGB, toRGBFromHEX } from '../reducks/colors/operations';
import ApproximateColorItem from '../components/ApproximateColorItem';

const Home: React.VFC = () => {
    const rootState = useSelector((state: RootState) => state.colors);
    const dispatch = useDispatch();

    useEffect(() => {
        const rgb = toRGBFromHEX(rootState.hex);
        if (rgb.length === 3) {
            dispatch(updateR(rgb[0]));
            dispatch(updateG(rgb[1]));
            dispatch(updateB(rgb[2]));
            dispatch(updateComplementaryColor());

            const hsv = toHSVFromRGB(rgb);
            dispatch(updateH(hsv[0]));
            dispatch(updateS(hsv[1]));
            dispatch(updateV(hsv[2]));

            dispatch(updateApproximateColor(rootState.hex));
        }
    }, [rootState.hex]);

    const handleChangeForHEX = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputtedHEX = event.target.value;
        if (inputtedHEX.length <= 6) {
            dispatch(updateHex(inputtedHEX));
        }
    };

    const handleChangeForSliderR = (value: number) => {
        dispatch(updateR(value));
        dispatch(updateHex());
    };

    const handleChangeForSliderG = (value: number) => {
        dispatch(updateG(value));
        dispatch(updateHex());
    };

    const handleChangeForSliderB = (value: number) => {
        dispatch(updateB(value));
        dispatch(updateHex());
    };

    const handleChangeForSliderH = (value: number) => {
        dispatch(updateH(value));
        dispatch(updateHexForHSV());
    };

    const handleChangeForSliderS = (value: number) => {
        dispatch(updateS(value));
        dispatch(updateHexForHSV());
    };

    const handleChangeForSliderV = (value: number) => {
        dispatch(updateV(value));
        dispatch(updateHexForHSV());
    };

    return (
        <div className="home">
            <p className="home__description">
                {Strings.HOME_DESCRIPTION_PURPOSE}
            </p>
            <div className="home__to-hex">
                <HEXTextField
                    hex={rootState.hex}
                    isReadOnly={false}
                    handleChange={handleChangeForHEX}
                />
                <p className="home__arrow"> → </p>
                <RGBTextField
                    id="red"
                    label={Strings.HOME_TO_HEX_INPUT_LABEL_RED}
                    color={rootState.rgb.r}
                />
                <RGBTextField
                    id="green"
                    label={Strings.HOME_TO_HEX_INPUT_LABEL_GREEN}
                    color={rootState.rgb.g}
                />
                <RGBTextField
                    id="blue"
                    label={Strings.HOME_TO_HEX_INPUT_LABEL_BLUE}
                    color={rootState.rgb.b}
                />
            </div>
            <p className="home__approximate_color-label">
                {Strings.HOME_APPROXIMATE_COLOR_LABEL}
                <span className="home__color-kind">
                    {Strings.HOME_COLOR_KIND}
                </span>
            </p>

            <div className="home__slider">
                <ColorSlider
                    id="r"
                    label="R:"
                    max={255}
                    color={rootState.rgb.r}
                    handleChange={handleChangeForSliderR}
                />
                <ColorSlider
                    id="g"
                    label="G:"
                    max={255}
                    color={rootState.rgb.g}
                    handleChange={handleChangeForSliderG}
                />
                <ColorSlider
                    id="b"
                    label="B:"
                    max={255}
                    color={rootState.rgb.b}
                    handleChange={handleChangeForSliderB}
                />
                <ColorSlider
                    id="h"
                    label="H:"
                    max={359}
                    color={rootState.hsv.h}
                    handleChange={handleChangeForSliderH}
                />
                <ColorSlider
                    id="s"
                    label="S:"
                    max={100}
                    color={rootState.hsv.s}
                    handleChange={handleChangeForSliderS}
                />
                <ColorSlider
                    id="v"
                    label="V:"
                    max={100}
                    color={rootState.hsv.v}
                    handleChange={handleChangeForSliderV}
                />
            </div>
            <div className="home__approximate-color">
                <div className="home__approximate-color-row">
                    <PaletteLabel height={40} />
                    <BaseColor rgb={rootState.rgb} height={40} />
                </div>
                <div className="home__approximate-color-row">
                    <PaletteLabel label="H" height={96} />
                    {rootState.approximateHColors.map((value, index) => {
                        return (
                            <ApproximateColorItem
                                color={value.hex}
                                count={value.count}
                                key={index.toString()}
                            />
                        );
                    })}
                </div>
                <div className="home__approximate-color-row">
                    <PaletteLabel height={40} />
                    <BaseColor rgb={rootState.rgb} height={40} />
                </div>
                <div className="home__approximate-color-row">
                    <PaletteLabel label="S" height={96} />
                    {rootState.approximateSColors.map((value, index) => {
                        return (
                            <ApproximateColorItem
                                color={value.hex}
                                count={value.count}
                                key={index.toString()}
                            />
                        );
                    })}
                </div>
                <div className="home__approximate-color-row">
                    <PaletteLabel height={40} />
                    <BaseColor rgb={rootState.rgb} height={40} />
                </div>
                <div className="home__approximate-color-row">
                    <PaletteLabel label="V" height={96} />
                    {rootState.approximateVColors.map((value, index) => {
                        return (
                            <ApproximateColorItem
                                color={value.hex}
                                count={value.count}
                                key={index.toString()}
                            />
                        );
                    })}
                </div>
                <div className="home__approximate-color-row">
                    <PaletteLabel height={40} />
                    <BaseColor rgb={rootState.rgb} height={40} />
                </div>
            </div>

            <p className="home__complementary_color-label">
                {Strings.HOME_COMPLEMENTARY_COLOR_LABEL}
            </p>
            <HEXTextField
                hex={rootState.complementaryColor}
                isReadOnly={false}
            />
            <ComplementaryColorArea
                rgb={rootState.rgb}
                complementaryColor={rootState.complementaryColor}
            />
        </div>
    );
};

export default Home;
