/**
 * pinia的优点
 *  1.完整的ts支持
 *  2. 足够轻量,压缩后的体积只有1.6kb
 *  3. 去除了mutation,只有state,getters,actions(支持同步和异步)
 *  4. 没有模块嵌套,只有store的概念,store之间可以自由使用,更好的代码分割
 *  5. 无需手动添加store,store一旦创建便回自动添加
 */
import { createPinia } from 'pinia'

const store = createPinia()

export default store
