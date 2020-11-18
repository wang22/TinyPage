

// const routes = [
//     {
//         path: '/ddd',
//         components: (r) => require(['./layout/index'], r),
//         children: [
//             {
//                 path: '/posts',
//                 components: (r) => require(['./pages/posts'], r),
//             }
//         ]
//     }
// ]

// const routes = [
//     {
//         path: '/foo', components: Foo
//     },
//     {
//         path: '/ddd', components: Bar
//     }
// ]

// export default {
//     routes
// }

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
    {
        path: '/', component: (r) => require(['./layout/index'], r),
        children: [
            {
                path: '/', component: (r) => require(['./pages/posts'], r),
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    routes: routes
})


// export default new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/ddd',
//             components: (r) => require(['./layout/index'], r),
//             children: [
//                 {
//                     path: '/posts',
//                     components: (r) => require(['./pages/posts'], r),
//                 }
//             ]
//         }
//     ]
// })
