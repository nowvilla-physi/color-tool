import { Colors, UpdateColorActionTypes } from './types';
import ActionTypes from './actionTypes';
import {
    createApproximateColorH,
    createApproximateColorS,
    createApproximateColorV,
    toComplementaryColorFromHEX,
    toHEXFromRGB,
    toRGBFromHSV,
} from './operations';

const initialState: Colors = {
    rgb: { r: 0, g: 0, b: 0 },
    hsv: { h: 0, s: 0, v: 0 },
    hex: '000000',
    complementaryColor: '000000',
    approximateHColors: createApproximateColorH('000000', 0, 0, 0),
    approximateSColors: createApproximateColorS('000000', 0, 0, 0),
    approximateVColors: createApproximateColorV('000000', 0, 0, 0),
};

const colorsReducer = (
    state = initialState,
    action: UpdateColorActionTypes
): Colors => {
    switch (action.type) {
        case ActionTypes.updateR:
            return {
                ...state,
                rgb: { r: action.payload, g: state.rgb.g, b: state.rgb.b },
            };
        case ActionTypes.updateG:
            return {
                ...state,
                rgb: { r: state.rgb.r, g: action.payload, b: state.rgb.b },
            };
        case ActionTypes.updateB:
            return {
                ...state,
                rgb: { r: state.rgb.r, g: state.rgb.g, b: action.payload },
            };
        case ActionTypes.updateH:
            return {
                ...state,
                hsv: { h: action.payload, s: state.hsv.s, v: state.hsv.v },
            };
        case ActionTypes.updateS:
            return {
                ...state,
                hsv: { h: state.hsv.h, s: action.payload, v: state.hsv.v },
            };
        case ActionTypes.updateV:
            return {
                ...state,
                hsv: { h: state.hsv.h, s: state.hsv.s, v: action.payload },
            };
        case ActionTypes.updateHex: {
            let newHEX: string;
            if (action.payload === undefined) {
                newHEX = toHEXFromRGB(state.rgb.r, state.rgb.g, state.rgb.b);
            } else {
                newHEX = action.payload!;
            }
            return { ...state, hex: newHEX };
        }
        case ActionTypes.updateHexForHsv: {
            const rgb = toRGBFromHSV([state.hsv.h, state.hsv.s, state.hsv.v]);
            const newHEX = toHEXFromRGB(rgb[0], rgb[1], rgb[2]);
            return {
                ...state,
                hex: newHEX,
            };
        }
        case ActionTypes.updateComplementaryColor: {
            const newComplementaryColor = toComplementaryColorFromHEX(
                state.hex
            );
            return { ...state, complementaryColor: newComplementaryColor };
        }
        case ActionTypes.updateApproximateColor: {
            const hex = action.payload;
            const approximateHColors = createApproximateColorH(
                hex,
                state.hsv.h,
                state.hsv.s,
                state.hsv.v
            );
            const approximateSColors = createApproximateColorS(
                hex,
                state.hsv.h,
                state.hsv.s,
                state.hsv.v
            );
            const approximateVColors = createApproximateColorV(
                hex,
                state.hsv.h,
                state.hsv.s,
                state.hsv.v
            );
            return {
                ...state,
                approximateHColors,
                approximateSColors,
                approximateVColors,
            };
        }
        default:
            return state;
    }
};

export default colorsReducer;
