<template>
	<view class="content">
		<view class='left'>
			<view v-for="(item,index) in cateList" :key='item.id'>
				<view @click="swichNav(item.id)" >
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="right">
			<view v-for='(list,index) in categoryList' :key='index' class="right-item">
				<view class="right-name">
					<text class="right-title">{{list.calssName.name}}</text>
				</view>
				<view class="right-list-item">
					<view v-for="(rightListData,index) in list.classGroup" :key="rightListData.id" class="right-view">
						<image :src="url+rightListData.class_photo" @click="skip(rightListData.id)" class="right-photo"/>
						<text class="right-list-name">{{rightListData.name}}</text>
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
				cateList:require('../../static/data/category_list.json'),
				categoryList:[],
			}
		},
		methods:{
			swichNav(index){
				this.categoryList=require("../../static/data/category_list_"+index+".json")
			},
			skip(id){
				if(id=='480'){
					// console.log(id)
					uni.navigateTo({url:"../details/Week"})
			 	}
			 }
		}
	}
</script>

<style>
	.content{
			display: flex;
			flex-direction: row;
			font-family: "Microsoft YaHei"
		}
	
		.left {
			width: 25%;
			font-size: 30rpx;
			background-color: #f4f4f4;
		}
	
		.left view {
			text-align: center;
			height: 120rpx;
			line-height: 120rpx;
		}
		
		.right {
			width: 74%;
			margin: 20;
		}
		.selected {
			background-color: #fff;
			border-left: 2px solid #E54847;
			font-weight: bold;
			color: #E54847;
		}
	
		.normal {
			background-color: #f4f4f4;
			border-bottom: 1px solid #f2f2f2;
		}
	
		.right-item {
			box-shadow: 5px 5px 5px gainsboro;
			margin-top: 10px;
			margin-bottom: 20px;
		}
	
		.right-name {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 10px;
	
		}
	
		.right-title {
			font-weight: 700;
		}
	
		.right-list-item {
			flex-wrap: wrap;
			display: flex;
		}
	
		.right-view {
			width: 33%;
			text-align: center;
		}
	
		.right-photo {
			width: 70px;
			height: 70px;
			display: block;
		}
	
		.right-list-name {
			font-size: 12px;
	
		}
</style>
