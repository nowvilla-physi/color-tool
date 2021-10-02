const hexRegex: RegExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

// rgbからhexに変換する。
export const toHEXFromRGB = (r: number, g: number, b: number) => {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const componentToHex = (decimalColor: number) => {
    const hexColor = decimalColor.toString(16);
    return hexColor.length === 1 ? `0${hexColor}` : hexColor.toString();
};

// hexからrgbに変換する。
export const toRGBFromHEX = (hex: string) => {
    const result = hexRegex.exec(`#${hex}`);
    const rgb: Array<number> = [];
    if (result !== null) {
        for (let i = 0; i < 3; i += 1) {
            // exec()は要素1以降にマッチした結果を返すためindex + 1とする。
            rgb[i] = parseInt(result[i + 1], 16);
        }
    }
    return rgb;
};

// hexから補色に変換する。
export const toComplementaryColorFromHEX = (hexRGB: string) => {
    const rgb: Array<number> = toRGBFromHEX(hexRGB);
    const r: number = rgb[0];
    const g: number = rgb[1];
    const b: number = rgb[2];
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const sum = max + min;

        const newRGB = rgb.map((color) => {
            return sum - color;
        });
        return toHEXFromRGB(newRGB[0], newRGB[1], newRGB[2]);
    }
    return toHEXFromRGB(rgb[0], rgb[1], rgb[2]);
};

// hexからhsvに変換する。
export const toHSVFromRGB = (rgb: Array<number>) => {
    const r: number = rgb[0] / 255;
    const g: number = rgb[1] / 255;
    const b: number = rgb[2] / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;

    // 色相
    let h: number;
    switch (min) {
        case max:
            h = 0;
            break;
        case b:
            h = 60 * ((g - r) / diff) + 60;
            break;
        case r:
            h = 60 * ((b - g) / diff) + 180;
            break;
        case g:
            h = 60 * ((r - b) / diff) + 300;
            break;
        default:
            h = 0;
            console.log('unexpected error.');
            break;
    }

    // 彩度
    const s = max !== 0 ? ((max - min) / max) * 100 : 0;

    // 明度
    const v = max * 100;

    return [Math.floor(h), Math.floor(s), Math.floor(v)];
};

// hsvからrgbに変換する。
export const toRGBFromHSV = (hsv: Array<number>) => {
    let rgb;
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;

    if (s === 0) {
        rgb = [v, v, v];
    } else {
        const hDegree = Math.floor(h);
        const diff = h - hDegree;
        const v1 = v * (1 - s);
        const v2 = v * (1 - s * diff);
        const v3 = v * (1 - s * (1 - diff));

        switch (hDegree) {
            case 0:
            case 6:
                rgb = [v, v3, v1];
                break;
            case 1:
                rgb = [v2, v, v1];
                break;
            case 2:
                rgb = [v1, v, v3];
                break;
            case 3:
                rgb = [v1, v2, v];
                break;
            case 4:
                rgb = [v3, v1, v];
                break;
            case 5:
                rgb = [v, v1, v2];
                break;
            default:
                rgb = [v, v, v];
        }
    }

    return rgb.map((color) => {
        return Math.floor(color * 255);
    });
};

// 初期の近似色を作成する。
export const createApproximateColorH = (
    hex: string,
    h: number,
    s: number,
    v: number,
    count: number = 0
) => {
    const baseColorsH = [
        {
            hsv: { h, s, v },
            hex,
            count,
        },
    ];
    const approximateMinusColorsH = [];
    const approximatePlusColorsH = [];
    for (let i = 2; i <= 40; i += 2) {
        let newH = h + i;
        const newCount = count + i;
        if (newH > 359) {
            newH -= 360;
        }

        const rgb = toRGBFromHSV([newH, s, v]);
        const hexFromRGB = toHEXFromRGB(rgb[0], rgb[1], rgb[2]);

        approximatePlusColorsH.push({
            hsv: { h: newH, s, v },
            hex: hexFromRGB,
            count: newCount,
        });
    }

    for (let i = -2; i >= -40; i -= 2) {
        let newH = h + i;
        const newCount = count + i;
        if (newH < 0) {
            newH += 360;
        }

        const rgb = toRGBFromHSV([newH, s, v]);
        const hexFromRGB = toHEXFromRGB(rgb[0], rgb[1], rgb[2]);

        approximateMinusColorsH.push({
            hsv: { h: newH, s, v },
            hex: hexFromRGB,
            count: newCount,
        });
    }

    return [
        ...approximateMinusColorsH.reverse(),
        ...baseColorsH,
        ...approximatePlusColorsH,
    ];
};

export const createApproximateColorS = (
    hex: string,
    h: number,
    s: number,
    v: number,
    count: number = 0
) => {
    const baseColorsS = [
        {
            hsv: { h, s, v },
            hex,
            count,
        },
    ];
    const approximateMinusColorsS = [];
    const approximatePlusColorsS = [];
    let newCount = count;
    for (let i = 2; i <= 40; i += 2) {
        let newS = s + i;
        if (newS > 100) {
            newS = 100;
        } else {
            newCount = count + i;
        }

        const rgb = toRGBFromHSV([h, newS, v]);
        const hexFromRGB = toHEXFromRGB(rgb[0], rgb[1], rgb[2]);

        approximatePlusColorsS.push({
            hsv: { h, s: newS, v },
            hex: hexFromRGB,
            count: newCount,
        });
    }

    newCount = count;
    for (let i = -2; i >= -40; i -= 2) {
        let newS = s + i;
        if (newS < 0) {
            newS = 0;
        } else {
            newCount = count + i;
        }

        const rgb = toRGBFromHSV([h, newS, v]);
        const hexFromRGB = toHEXFromRGB(rgb[0], rgb[1], rgb[2]);

        approximateMinusColorsS.push({
            hsv: { h, s: newS, v },
            hex: hexFromRGB,
            count: newCount,
        });
    }

    return [
        ...approximateMinusColorsS.reverse(),
        ...baseColorsS,
        ...approximatePlusColorsS,
    ];
};

export const createApproximateColorV = (
    hex: string,
    h: number,
    s: number,
    v: number,
    count: number = 0
) => {
    const baseColorsV = [
        {
            hsv: { h, s, v },
            hex,
            count,
        },
    ];
    const approximateMinusColorsV = [];
    const approximatePlusColorsV = [];
    let newCount = count;
    for (let i = 2; i <= 40; i += 2) {
        let newV = v + i;
        if (newV > 100) {
            newV = 100;
        } else {
            newCount = count + i;
        }

        const rgb = toRGBFromHSV([h, s, newV]);
        const hexFromRGB = toHEXFromRGB(rgb[0], rgb[1], rgb[2]);

        approximatePlusColorsV.push({
            hsv: { h, s, v: newV },
            hex: hexFromRGB,
            count: newCount,
        });
    }

    newCount = count;
    for (let i = -2; i >= -40; i -= 2) {
        let newV = v + i;
        if (newV < 0) {
            newV = 0;
        } else {
            newCount = count + i;
        }

        const rgb = toRGBFromHSV([h, s, newV]);
        const hexFromRGB = toHEXFromRGB(rgb[0], rgb[1], rgb[2]);

        approximateMinusColorsV.push({
            hsv: { h, s, v: newV },
            hex: hexFromRGB,
            count: newCount,
        });
    }

    return [
        ...approximateMinusColorsV.reverse(),
        ...baseColorsV,
        ...approximatePlusColorsV,
    ];
};
