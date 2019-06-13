const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const PurgeCSS = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [,
        tailwind,
        autoprefixer,
        new PurgeCSS({
            content: ['./src/**/*.js', './src/00/*.svelte'],
            css: ['./src/*.css'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
    ]
}