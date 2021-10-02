import { Action } from 'redux';
import ActionTypes from './actionTypes';

export type Colors = {
    rgb: RGB;
    hsv: HSV;
    hex: string;
    complementaryColor: string;
    approximateHColors: Array<ApproximateColor>;
    approximateSColors: Array<ApproximateColor>;
    approximateVColors: Array<ApproximateColor>;
};

export type RGB = {
    r: number;
    g: number;
    b: number;
};

type HSV = {
    h: number;
    s: number;
    v: number;
};

type ApproximateColor = {
    hsv: HSV;
    hex: string;
    count: number;
};

interface RUpdateAction extends Action {
    type: typeof ActionTypes.updateR;
    payload: number;
}

interface GUpdateAction extends Action {
    type: typeof ActionTypes.updateG;
    payload: number;
}

interface BUpdateAction extends Action {
    type: typeof ActionTypes.updateB;
    payload: number;
}

interface HUpdateAction extends Action {
    type: typeof ActionTypes.updateH;
    payload: number;
}

interface SUpdateAction extends Action {
    type: typeof ActionTypes.updateS;
    payload: number;
}

interface VUpdateAction extends Action {
    type: typeof ActionTypes.updateV;
    payload: number;
}

interface HEXUpdateAction extends Action {
    type: typeof ActionTypes.updateHex;
    payload?: string;
}

interface HEXUpdateForHSVAction extends Action {
    type: typeof ActionTypes.updateHexForHsv;
}

interface ApproximateColorUpdateAction extends Action {
    type: typeof ActionTypes.updateApproximateColor;
    payload: string;
}

interface ComplementaryColorUpdateAction extends Action {
    type: typeof ActionTypes.updateComplementaryColor;
}

export type UpdateColorActionTypes =
    | RUpdateAction
    | GUpdateAction
    | BUpdateAction
    | HUpdateAction
    | SUpdateAction
    | VUpdateAction
    | HEXUpdateAction
    | HEXUpdateForHSVAction
    | ApproximateColorUpdateAction
    | ComplementaryColorUpdateAction;
