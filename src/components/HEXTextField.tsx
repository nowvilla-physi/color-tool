import React from 'react';
import '../assets/sass/hexTextField.scss';
import * as Strings from '../strings';

type Props = {
    hex: string;
    isReadOnly: boolean;
    handleChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

const HEXTextField: React.VFC<Props> = (props) => {
    const { hex, isReadOnly, handleChange } = props;

    return (
        <div className="hex-text-field">
            <label className="hex-text-field__label" htmlFor="hex">
                {Strings.HOME_HEX_LABEL}
            </label>
            <input
                className="hex-text-field__input"
                id="hex"
                type="text"
                value={hex}
                readOnly={isReadOnly}
                onChange={(e) =>
                    handleChange ? handleChange(e) : console.log(e)
                }
            />
        </div>
    );
};

export default HEXTextField;
