<template>
	<!-- 商品列表 -->
	<view class="pd-20 goods-list">
		<view style="background-color: #F5F5F5;height: 40px;line-height: 40px;">
			<text style="color: #C0C0C0;padding-left: 15px;">商品清单</text>
		</view>
		<view class="tis" v-if="goodsList.length==0">购物车是空的哦~</view>
		<view class="my-10 pd-20 row">
			<!-- 企业商品列表 -->
			<view class="firm-goods-list" v-for="(goods, index) in goodsList" :key="index">
				<view class="">
					<checkbox color="red" :checked="goods.selected" @click="selectedSole(index, i)" />
				</view>
				<image class="goods-img" :src="'../../static/'+goods.src"></image>
				<view class="right-goods-box">
					<view class="goods-name">{{goods.title}}</view>
					<view class="price-number-box">
						<view class="red-price">￥{{goods.price}}</view>
						<view class="number-box">
							<text class="number-sub" @click="sub(index)" data-index="index">-</text>
							<text class="number-num">{{goods.num}}</text>
							<text class="number-add" @click="add(index)" data-index="index">+</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 脚部菜单 -->
		<view class="pd-20 footer">
			<view class="check-box">
				<checkbox color="red" :checked="isSelectedAllRow" @click="selectedAllRow">全选</checkbox>
			</view>
			<view class="goods-remove" v-if="totalCount" @click="removeGoodsEvent">删除</view>
			<view class="right-box">
				<text class="total-cost">总价格<text class="red-price">￥{{sumPrice}}</text></text>
				<text class="account" @click="pay">结算<text v-if="totalCount">({{totalCount}})</text></text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				goodsList: [],
				isSelectedAllRow: false, // 全选所有商品
				selectedAllRowList: [],
				totalCount: 0,
				sumPrice: 0.00, // 总价格
			}
		},
		onLoad() {this.goodsList = JSON.parse(uni.getStorageSync("cartData"))},
		methods: {
			sub(index) {
				if (this.goodsList[index].num <= 1) {
					return
				}
				this.goodsList[index].num--
				this.sumTotalPrice()
				uni.setStorageSync("cartData", JSON.stringify(this.goodsList))
			},
			add(index) {
				this.goodsList[index].num++
				this.sumTotalPrice()
				uni.setStorageSync("cartData", JSON.stringify(this.goodsList))
			},
			// 选择单个商品 m 
			selectedSole(m) {
				this.goodsList[m].selected = !this.goodsList[m].selected
				// 循环设置父全选 如果全部选中  则父全选选中 否则 不选中
				for (let i = 0; i < this.goodsList.length; i++) {
					if (this.goodsList[m].selected) {
						this.goodsList[m].selectedAll = true
					} else {
						this.goodsList[m].selectedAll = false
						break
					}
				}
				this.computeSelectedAll()
				this.sumTotalPrice()
			},
			// 全选所有行
			selectedAllRow() {
				this.isSelectedAllRow = this.goodsList.length?!this.isSelectedAllRow : false
				for (let i = 0; i < this.goodsList.length; i++) {
					if(this.isSelectedAllRow){
						this.goodsList[i].selected=true
						this.sumPrice = 0
						this.totalCount = 0
						for (let i = 0; i < this.goodsList.length; i++) {
							this.sumPrice += this.goodsList[i].price * this.goodsList[i].num
							this.totalCount += this.goodsList[i].num
						}
						this.sumPrice = this.sumPrice.toFixed(2)
					}else{
						this.goodsList[i].selected=false
						this.sumPrice=0
						this.totalCount=0
					}
				}
			},
			// 判断全部商品选择
			computeSelectedAll() {
				for (let i = 0; i < this.goodsList.length; i++) {
					if (this.goodsList[i].selectedAll) {
						this.isSelectedAllRow = true
					} else {
						this.isSelectedAllRow = false
						break
					}
				}
				this.sumTotalPrice()
			},
			// 合计总价格
			getSelectedInfoList() {
				let len = this.goodsList.length
				this.selectedAllRowList = []
				for (let i = 0; i < len; i++) {
					if (this.goodsList[i].selectedAll) {
						this.selectedAllRowList.push(this.goodsList[i])
					}
				}
			},
			sumTotalPrice() {
				this.getSelectedInfoList()
				this.sumPrice = 0
				this.totalCount = 0
				for (let i = 0; i < this.selectedAllRowList.length; i++) {
					this.sumPrice += this.selectedAllRowList[i].price * this.selectedAllRowList[i].num
					this.totalCount += this.selectedAllRowList[i].num
				}
				this.sumPrice = this.sumPrice.toFixed(2)
			},
			// 结算
			pay() {
				if (this.totalCount == 0) {
					uni.showToast({
						icon: 'none',
						title: '您还没有选择宝贝哦!'
					});
				} else {
					// console.log("结算成功")
					// uni.navigateTo({ url: 'order' });
				}
			},
			// 删除数据从对象中
			removeGoodsEvent() {
				for (let i = 0; i < this.goodsList.length; i++) {
					if (this.goodsList[i].selected == true) {
						this.goodsList.splice(i, 1);
						i--;
					}
					if (this.goodsList.length <= 0) {
						this.selectedAll = false;
					}
					uni.setStorageSync("cartData", JSON.stringify(this.goodsList))
				};
			},
		// 将商品移出购物出
		// 	removeGoodsEvent() {
		// 		uni.showLoading()
		// 		// 请求接口写在此位置
		// 		this.deleteDataFromObj()
		// 		setTimeout(function() {
		// 			uni.hideLoading()
		// 		}, 800)
		// 	}
		}
	}
</script>
<style lang="scss" scoped>
	/deep/checkbox .wx-checkbox-input,
	/deep/uni-checkbox .uni-checkbox-input {
		border-radius: 50% !important;
		height: 42rpx;
		width: 42rpx;
		margin-top: -8rpx;
		vertical-align: middle;
	}

	/deep/uni-checkbox .uni-checkbox-input,
	/deep/uni-checkbox .wx-checkbox-input {
		border-color: #d1d1d1;
	}

	/deep/uni-checkbox:not([disabled]) .uni-checkbox-input,
	/deep/uni-checkbox:not([disabled]) .uni-checkbox-input:hover,
	/deep/checkbox:not([disabled]) .wx-checkbox-input,
	/deep/checkbox:not([disabled]) .wx-checkbox-input:hover {
		border-color: #d1d1d1;
	}

	/deep/uni-checkbox:not([disabled]) .uni-checkbox-input.uni-checkbox-input-checked:hover,
	/deep/checkbox:not([disabled]) .wx-checkbox-input.uni-checkbox-input-checked:hover {
		border-color: red;
	}

	/deep/uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked,
	/deep/checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		border-color: #8a17c6;
	}

	/deep/uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before,
	/deep/checkbox .wx-checkbox-input.wx-checkbox-input-checked:before {
		font-size: 28rpx;
	}

	.red-price {
		color: #F0250F;
		font-size: 40rpx;
	}

	.goods-list {
		font-size: 28rpx;

		.row {
			border-radius: 20rpx;
			box-shadow: 0rpx 5rpx 20rpx rgba(#000, .1);
			margin-bottom: 120rpx;

			.top-firm-info {
				display: flex;
				height: 60rpx;
				line-height: 60rpx;

				.firm-box {
					margin-left: 10rpx;

					.firm-name {
						font-weight: 600;
					}
				}
			}

			.firm-goods-list {
				display: flex;
				align-items: center;
				padding: 10rpx 0 10rpx 10rpx;
				border-bottom: 1rpx solid #ccc;
				.goods-img {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}


				.right-goods-box {
					flex: 1;
					margin-left: 20rpx;

					.goods-name {
						font-size: 40rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						line-height: 40rpx;
						margin-bottom: 40rpx;
					}

					.goods-spec {
						.text {
							padding: 0 10rpx;
							border-radius: 10rpx;
							background-color: #f3f3f3;
							color: #a7a7a7;
						}
					}

					.price-number-box {
						display: flex;
						line-height: 46rpx;
						justify-content: space-between;

						.number-box {
							margin-right: 20rpx;

							.number-sub,
							.number-num,
							.number-add {
								display: inline-block;
								min-width: 40rpx;
								text-align: center;
								border: 2rpx solid #ccc;
							}

							.number-sub {}

							.number-num {
								min-width: 60rpx;
								border-left-style: none;
								border-right-style: none;
							}

							.number-add {}
						}
					}
				}
			}
		}
	}


	.footer {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 120rpx;
		line-height: 120rpx;
		display: flex;
		justify-content: space-between;
		background: white;

		// background-color: green;
		.goods-remove {
			border: solid 2rpx #f06c7a;
			color: #f06c7a;
			padding: 0 30upx;
			height: 50upx;
			border-radius: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 35rpx;
		}

		.check-box {
			margin-left: 30rpx;
		}

		.right-box {
			.total-cost {}

			.account {
				display: inline-block;
				margin-left: 20rpx;
				padding: 0 10rpx;
				min-width: 140rpx;
				text-align: center;
				font-size: 40rpx;
				color: #fff;
				background-color: #ff3300;
			}
		}
	}
</style>
