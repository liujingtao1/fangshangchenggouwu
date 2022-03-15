// 路由配置信息

/*
    当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
    如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
*/
// 路由配置信息
export default [{
        path: '/home',
        component: () => import('@/pages/Home'),

    },
    {
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
    },
    {
        path: '/center',
        component: () => import('@/pages/Center'),
        // 二级路由组件
        children: [{
                path: 'myorder',
                component: () => import('@/pages/Center/myOrder'),
            },
            {
                path: 'grouporder',
                component: () => import('@/pages/Center/groupOrder'),
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: '/pay',
        component: () => import('@/pages/Pay'),
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(from.path)
            }
        }
    },
    {
        path: '/trade',
        component: () => import('@/pages/Trade'),
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车而来
            if (from.path == '/shopcart') {
                next();
            } else {
                // console.log(from);
                // 其他的路由组件而来，停留在当前
                next(from.path);
            }
        }
    },
    {
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
    },
    {
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        name: 'addcartsuccess',
        meta: {
            show: true, // 设置导航隐藏显示
        }
    },
    {
        path: '/search/:keyWord?',
        component: () => import('@/pages/Search'),
        name: "search",
        // 路由组件能不能传递props数据？
        // 布尔值写法:只能传递params参数
        // props:true,
        // 对象写法：额外的给路由组件传递一些props
        // props:{a:1,b:2} 
        // 函数写法：可以把params参数、query参数，通过props传递给路由组件
        props: ($route) => {
            return {
                keyWord: $route.params.keyWord,
                k: $route.query.k
            };
        },
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
    },
    {
        path: '/detail/:skuid',
        component: () => import('@/pages/Detail'),
    },
    // 重定向，在项目跑起来的时候，访问/，立马让它定向到首页
    {
        path: '/',
        redirect: "/home"
    }
];