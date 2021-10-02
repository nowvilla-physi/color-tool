import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../assets/sass/colorSlider.scss';

type Props = {
    id: string;
    label: string;
    max: number;
    color: number;
    handleChange: (value: number) => void;
};

const ColorSlider: React.VFC<Props> = (props) => {
    const { id, label, max, color, handleChange } = props;
    return (
        <div className={`slider--${id}`}>
            <span>{label}</span>
            <Slider
                min={0}
                max={max}
                value={color}
                onChange={(value) => handleChange(value)}
            />
        </div>
    );
};

export default ColorSlider;
