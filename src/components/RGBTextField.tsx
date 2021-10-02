import React from 'react';
import '../assets/sass/rgbTextField.scss';

type Props = {
    id: string;
    label: string;
    color: number;
};

const RGBTextField: React.VFC<Props> = (props) => {
    const { id, label, color } = props;
    const isReadOnly = true;
    return (
        <div className="rgb-text-field">
            <label
                className="rgb-text-field__label"
                htmlFor={id}
            >{`${label} : `}</label>
            <input
                className={`rgb-text-field__input--${id}`}
                id={id}
                type="text"
                value={color}
                readOnly={isReadOnly}
            />
        </div>
    );
};

export default RGBTextField;
