import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from './pages/HomePage.vue';
import PostPage from './pages/PostPage.vue';
import SinglePostPage from './pages/SinglePostPage.vue';
import ContactPage from './pages/ContactPage.vue';

import NotFound from './pages/NotFound.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/post',
            name: 'post',
            component: PostPage
        },
        {
            path: '/post/:slug',
            name: 'single-post-page',
            component: SinglePostPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export default router;