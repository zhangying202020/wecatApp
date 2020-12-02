<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in imgDataList" :key="index">
							<!-- 此处应该超链接 -->
							<image :src="'../../static/'+item" class="Limg"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="bigcontainer">
			<view class="container" @click="goToWeek">
				<image src="@/static/images/week.png" class="buttonimg"></image>
				<text>每周上新</text>
			</view>
			<view class="container">
				<image src="@/static/images/new.png" class="buttonimg"></image>
				<text>新客专享</text>
			</view>
			<view class="container">
				<image src="@/static/images/play.png" class="buttonimg"></image>
				<text>天天直播</text>
			</view>
			<view class="container">
				<image src="@/static/images/shake.png" class="buttonimg"></image>
				<text>摇一摇</text>
			</view>
			<view class="container">
				<image src="@/static/images/limit.png" class="buttonimg"></image>
				<text>限时特惠</text>
			</view>
			<view class="container">
				<image src="@/static/images/low.png" class="buttonimg"></image>
				<text>低温素食</text>
			</view>
			<view class="container">
				<image src="@/static/images/meat.png" class="buttonimg"></image>
				<text>品质肉禽</text>
			</view>
			<view class="container"  @click="goToFruits">
				<image src="@/static/images/fruit.png" class="buttonimg"></image>
				<text>新鲜水果</text>
			</view>
			<view class="container">
				<image src="@/static/images/gh.png" class="buttonimg"></image>
				<text>粮油干货</text>
			</view>
			<view class="container">
				<image src="@/static/images/water.png" class="buttonimg"></image>
				<text>生活饮水</text>
			</view>
			
		</view>
			<!-- <text>热销榜</text> -->
		<view class="crunchies">
			<image src="@/static/images/crunchies-hot.jpg" class="cruImage"></image>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H" v-for="item in hotSellList" :key="item.product_id">
					<image :src="'../../static/'+item.image" class="scroll-img" @click="todetail(item.product_id)"></image>
					<view style="font-size: 30rpx; font-weight: 600;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.subtitle}}</view>
					<view>{{item.title}}</view>
					<view style="font-size:30rpx;color: orange; display: flex; justify-content:space-around ;">
						<text>{{'￥'+item.guide_price+'/'+item.volume}}</text>
						<image src="@/static/images/cart.png" class="cartImage" @click="addCart(item.image,item.title,item.guide_price)"></image>
					</view>
				</view>
			</scroll-view>
		</view>
			<!-- <text>限时特惠</text> -->
		<view class="crunchies"><image src="@/static/images/crunchies-limit.jpg" class="cruImage"></image></view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H" v-for="item in limitList" :key="item.product_id">
					<image :src="'../../static/'+item.image" class="scroll-img" @click="todetail(item.product_id)"></image>
					<view style="font-size: 30rpx; font-weight: 600;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.subtitle}}</view>
					<view>{{item.title}}</view>
					<view style=" font-size:30rpx;color: orange; display: flex; justify-content:space-around ;">
						<text>{{'￥'+item.guide_price+'/'+item.volume}}</text>
						<image src="@/static/images/cart.png" class="cartImage" @click="addCart(item.image,item.title,item.guide_price)"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- <text>每周上新</text> -->
		<view class="crunchies"><image src="@/static/images/crunchies-week.jpg" class="cruImage"></image></view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H" v-for="item in newList" :key="item.product_id">
					<image :src="'../../static/'+item.image" class="scroll-img" @click="todetail(item.product_id)"></image>
					<view style="font-size: 30rpx; font-weight: 600;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.subtitle}}</view>
					<view>{{item.title}}</view>
					<view style=" font-size:30rpx;color: orange; display: flex; justify-content:space-around ;">
						<text>{{'￥'+item.guide_price+'/'+item.volume}}</text>
						<image src="@/static/images/cart.png" class="cartImage" @click="addCart(item.image,item.title,item.guide_price)"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- <text>时令水果</text> -->
		<view class="crunchies"><image src="@/static/images/crunchies-seasonal.jpg" class="cruImage"></image></view>
		<view  >
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H" v-for="item in timeFruitList" :key="item.product_id">
					<image :src="'../../static/'+item.image" class="scroll-img" @click="todetail(item.product_id)"></image>
					<view style="font-size: 30rpx; font-weight: 600;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.subtitle}}</view>
					<view>{{item.title}}</view>
					<view style="font-size:30rpx;color: orange; display: flex; justify-content:space-around ;">
						<text>{{'￥'+item.guide_price+'/'+item.volume}}</text>
						<image src="@/static/images/cart.png" class="cartImage" @click="addCart(item.image,item.title,item.guide_price)"></image>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import fruitdata from 'static/data/fruits.json'
	let app = getApp()
	export default {
		data() {
			return {
				//轮播图的数据
				imgDataList: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				// 热销版图标数据
				hotSellList: [],
				limitList: [],
				newList: [],
				timeFruitList: [],
				// 购物车本地存储数据
				cartData: []
			}
		},
		onLoad() {
			// console.log("全局数据")
			this.imgDataList = fruitdata.banners;
			this.hotSellList = fruitdata.bannerTags[0].content
			this.limitList = fruitdata.bannerTags[1].content
			this.newList = fruitdata.bannerTags[2].content
			this.timeFruitList = fruitdata.bannerTags[3].content
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			scroll: function(e) {
				// console.log(e)
				// this.old.scrollTop = e.detail.scrollTop
			},
			todetail(id) {
					// console.log("我是去明细页面的", id)
					uni.navigateTo({
						url: "../details/Product?id=" + JSON.stringify(id),
						success: () => {
							// console.log('成功去明细')
					}
				})
			},
			addCart(src, title, price) {
				let flag = true
				let obj = {
					src: src,
					title: title,
					price: price,
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
				// console.log("保存结果", JSON.stringify(uni.getStorageSync("cartData")))
			},
			goToWeek(){
				uni.navigateTo({
					url: "../details/Week",
					success: () => {
						// console.log('每周上新')
					}
				})
			},
			goToFruits(){
				uni.navigateTo({
					url: "../details/Fruits",
					success: () => {
						// console.log('新鲜水果')
		 			}
		 		})
		 	}
		}
	}
</script>

<style scoped>
	view {
		font-size: 20rpx;
	}

	.Limg {
		width: 730rpx;
		height: 320rpx;
		padding: 10rpx;
	}

	.bigcontainer {
		padding: 10rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.container {
		width: 125rpx;
		font-size: 28rpx;
	}

	.buttonimg {
		margin: auto;
		display: block;
		width: 75rpx;
		height: 75rpx;
	}
	/* 榜单图片 */
	.crunchies{height: 180rpx; }
	.cruImage{ height: 150rpx; }
	.cartImage{height: 60rpx;width: 60rpx;}
	.scroll-view_H {
		width: 100%;
		height: 350rpx;
		white-space: nowrap;
	},
	.scroll-view-item_H {
		display: inline-block;
		width: 34%;
		height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-img {
		width: 100%;
		height: 74%;
	}
</style>
