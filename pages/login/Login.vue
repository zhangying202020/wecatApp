<template>
    <view>
        <view>
            <form >
                <view class="uni-form-item uni-column" >
					<uni-icons type="phone" size="30"></uni-icons>
                    <input class="uni-input" name="input" placeholder="手机号" />
                </view>
				<view class="uni-form-item uni-column" >
					<uni-icons type="chat" size="30"></uni-icons>
				    <input class="uni-input" name="input1" placeholder="短信验证码" />
				</view>
				<view class="uni-text">
					 <text class="text">首次用手机号登陆将自动为您注册,并有豪礼相送</text>
                </view>
				<view class="uni-btn-v">
					<navigator url="/pages/main/Homepage" open-type="switchTab" hover-class="other-navigator-hover">
						<button  @click="sub">登陆</button>
					</navigator>
                </view>
				<view class="uni-btm">
				    <text class="textT">账号密码登陆</text>
				    <text class="textT">未收到验证</text>
				</view>
            </form>
        </view>
    </view>
</template>
<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
    export default {
		components: {uniIcons},
        data() {
            return {
				formdata:{
					input:'',
					input1:'',
				}
            }
        },
        methods: {
			sub(){
				// console.log('*******')
			}
     //        formSubmit: function(e) {
     //            console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
     //            var formdata = e.detail.value
     //            uni.showModal({
     //                // content: '表单数据内容：' + JSON.stringify(formdata),
     //                // showCancel: false,
					// // uni.navigateTo({url:'pages/index/index'})
     //            });
     //        },
     //        formReset: function(e) {
     //            console.log('清空数据')
     //        }
        }
    }
</script>

<style>
    .uni-form-item .title {
        padding: 20rpx 0;
		margin-right: 20rpx;
    }
	.uni-column{
		display: flex;
		align-items: center;
		border-bottom: #999999 solid 1rpx;
		padding: 20rpx;
	}
	.uni-input{margin-left: 10rpx;}
	.uni-text{color:#999999;font-size: 33rpx;padding-top: 30rpx;padding-bottom: 60rpx;}
	.uni-btm{display: flex;justify-content: space-around;margin: 20rpx;}
	.textT{font-size:33rpx;color: #DD524D;}
</style>