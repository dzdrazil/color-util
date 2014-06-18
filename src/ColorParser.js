import {RGBA} from 'RGBA';

const STRINGIFIERS =  {
    hex: function(rgba) {
        var r = rgba.r.toString(16);
        if (r.length < 2) {
            r = '0' + r;
        }

        var g = rgba.g.toString(16);
        if (g.length < 2) {
            g = '0' + g;
        }

        var b = rgba.b.toString(16);
        if (b.length < 2) {
            b = '0' + b;
        }

        return '#' +
            r +
            g +
            b;
    },
    rgb: function(rgba) {
        return 'rgb(' +
            rgba.r + ',' +
            rgba.g + ',' +
            rgba.b + ')';
    },

    rgba: function(rgba) {
        return 'rgb(' +
            rgba.r + ',' +
            rgba.g + ',' +
            rgba.b + ',' +
            rgba.a + ')';
    },

    vec3: function(rgba) {
        return {
            r: rgba.r,
            g: rgba.g,
            b: rgba.b
        };
    },

    vec4: function(rgba) {
        return {
            r: rgba.r,
            g: rgba.g,
            b: rgba.b,
            a: rgba.a
        };
    }
};

export default {
    FORMATS: {
        HEX: 'hex',
        RGB: 'rgb',
        RGBA: 'rgba',
        VEC3: 'vec3',
        VEC4: 'vec4'
    },

    /**
     * @todo implement proper parsers
     */
    parse() {
        return new RGBA(1,1,1,1);
    },

    stringify: function(rgba, format) {
        return STRINGIFIERS[format](rgba);
    }
};
