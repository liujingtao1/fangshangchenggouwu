import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api"
// 封装游客身份模块uuid---->生成一个随机字符串（生成之后就不能再变）
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo : {},
    // 游客临时身份
    uuid_token: getUUID(),
}
const mutations = {
    GETGOODSINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取产品信息的action
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit('GETGOODSINFO',result.data);
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNumber}){
        // 加入购物车返回的结构
        // 加入购物车以后（发请求），前台将参数带给服务器
        // 服务器写入数据库成功，并没有返回其他数据，只是返回了code==201，代表这次操作成功
        // 因为服务器没有返回其余数据，因此咱们不需要三连环存储数据
        let result = await reqAddOrUpdateShopCart(skuId,skuNumber);
        // 当前的这个函数如果执行，返回返回Promise
        // 代表服务器加入购物车成功
        if(result.code == 200){
            // console.log(result)
            return "ok"
        }else {
            // 代表加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    // 路径导航简化的数据
    categoryView(state){
        // 比如：state.goodInfo初识状态是一个空对象，空对象的categoryView属性值是undefined
        // 当前计算出来的categoryView属性值至少是一个空对象，假的报错就不会有了
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    // 简化产品的售卖属性的数据
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}
