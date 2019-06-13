const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const PurgeCSS = require('@fullhuman/postcss-purgecss');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [,
        tailwind,
        autoprefixer,
        prod && new PurgeCSS({
            content: ['./src/**/*.js', './src/**/*.svelte'],
            css: ['./src/*.css'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
    ]
}