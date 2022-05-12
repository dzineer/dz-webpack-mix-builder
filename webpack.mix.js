const mix = require('laravel-mix');
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//   stats: {
//       children: false
//   }
// })

const admin = {
    public: '../assets',
    libraries: {
        jquery: ['$', 'window.jquery', 'jQuery']
    },
    extract: ['vue'],
    useSourceMaps: true,
    source: {
        js: path.resolve(__dirname) +  '/../resources/js/admin.js',
        css: path.resolve(__dirname) + '/../resources/css/styles.css',
        sass:  path.resolve(__dirname) + '/../resources/sass/admin.scss',
    },
    individual: {
        bulma: {
            source: {
                sass:  '../node_modules/bulma/bulma.sass',
            }
        }
    },
    dest: {
        js:  'admin/js',
        css:  'admin/css',
        sass: 'admin/css',
    }
}

mix.setPublicPath( admin.public )
    .autoload(admin.libraries)
    .js(admin.source.js, admin.dest.js)
    .vue()
    .postCss(admin.source.css, admin.dest.css, [
        //
    ])
    .sass(admin.source.sass, admin.dest.sass, [
        //
    ])
    .sass(admin.individual.bulma.source.sass, admin.dest.sass, [
        //
    ]).sourceMaps( admin.useSourceMaps ).extract( admin.extract )
