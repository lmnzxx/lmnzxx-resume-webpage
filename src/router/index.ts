import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Blog from '../views//Blog.vue';
import Home from '../views//Home.vue';

const blogRoutes: RouteRecordRaw[] = [];
const modules = import.meta.glob('../components/blog/*.vue');

for (const path in modules) {
    const name = path.match(/\/([^\/]+)\.vue$/)?.[1] ?? 'unknown';
    blogRoutes.push({
        path: `/blog/${name.toLowerCase()}`,
        name: name,
        component: modules[path] as any,
    });
}

const routes: RouteRecordRaw[] = [{
    path: '/blog',
    name: 'Blog',
    component: Blog
    },{
    path: '/',
    name: 'Home',
    component: Home
    },
    ...blogRoutes,
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
        scrollBehavior(to) {
    if (to.hash) {
        return {
        el: to.hash,
        behavior: 'smooth',
        }
    }
    return { top: 0 }
    },
});

export default router;
