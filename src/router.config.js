let routes = [{
    path: '/',
    name: 'list',
    meta: {
        title: '文件列表 - S3Directory'
    },
    component: r => require.ensure([], () => r(require('./list.vue')), 'list')
}, {
    path: '/fav',
    name: 'fav',
    meta: {
        title: '个人收藏 - S3Directory'
    },
    component: r => require.ensure([], () => r(require('./fav.vue')), 'fav')
}, {
    path: '/mount',
    name: 'mount',
    meta: {
        title: '挂载管理 - S3Directory'
    },
    component: r => require.ensure([], () => r(require('./mount.vue')), 'mount')
}];

module.exports = routes;