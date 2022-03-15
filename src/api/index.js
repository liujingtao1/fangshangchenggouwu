// 当前这个模块：对所有API进行统一管理
import requests from "./request";
import mockAjax from "./mockAjax";
// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数
// 发请求：axios发请求返回的结果是promise对象
export const reqCategoryList = () => {
    let res = requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    });
    // console.log(res);
    return res;
}
// 切记：当前函数执行需要把服务器返回结果返回

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockAjax.get('/banner');

// 获取floor数据
export const reqFloorList = () => mockAjax.get('/floor')

// 获取搜索（Search）模块数据 请求地址：/api/list  请求方式：post    参数：需要带一下参数
/*
    {
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
    }
*/
// 当前的这个函数需要传递外部参数
// 当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => {
    return requests({
        url: "/list",
        method: "post",
        data: params
    })
}

// 获取产品详情信息的接口 URL：/api/item/{ skuId } 请求方式：get 
export const reqGoodsInfo = (skuId) => {
    return requests({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum } 请求方式：POST
export const reqAddOrUpdateShopCart = (skuId, skuNumber) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNumber}`,
        method: 'post',
        data: {
            skuId,
            skuNumber
        }
    })
}
// 获取购物车列表接口 地址：/api/cart/cartList 请求方式：get
export const reqCartList = () => requests({
    url: '/cart/cartList',
    method: 'get'
});

// 删除购物车产品接口 /api/cart/deleteCart/{skuId}  请求方式：delete
export const reqDeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

// 修改商品的选中转态 请求地址：/api/cart/checkCart/{skuId}/{isChecked} 请求方式：get
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})
// 获取验证码接口 请求地址：/api/user/passport/sendCode/{phone} 请求方式：get
export const reqGetCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})
// 注册接口 请求地址：/api/user/passport/register 请求方式：post 参数：phone、code、password
export const reqUserRegister = (data) => requests({url:'/user/passport/register',method:'post',data});
// 登录接口 请求地址：/api/user/passport/login 请求方式：post 参数：phone、password
export const reqUserLogin = (data) => requests({url: '/user/passport/login',data,method:'post'});
// 获取用户信息【需要带着用户的token向服务器要用户信息】 请求地址：/user/passport/auth/getUserInfo 请求方式：get
export const reqUserInfo = () => requests({url: '/user/passport/auth/getUserInfo',method: 'get'});

// 退出登录 请求地址：/api/user/passport/logout 请求方式：get
export const reqLogout = () => requests({url: '/user/passport/logout',method: 'get'});

// 获取用户地址信息 请求地址：/api/user/userAddress/auth/findUserAddressList 请求方式：get
export const reqAddressInfo = () => requests({url: '/user/userAddress/auth/findUserAddressList',method: 'get'});

// 获取商品清单 请求地址：/api/order/auth/trade 请求方式：get
export const reqOrderInfo = () => requests({url:'/order/auth/trade',method: 'get'});

// 提交订单的接口 请求地址：/api/order/auth/submitOrder?tradeNo={tradeNo} 请求方式：post
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method: 'post'});

// 获取订单支付信息 请求地址：/api/payment/weixin/createNative/{orderId} 请求方式：get
export const reqPayInfo = (orderId) => requests({url: `/payment/weixin/createNative/${orderId}`,method: 'get'});

// 获取支付订单状态 请求地址：/api/payment/weixin/queryPayStatus/{orderId} 请求方式：get
export const reqPayStatus = (orderId) => requests({url: `/payment/weixin/queryPayStatus/${orderId}`,method: 'get'})

// 获取个人中心的数据 请求地址：/api/order/auth/{page}/{limit} 请求方式：get
export const reqMyOrderList = (page,limit) => requests({url: `/order/auth/${page}/${limit}`,method: 'get'})