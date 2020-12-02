<template>
	<view>
		<view class="nav-top">
			<text>新鲜水果</text>
		</view>
		<view class="search">
			<input class="uni-input" focus placeholder="search" />
			<uni-icons type="search" size="20" class="iocns"></uni-icons>
		</view>
		<swiperTab :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" class='clear'></swiperTab>
		<view class="uni-tab-bar1">
			<scroll-view scroll-x="true" class="uni-swiper-tab1">
				<block v-for="(tabBar,index) in tabNavBars" :key="index">
					<view class="swiper-tab-list1" :class="{'active': tabNavIndex==index}" @tap="toggleTab(index)">
						{{tabBar.name}}
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="icons1">
			<uni-icons type="arrowdown" size="15" class="icons2" color='#ccc' @click="priceSortDown"></uni-icons>
			<uni-icons type="arrowup" size="15" class="icons3" color='#ccc' @click="priceSortUp"></uni-icons>
		</view>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in fruitsList" :key="index">
					<scroll-view scroll-y="true" @scroll="scroll" style="height: 100%;">
						<template>
							<block v-for="(item,index1) in items.productGroup" :key="index1">
								<view class="content-item">
									<view>
										<image :src='url+item.photo' class="swiper-item-photo"></image>
									</view>
									<view class="swiper-item-text">
										<text class="text-product_name">{{item.product_name}}</text>
										<text class="text-product_desc">{{item.product_desc}}</text>
										<text class="text-volume">{{item.volume}}</text>
										<view class="text-image-item">
											<text class="text-money">￥</text>
											<text class="text-price">{{item.price}}</text>
											<text class="arrival-time">明日达</text>
											<image src="../../static/images/cart.png" class="item-img" @click="addCart(item.photo,item.product_name,item.price)" ></image>
										</view>
									</view>
								</view>
							</block>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	import swiperTab from '@/pages/src/module.vue'
	export default {
		components: {
			swiperTab
		},
		data() {
			return {
				url: '../../static/',
				fruitsList: require('../../static/data/sub_category_list_0.json'),
				tabBars: [{
						name: "全部",
						id: "all"
					},
					{
						name: "奇异果",
						id: "kiwi"
					},
					{
						name: "苹果",
						id: "applie"
					},
					{
						name: "橙柑橘柚",
						id: "orange"
					},
					{
						name: "樱桃",
						id: "cherry"
					},
					{
						name: "梨",
						id: "pear"
					},
					{
						name: "牛油果",
						id: "avocado"
					},
					{
						name: "热带水果",
						id: "tropical"
					},
				],
				tabNavBars: [{
						name: '综合',
						id: 'composite'
					},
					{
						name: '销量',
						id: 'sales'
					},
					{
						name: '价格',
						id: 'price'
					}
				],
				tabNavIndex: 0,
				tabIndex: 0, // 选中的
				swiperheight: 1000, //高度
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				cartData: [],
			}
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index;
			},
			// 排序
			toggleTab(index) {
				this.tabNavIndex = index;
				if (index == 0) {
					this.fruitsList[0].productGroup.sort((a, b) => {
						return a.id - b.id
					})
				}
				if (index == 1) {
					this.fruitsList[0].productGroup.sort((a, b) => {
						return a.sales - b.sales
					})
				}
			},
			priceSortDown() {
				this.fruitsList[0].productGroup.sort((a, b) => {
					return b.price - a.price
				})
			},
			priceSortUp() {
				this.fruitsList[0].productGroup.sort((a, b) => {
					return a.price - b.price
				})
			},
			//滑动切换导航
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
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
					}
				}
				// 进行本地储存；
				uni.setStorageSync("cartData", JSON.stringify(this.cartData))
				console.log("保存", JSON.stringify(uni.getStorageSync("cartData")))
			},
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height;
				}
			})
		},
	}
</script>

<style>
	.nav-top {
		width: 100%;
		border-bottom: 1rpx solid #C0C0C0;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.search {
		float: right;
		display: flex;
		width: 200rpx;
		justify-content: center;
		align-items: center;
		position: relative;
		top: -70rpx;
	}

	.uni-input {
		width: 180rpx;
	}

	/* 第二部分 */
	.clear {
		clear: both;
		height: 60rpx;
		position: relative;
		top: -50rpx;
	}

	.swiper-tab-list1 {
		color: #343434;
		font-weight: bolder;
		display: inline-block;
		width: 33.33%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 14px;
		background-color: #F5F5F5;
	}

	.uni-tab-bar1 .active {
		color: #4CD964;
	}

	.icons1 {
		float: right;
		display: block;
		position: relative;
		top: -64rpx;
		left: -20rpx;
	}

	.icons2 {
		position: relative;
		top: 10rpx;
	}

	.icons3 {
		position: relative;
		top: -10rpx;
		left: -36rpx;
	}

	/* 内容 */
	.content-view {}

	.content-item {
		border-bottom: #C0C0C0 1rpx solid;
		display: flex;

		flex-direction: row;
	}

	.swiper-item-photo {
		width: 100px;
		height: 100px;
	}

	.swiper-item-text {
		margin-left: 20rpx;
		margin-top: 5px;
	}

	.text-product_name {
		color: #808080;
		font-size: 14px;
		display: block;
	}

	.text-product_desc {
		color: #C0C0C0;
		font-size: 11px;
		display: block;
		margin-top: 3px;
		margin-bottom: 10px;
	}

	.text-volume {
		color: roange;
		font-size: 11px;
		display: block;
		margin-bottom: 5px;
	}

	.text-image-item {
		height: 30px;
		display: flex;
		align-items: center;
	}

	.arrival-time {
		font-size: 14px;
		background-color: #FF8000;
		color: #EEEEEE;
		border-radius: 2px;
	}

	.text-price {
		color: orange;
		margin-right: 10px;
		width: 60px;
	}

	.text-money {
		color: orange;
		font-size: 10px;
	}

	.item-img {
		width: 30px;
		height: 30px;
		position: absolute;
		right: 10px;
	}
</style>
