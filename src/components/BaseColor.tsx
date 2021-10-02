import React from 'react';
import '../assets/sass/baseColor.scss';
import { RGB } from '../reducks/colors/types';

type Props = {
    rgb: RGB;
    height: number;
};

const BaseColor: React.VFC<Props> = (props) => {
    const { rgb, height } = props;
    const style = {
        height: `${height}px`,
        backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
    };
    return <div className="base-color" style={style} />;
};

export default BaseColor;
