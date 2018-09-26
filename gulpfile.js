const elixir = require('laravel-elixir');
 
require('laravel-materialize');
 
elixir(mix => {
    mix.sass('app.scss')
       .materialize()
       .webpack('app.js');
});