import {
    createStore
} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 三个模块
import cart from '@/store/modules/cart'
import category from '@/store/modules/category'
import user from '@/store/modules/user'

export default createStore({
    modules: {
        cart,
        category,
        user
    },
    // 配置插件
    plugins: [
        createPersistedState({
            // 本地存储名字
            key: 'erabbit-client-pc-project-store',
            // 指定需要存储的模块
            paths: ['user', 'cart']
        })

    ]
})