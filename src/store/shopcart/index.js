import { reqCartList,reqDeleteCartById,reqUpdateCheckedByid } from "@/api"
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    // 获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList()
        // 测试是否能获取个人购物车的数据
        // console.log(result);
        if(result.code == 200){
            commit('GETCARTLIST',result.data);
        }
    },
    // 删除购物车某一个产品
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车某一个产品的选中转态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedByid(skuId,isChecked)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除全部已勾选产品
    deleteAllCheckedCart({dispatch,getters}){
        // console.log(context);
        // context:小仓库，commit【提交mutation修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库的数据】
        // console.log(getters.cartList.cartInfoList)
        // 获取购物车中全部的产品（是一个数组）
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item=>{
            // console.log('111');
            let promise = item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):'';      
            // console.log(promise); 
            // 将每一次返回的Promise添加到数组当中
            PromiseAll.push(promise)
        })
        // 只要全部的promise都成功，返回的结果即为成功，如果有一个失败，返回的就是失败
        return Promise.all(PromiseAll)
    },
    // 修改全部产品的转态
    updateAllCartIsChecked({dispatch,state},isChecked){
        // console.log(state,isChecked);
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
            promiseAll.push(promise);
        })
        // 最终的返回结果
        return Promise.all(promiseAll)
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },
    
}
export default {
    state,
    mutations,
    actions,
    getters
}