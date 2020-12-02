<template>
    <view>
		<view class="nav-top">
			<text>新鲜品尝</text>
		</view>
		<view class="float">
				<input class="uni-input" focus placeholder="search" />
				<uni-icons type="search" size="20" class="iocns"></uni-icons>
		</view>
		<text class="nav-text2">每周上新</text>
        <view class="week-nav">
			<text class="week" @click="openWeekList">综合</text>
			<text class="week" @click="salesSort">销量</text>
			<text class="week" >价格</text>
        </view>
		<view class="icons1">
			<uni-icons type="arrowdown" size="15" class="icons2" @click="priceSortDown"></uni-icons>
			<uni-icons type="arrowup" size="15" class="icons3" @click="priceSortUp"></uni-icons>
		</view>
		<view class="content">
			<view v-for="(item,index) in weekList" :key="index" class="content-list" >
				<view style="width: 30%;">
					<image :src="url+item.photo" class="image"/>
				</view>
				<view style="width: 70%;">
					<text class="title">{{item.product_name}}</text>
					<view class="volume"><text>{{item.volume}}</text></view>
					<view class="content_right_3">
						<text class="price">￥{{item.price}}</text>
						<text style="color: white;background-color: orange;">明日达</text>
						<uni-icons type="plus" size="20" color="red"  @click="addCart(item.photo,item.product_name,item.price)" ></uni-icons>
					</view>
				</view>
			</view>
		</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				url:'../../static/',
				weekList:require('../../static/data/sub_category_list_480.json')[0].productGroup,
				cartData: []
            }
        },
		onLoad(){ },
		 methods: {
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
			 openWeekList(){
				this.weekList.sort((a,b)=>{
					return a.id-b.id
				})
			 },
			 salesSort(){
				this.weekList.sort((a,b)=>{
					return a.sales-b.sales
				})
			},
			priceSortDown(){
				this.weekList.sort((a,b)=>{
					return b.price-a.price
				})
			},
			 priceSortUp(){
			 	this.weekList.sort((a,b)=>{
			 		return a.price-b.price
			 	})
			 }
		}
        
    }
</script>

<style>
	.nav-top{
		width: 100%;
		border-bottom: 1rpx solid #C0C0C0;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}
	.nav-text2{
		color: #4CAF50;
		border-bottom: #4CAF50 3rpx solid;
		padding: 20rpx;
		clear: both;
	}
	.float{
		float: right;
		display:flex;
		width: 200rpx;
		justify-content: center;
		align-items: center;
		position: relative;
		top: -70rpx;
	}
	.uni-input{width: 180rpx;}
	.week-nav{
		margin-top: 25rpx;
		height: 80rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #F5F5F5;
	}
	.icons1{
		float: right;
		display: block;
		position: relative;
		top: -62rpx;
		left: -15rpx;
	}
	.icons2{
		position: relative;
		top: 10rpx;
	}
	.icons3{
		position: relative;
		top: -10rpx;
		left: -36rpx;
	}
	.content{
		clear: both;
	}
	.content-list{
		height: 310rpx;
		display: flex;
	}
	.image{
		width: 100%;
		height: 300rpx;
	}
	.title{
		font-size: 40rpx;
		color: #C0C0C0;
	}
	.volume{
		margin-top: 80rpx;
	}
	.content_right_3{
		display: flex;
		justify-content: space-around;
	}
	.price{
		width: 30%;
		color: red;
	}
	
</style>