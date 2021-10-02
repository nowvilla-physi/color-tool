import React from 'react';
import '../assets/sass/paletteLabel.scss';

type Props = {
    label?: string;
    height: number;
};

const PaletteLabel: React.VFC<Props> = (props) => {
    const { label, height } = props;
    let border;
    if (label === undefined) {
        border = '1px solid black';
    } else {
        border = 'none';
    }

    const style = {
        height: `${height}px`,
        borderTop: border,
        borderBottom: border,
    };

    return (
        <div className="palette-label" style={style}>
            <p>{label === undefined ? '' : label}</p>
        </div>
    );
};

export default PaletteLabel;
