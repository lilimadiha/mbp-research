export default [{
        path: '/',
        name: 'landing-page',
        component: require('./components/Views/Index.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
]