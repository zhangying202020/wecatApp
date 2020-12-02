<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in goodDetail.templatePhoto" :key="index">
							<image :src="url+item"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true">
			<view class="detail">
				<text class="title">{{this.name.replace(/[^\u4e00-\u9fa5]/gi,"")}}</text>
				<text class="desc">{{goodDetail.productInfo.product_desc}}</text>
				<text class="price">￥{{goodDetail.productInfo.price}}</text>
				
				<view class="flexV" v-show="this.goodDetail.productItem.length==2?flag1:flag">
					<text class="volume">{{goodDetail.productItem[0].volume}}</text>
					<text class="volume1">{{goodDetail.productItem[1].volume}}</text>
				</view>
				<view class="flexV" v-show="this.goodDetail.productItem[1]==undefined?flag1:flag">
					<text class="volume2">{{goodDetail.productItem[0].volume}}</text>
				</view>
				
				<text class="detal_3">{{goodDetail.sendTimeMsg}}</text>
				<view class="detalFlex">
					<uni-icons type="locked-filled" size="20"></uni-icons>
					<text class="detal_4">保障 {{goodDetail.refundRule}} </text>
					<uni-icons type="arrowright" size="20"></uni-icons>
				</view>
				<view class="detalFlex">
					<text style="font-weight: bolder;font-size: 1rem;">评价(998)</text>
					<uni-icons type="arrowright" size="20"></uni-icons>
				</view>
				<view >
					<text style="font-weight: bolder;font-size: 1rem;">相似商品</text>
				</view>
			</view>
			<text>商品详情</text>
			<view class="table" v-show="this.goodDetail.templateInfo.pro_info.length!=undefined?true:flag">
				<block>
					<view class="tr bg_1">
						<view class="td br">{{goodDetail.templateInfo.pro_info.origin}}</view>
						<view class="td">{{goodDetail.templateInfo.pro_info.originMsg}}</view>					
					</view>
					<view class="tr">
						<view class="td br">{{goodDetail.templateInfo.pro_info.store}}</view>
						<view class="td">{{goodDetail.templateInfo.pro_info.storeMsg}}</view>
					</view>
					<view class="tr bg_3">
						<view class="td br">{{goodDetail.templateInfo.pro_info.explain}}</view>
						<view class="td">{{goodDetail.templateInfo.pro_info.explainMsg}}</view>
					</view>
					
				</block>
			</view>
			<view class="temp" v-for="(item,index) in goodDetail.templateInfo.desc_imgs" :key="index">
				<image :src="url+item" class="tempImage"></image>
			</view>
		</scroll-view>
		<!-- 底部悬浮栏 -->
		<view class="detail-nav">
			<uni-icons type="cart-filled" size="20" color="white" class="nav_cart"></uni-icons>
			<view class="line_nav">
				<view class="navFlex" @click="backHome">
					<uni-icons class="nav-icon" type="home"></uni-icons>
					<text class="nav-text">首页</text>
				</view>
				<view class="navFlex">
					<uni-icons class="nav-icon" type="redo-filled"></uni-icons>
					<text class="nav-text">分享</text>
				</view>
			</view>
			<button class="button-green" formType="submit" @click="addCart">加入购物车</button>
			<button class="button-red" bindtap="immeBuy" formType="submit">立即购买</button>
		</view>
	</view>
</template>
<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				url: '../../static/',
				id: '',
				goodDetail: [],
				cartData: [],
				name:'',
				flag: false,
				flag1: true,
			}
		},
		onLoad(option) {
			this.id = JSON.parse(option.id);
			this.goodDetail = require("../../static/data/good_detail_" + this.id + ".json")
			this.name=this.goodDetail.productInfo.product_name
			console.log('****', this.goodDetail.productItem[1])
		},
		methods: {
			backHome() {
				console.log("回首页")
				uni.navigateBack({
					url: "../main/Homepage"
				})
			},
			addCart() {
				let flag = true
				let obj = {
					src: this.goodDetail.templatePhoto[0],
					title: this.goodDetail.productInfo.product_name.replace(/[^\u4e00-\u9fa5]/gi, ""),
					price: this.goodDetail.productInfo.price,
					num: 1
				}
				if (uni.getStorageSync("cartDat")) {
					this.cartData = JSON.parse(uni.getStorageSync("cartDat"))
					if (this.cartData.length == 0) {
						this.cartData.push(obj)
					} else {
						for (var i = 0; i < this.cartData.length; i++) {
							if (obj.title == this.cartData[i].title) {
								this.cartData[i].num++;
								flag = false;
								break
							}
						}
						if (flag) {
							this.cartData.push(obj)
						}
					}
				} else {
					if (this.cartData.length == 0) {
						this.cartData.push(obj)
					} else {
						for (var i = 0; i < this.cartData.length; i++) {
							if (obj.title == this.cartData[i].title) {
								this.cartData[i].num++;
								flag = false;
								break
							}
						}
						if (flag) {
							this.cartData.push(obj)
						}
						// 进行本地储存；
					}
				}
				uni.setStorageSync("cartData", JSON.stringify(this.cartData))
				console.log("保存结果", JSON.stringify(uni.getStorageSync("cartData")))
			}
		},
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	text {
		display: block;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 30rpx;
		margin: 10rpx;
	}

	/* 直接设置swiper属性 */
	swiper {
		height: 500rpx;
	}

	.detail {
		display: flex;
		flex-direction: column;
		margin-top: 15rpx;
		margin-bottom: 0rpx;
	}

	.detail .title {
		font-size: 1rem;
		margin: 10rpx;
		color: black;
		text-align: center;
		font-weight: bolder;
	}
	.detail .desc{
		text-align: center;
		color: #CCCCCC;
	}
	.detail .price {
		text-align: center;
		color: orange;
		font-size: 2rem;
	}
	
	.flexV{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.detail .volume{
		text-align: center;
		font-size: 1rem;
		font-weight: bolder;
		width: 120rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 20rpx;
		box-shadow: 0rpx 10rpx 50rpx 10rpx #5555551A;
	}
	.detail .volume1{
		text-align: center;
		background-color: orange;
		color: white;
		width: 180rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 20rpx;
	}
	.detail  .volume2{
		text-align: center;
		background-color: orange;
		color: white;
		width: 220rpx;
		height: 100rpx;
		line-height: 100rpx;
		border-radius: 20rpx;
	}
	
	.detail .detal_3 {
		color: #808080;
		text-align: center;
	}
	.detail .detal_4 {
		font-weight: 999;
	}

	.detail .tempImage {}
	.detail .detalFlex {display: flex;}
	.detail-nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		float: left;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 1;
		width: 100%;
		height: 100rpx;
	}

	.button-green {
		background-color: #4caf50;
	}

	.button-red {
		background-color: #f44336;
	}

	.image_detail {
		width: 100%;
	}

	button {
		color: white;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 30rpx;
		border-radius: 0rpx;
		width: 30%;
		height: 100%;
		line-height: 100rpx;
	}

	.nav_cart {
		width: 13%;
		background-color: #999999;
		border-radius: 0 34% 34% 0;
		padding-right: 10rpx;
	}

	.line_nav {
		width: 27%;
		height: 100%;
		display: flex;
	}

	.navFlex {
		width: 50%;
		height: 100%;
	}

	.nav-icon {
		height: 30%;
		position: relative;
		top: -5rpx;
	}

	.nav-text {
		height: 70%;
		line-height: 70%;
		margin: 0;
		position: relative;
		top: -20rpx;
		text-align: center;
	}

	.table {
		border: 0px solid darkgray;
	}

	.table .tr {
		display: flex;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		justify-content: center;
	}

	.td {
		width: 40%;
		padding-left: 10rpx;
		vertical-align: middle;
	}
	.br{
		border-right: 1rpx solid #CCCCCC;
	}

	.bg_1{
		background-color: #F5F5F5;
		border:1rpx #cccccc solid;
	}
	.bg_3{
		background-color: #F5F5F5;
		border:1rpx #cccccc solid;
	}
</style>
