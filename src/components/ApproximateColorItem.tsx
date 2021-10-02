import React from 'react';
import '../assets/sass/approximateColorItem.scss';

type Props = {
    color: string;
    count: number;
};

const ApproximateColorItem: React.VFC<Props> = (props) => {
    const { color, count } = props;
    const styles: { [key: string]: React.CSSProperties } = {
        color: {
            backgroundColor: `#${color}`,
        },
    };
    return (
        <button
            type="button"
            className="approximate-color-item"
            style={styles.color}
            onClick={() => alert(`#${color}`)}
        >
            <p className="approximate-color-item--white">
                {count > 0 ? `+${count}` : `${count}`}
            </p>
            <p className="approximate-color-item--black">
                {count > 0 ? `+${count}` : `${count}`}
            </p>
        </button>
    );
};

export default ApproximateColorItem;
