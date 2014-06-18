import {ColorParser} from './ColorParser';

export default class Color {
    constructor(color = '#FFF') {
        this.rgba = ColorParser.parse(color);
    }

    toString(format = ColorParser.FORMATS.HEX) {
        return ColorParser.stringify(this.rgba, format);
    }

    get FORMATS() {
        return ColorParser.FORMATS;
    }

    get r() {
        return this.rgba.r;
    }

    get g() {
        return this.rgba.g;
    }

    get b() {
        return this.rgba.b;
    }

    get a() {
        return this.rgba.a;
    }

    set r(val) {
        this.rgba.r = val;
    }

    set g(val) {
        this.rgba.g = val;
    }

    set b(val) {
        this.rgba.b = val;
    }

    set a(val) {
        this.rgba.a = val;
    }
}
