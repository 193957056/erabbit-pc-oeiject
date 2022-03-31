/* eslint-disable no-undef */
import {
    createStore
} from 'vuex'
// A模块
const moduleA = {
        state: {
            username: 'moduleA'
        },
        getters: {
            newName(state) {
                return state.username + '1111'
            }
        }

    }
    // B模块
const moduleB = {
    namespaced: true,
    state: {
        username: 'moduleB'
    },
    getters: {
        newName(state) {
            return state.username + '222'
        }
    },
    mutations: {
        updateName(state) {
            state.username = 'yama'
        }
    },
    actions: {
        updateName(ctx) {
            // 发请求
            setTimeout(() => {
                ctx.commit('updateName')
            }, 1000)
        }
    }
}
export default createStore({
        modules: {
            moduleA,
            moduleB
        }
    })
    // 创建vuex仓库并导出
    // export default createStore({
    //     state: {
    //         // 数据
    //         username: 'yama'
    //     },
    //     mutations: {
    //         // 改数据函数

//     },
//     actions: {
//         // 请求数据函数
//     },
//     modules: {
//         // 分模块
//     },
//     getters: {
//         // vuex的计算属性
//         newName(state) {
//             return state.username + '!!!'
//         }
//     }
// })