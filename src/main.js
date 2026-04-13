// main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/fonts.css'
import './styles/app.style-config.css'
import './Header/config/header.style-config.css'
import './Home/config/home.style-config.css'
import './StudentWorks/config/studentWorks.style-config.css'
import './Articles/config/articles.style-config.css'
import './News/config/news.style-config.css'
import './ConsultationFormSection/config/consultationForm.style-config.css'
import './Footer/config/footer.style-config.css'
import App from './App.vue'

// Роутер — добавляй страницы сюда по мере создания
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',                   component: () => import('./Home/view/HomePageView.vue') },
        { path: '/programs/:id',       component: () => import('./Home/Details/view/HomeDetailsPageView.vue') },
        { path: '/vse-kursy-shkoly',   component: () => import('./Home/VseKursy/view/VseKursyPageView.vue') },
        { path: '/raboty-studentov',   component: () => import('./StudentWorks/view/StudentWorksPageView.vue') },
        { path: '/about',              component: () => import('./AboutUs/view/AboutUsPageView.vue') },
        { path: '/fakultety',          component: () => import('./Faculties/view/FacultiesPageView.vue') },
        { path: '/stati',              component: () => import('./Articles/view/ArticlesPageView.vue') },
        { path: '/stati/:id',          component: () => import('./Articles/Article/view/ArticlePageView.vue') },
        { path: '/news',               component: () => import('./News/view/NewsPageView.vue') },
        { path: '/news/:id',           component: () => import('./News/NewsItem/view/NewsItemPageView.vue') },
    ],
})

createApp(App).use(router).mount('#app')
