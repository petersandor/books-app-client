// src/app/routes.ts
import {Home} from './components/home';     // ./components/home/index.ts
import {Login} from './components/login';     // ./components/login/index.ts

export default [
    {path: '/', component: Home, name: 'Home'},
    {path: '/login', component: Login, name: 'Login'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/about', loader: () => require('./components/about')('About'), name: 'About'}
];
