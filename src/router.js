const routes = [
    {
        path: '/ddd',
        components: (r) => require(['./layout/index'], r),
        children: [
            {
                path: '/posts',
                components: (r) => require(['./pages/posts'], r),
            }
        ]
    }
]

export default {
    routes
}