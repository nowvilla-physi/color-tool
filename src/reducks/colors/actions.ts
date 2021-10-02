import ActionTypes from './actionTypes';
import { UpdateColorActionTypes } from './types';

export const updateR = (r: number): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateR,
        payload: r,
    };
};

export const updateG = (g: number): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateG,
        payload: g,
    };
};

export const updateB = (b: number): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateB,
        payload: b,
    };
};

export const updateH = (h: number): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateH,
        payload: h,
    };
};

export const updateS = (s: number): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateS,
        payload: s,
    };
};

export const updateV = (v: number): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateV,
        payload: v,
    };
};

export const updateHex = (hex?: string): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateHex,
        payload: hex,
    };
};

export const updateHexForHSV = (): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateHexForHsv,
    };
};

export const updateApproximateColor = (hex: string): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateApproximateColor,
        payload: hex,
    };
};

export const updateComplementaryColor = (): UpdateColorActionTypes => {
    return {
        type: ActionTypes.updateComplementaryColor,
    };
};
