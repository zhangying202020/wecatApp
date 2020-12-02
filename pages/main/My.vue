<template>
	<view class="content">
		<view class="mytop">
			<view style="display: flex;align-items: center;margin-left: 10px; padding-top: 10px;">
				<image src="../../static/images/xiaotian.png" style="width: 50px;height: 50px;margin-right: 10px;"></image>
				<view>
					<text style=" font-weight: 600;font-size: 22px;">登录/注册</text>
					<view class="bg">
						<text style="font-size: 14px;border-radius: 5px;color: white;padding: 5rpx;">签到送好礼</text>
					</view>
				</view>
				<view class="code">
					<image src="../../static/images/ali/erweima.png" class="erweima"></image>
				</view>
			</view>
			<view style="justify-content: center;align-items: center;display: flex;margin-top: 40px;">
				<view class="mytop-text">
					<text class="mytop-view-text">积分</text>
					<text>-</text>
				</view>
				<view class="mytop-text">
					<text class="mytop-view-text">资产.充值</text>
					<text>-</text>
				</view>
				<view class="mytop-text">
					<text class="mytop-view-text">优惠券</text>
					<text>-</text>
				</view>
				<view class="mytop-text">
					<text class="mytop-view-text">礼品</text>
					<text>-</text>
				</view>
			</view>
		</view>
		<view class="middle">
			<view style="display: flex;">
				<view style="margin-left: 10px;">
					<text style="font-size: 15px;">我的订单</text>
				</view>
				<view style="position: absolute;right: 15px;">
					<text style="font-size: 14px; font-weight: 550;">我的订单 ></text>
				</view>
			</view>
			<view class="middle-view">
				<view class="middle-view-item">
					<image src='../../static/images/ali/Card-.png' class="middle-view-img"></image>
					<text class="middle-view-text">待付款</text>
				</view>
				<view class="middle-view-item">
					<image src="../../static/images/ali/daifahuo.png" class="middle-view-img"></image>
					<text class="middle-view-text">待发货</text>
				</view>
				<view class="middle-view-item">
					<image src="../../static/images/ali/daishouhuo.png" class="middle-view-img"></image>
					<text class="middle-view-text">待收货</text>
				</view>
				<view class="middle-view-item">
					<image src="../../static/images/ali/daipingjia.png" class="middle-view-img"></image>
					<text class="middle-view-text">待评价</text>
				</view>
				<view class="middle-view-item">
					<image src="../../static/images/ali/tuihuanhuo.png" class="middle-view-img"></image>
					<text class="middle-view-text">退换货</text>
				</view>
			</view>
		</view>
		<view class="middle">
			<view style="display: flex;">
				<view style="margin-left: 10px;">
					<text style="font-size: 15px;">充值有礼</text>
				</view>
				<view style="position: absolute;right: 15px;">
					<text style="font-size: 14px; font-weight: 550;">充值中心 ></text>
				</view>
			</view>
			<view class="middle-view-view-item">
				<view style="padding-top: 10px;">
					<text style="font-size: 10px; font-weight: 600;">￥</text>
					<text style="font-size:20px ;font-weight: 600;">2000</text>
				</view>
				<text style="font-size: 10px;color: #FF8000;">送价值89.90元赠品</text>
			</view>
		</view>
		<view class="middle-view" >
			<view class="middle-view-item">
				<image src='../../static/images/ali/huiyuan.png' class="middle-view-img"></image>
				<text class="middle-view-text">会员中心</text>
			</view>
			<view class="middle-view-item">
				<image src="../../static/images/ali/zhibo.png" class="middle-view-img"></image>
				<text class="middle-view-text">直播间</text>
			</view>
			<view class="middle-view-item">
				<image src="../../static/images/ali/kaquan.png" class="middle-view-img"></image>
				<text class="middle-view-text">卡卷中心</text>
			</view>
			<view class="middle-view-item">
				<image src="../../static/images/ali/qiyegou.png" class="middle-view-img"></image>
				<text class="middle-view-text">企业购</text>
			</view>
			<view class="middle-view-item">
				<image src="../../static/images/ali/kefu.png" class="middle-view-img"></image>
				<text class="middle-view-text">在线客服</text>
			</view>
			<view class="middle-view-item">
				<image src="../../static/images/ali/wenda.png" class="middle-view-img"></image>
				<text class="middle-view-text">我的问答</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.content {
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 10px;
	}

	.mytop {
		height: 160px;
		background-color: #EEEEEE;
		border-radius: 10px;
		margin-bottom: 15px;
	}

	.mytop-text {
		text-align: center;
		margin-left: 20px;
		margin-right: 20px;
	}

	.mytop-view-text {
		display: block;
		font-size: 12px;
	}
	.bg{
		width: 80px;
		background-color: #F0AD4E;
		height: 50rpx;
		text-align: center;
		border-radius: 10px;
		padding-bottom: 3rpx;
	}
	.code{
		width: 50px;
		height: 40px; 
		text-align: center;
		position: absolute;
		right: 10px;
		background-color: #CCCCCC;
		border-radius: 20px 0 0 20px;
	}
	.erweima{
		width: 30px;
		height: 30px;
		margin-top: 5px;
	}
	.middle {
		height: 140px;
		box-shadow: 5px 0px 10px gainsboro;
		padding-top: 15px;
		border-radius: 10px;
		margin-bottom: 15px;
	}

	.middle-view {
		display: flex;
		margin-top: 20px;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		flex-wrap: wrap;
	}
    .middle-view-item{
		margin-left: 16px;
		/* margin-right: 10px; */
		margin-bottom: 10px;
	}
	.middle-view-img {
		width: 25px;
		height: 25px;
		display: block;
		margin: auto;
	}

	.middle-view-text {
		font-size: 12px;
	}

	.middle-view-view-item {
		width: 160px;
		height: 80px;
		background-color: #CCCCCC;
		border-radius: 5px;
		padding-left: 10px;
		margin-top: 10px;
		margin-left: 10px;
	}
</style>
