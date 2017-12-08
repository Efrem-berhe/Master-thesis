const elixir = require('laravel-elixir');

//require('laravel-elixir-vue-2');

require('laravel-elixir-webpack-react');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js')
    .version(['public/css/app.css','public/js/app.js']); // compile app.js to public/js/app.js
    mix.copy('node_modules/font-awesome/fonts/','public/fonts'); //copy font awesome to public/fonts from moudles
    mix.copy('resources/assets/sass/*.css','public/css'); //copy introjs files  to public/css
    mix.copy('resources/assets/js/intro.js','public/js'); //copy introjs files  to public/js
    mix.copy('resources/assets/js/tour.js','public/js'); //copy introjs files  to public/js
    mix.copy('resources/assets/js/supervisor.js','public/js'); //copy introjs files  to public/js

});
