import React from 'react';
import '../assets/sass/complementaryColorArea.scss';
import * as Strings from '../strings';
import { RGB } from '../reducks/colors/types';

type Props = {
    rgb: RGB;
    complementaryColor: string;
};

const ComplementaryColorArea: React.VFC<Props> = (props) => {
    const { rgb, complementaryColor } = props;

    const styles: { [key: string]: React.CSSProperties } = {
        area: {
            background: `#${complementaryColor}`,
        },
        font: {
            color: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
        },
    };

    return (
        <div className="complementary-color-area" style={styles.area}>
            <p
                className="complementary-color-area__description"
                style={styles.font}
            >
                {Strings.HOME_COMPLEMENTARY_COLOR_DESCRIPTION}
            </p>
            <p
                className="complementary-color-area__description"
                style={styles.font}
            >
                {Strings.HOME_COMPLEMENTARY_COLOR_DESCRIPTION}
            </p>
            <p
                className="complementary-color-area__description"
                style={styles.font}
            >
                {Strings.HOME_COMPLEMENTARY_COLOR_DESCRIPTION}
            </p>
        </div>
    );
};

export default ComplementaryColorArea;
