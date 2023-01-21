// How to build
// workbox generateSW workbox-config.js
// (requires workbox-cli: npm i -g workbox-cli)

module.exports = {
    'globDirectory': './',
    'globPatterns': [
    //   "**/*.{css,js,html,json,svg,png}"
        'css/yatzy.css',
        'js/categories.js',
        'js/Dice.js',
        'js/generalFunctions.js',
        'js/probabilityCalculations.js',
        'media/d1.svg',
        'media/d2.svg',
        'media/d3.svg',
        'media/d4.svg',
        'media/d5.svg',
        'media/d6.svg',
        'media/icon.png',
        'index.html',
        './',
        'manifest.json',
    ],
    'swDest': 'sw.js'
};
