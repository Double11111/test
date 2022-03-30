export const plugins = {
    autoprefixer: {
        browers: ['Android >= 4.4', 'iOS >= 8'],
    },
    "postcss-px-to-viewport": {
        viewportWidth: 750,
        viewportHeight: 1334,
        unitPrecision: 1,
        viewportUnit: 'vw',
        minPixelValue: 1,
        mediaQuery: true,

        selectorBlackList: [
            ".ignore",
            ".hairlines",
            "van",
            "swiper"
        ],
        exclude: /(\/|\\)(node_modules)(\/|\\)/
    }
};