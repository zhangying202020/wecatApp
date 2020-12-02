<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" scroll-x="true">
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" :class="{'active' : tabIndex==index}" @tap="tabtap(index)">
					{{tab.name}} {{tab.num?tab.num:""}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			scrollStyle: {
				type: String,
				default: ""
			},
			scrollItemStyle: {
				type: String,
				default: ""
			}
		},
		// fruitjson: require('../../static/data/sub_category_list_0.json')
		methods: {
			//点击切换导航
			tabtap(index) {
				// this.tabIndex = index;
				this.$emit('tabtap', index)
			}
		},
	}
</script>

<style>
	.uni-swiper-tab {
		height: 70rpx;
		white-space: nowrap;
	}

	.swiper-tab-list {
		color: #969696;
		font-weight: 500;
		display: inline-block;
		width: 20%;
		text-align: center;
		font-size: 13px;
		overflow-wrap: break-word;
		white-space: nowrap;
	}
	.uni-tab-bar {
		
	}
	.uni-tab-bar .active {
		color: #4CD964;
	}
	.active .swiper-tab-line {
		border-bottom: 6upx solid #4CD964;
		width: 120upx;
		margin: auto;
		border-top: 6upx solid #4CD964;
		border-radius: 20upx;
	}
</style>
