// How to build
// workbox generateSW workbox-config.js
// (requires workbox-cli: npm i -g workbox-cli)

module.exports = {
    'globDirectory': './',
    'globPatterns': [
    //   "**/*.{css,js,html,json,svg,png}"
        'css/darkmode.css',
        'js/categories.js',
        'js/Dice.js',
        'js/generalFunctions.js',
        'js/probabilityCalculations.js',
        'media/d1.svg',
        'media/d1_dark.svg',
        'media/d2.svg',
        'media/d2_dark.svg',
        'media/d3.svg',
        'media/d3_dark.svg',
        'media/d4.svg',
        'media/d4_dark.svg',
        'media/d5.svg',
        'media/d5_dark.svg',
        'media/d6.svg',
        'media/d6_dark.svg',
        'media/icon.png',
        'index.html',
        './',
        'manifest.json',
    ],
    'swDest': 'sw.js'
};
