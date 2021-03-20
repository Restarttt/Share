<template>
	<view class="page-small">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">余额提现</block>
		</cu-custom>
		<!--可提现余额-->
		<view class="margin-top-xxxl">
			<view
				class="cu-item bg-color flex align-items padding justify-between cu-list menu-avatar card-menu margin-top">
				<view class="padding line">
					<view class="text-sm text-bold text-white">可提限金额</view>
					<view class="text-bold text-yellow text-xxl">{{moeny}}</view>
				</view>
				<view class="flex  align-center padding">
					<button class="cu-btn  bg-yellow shadow">刷新</button>
				</view>
			</view>
			<!-- 方式 -->
			<view class="way margin-top-xxxl">
				<view class="margin-top-xl">
					<view class="flex justify-between margin-top-xxxl padding margin">
						<button class="cu-btn  lg bg-color text-white shadow">
							<text class="cuIcon-emojiflashfill text-pink icon"></text>微信提现</button>
						<button class="cu-btn  lg line-grey shadow"><text
								class="cuIcon-emojiflashfill text-pink icon"></text>支付宝</button>
					</view>
				</view>
				<view class="pay flex justify-between align-items margin-top-xl">
					<view class="cu-form-group border-rd">
						<input placeholder="不低于10元" name="input" type="number"></input>
					</view>
					<button class="cu-btn lg bg-color shadow ">提交</button>
				</view>

			</view>
			<!-- 提现记录 -->
			<view class="way margin-top-xl">
				<view class=" text-x padding text-center text-bold margin-bottom-sm">
					提现记录
					<view class="padding solid-bottom"></view>
				</view>
				<view v-for="(item,index) in list" :key="index" class="list">
					<view class="flex justify-between margin-top text-blu text-xl">
						<view class="content">
							<text class="cuIcon-emojiflashfill text-pink icon margin-right-sm"></text>
							<text class="text-sm">{{item.pay}}</text>
						</view>
						<view class="content">
							<text class="text-sm">{{item.time}}</text>
						</view>
						<view class="content">
							<text class="text-sm">{{item.num}}元</text>
						</view>
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
				moeny: 100,
				list: [{
						pay: '微信',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						time: "2021-10-10",
						num: "300"
					},
					{
						pay: '支付宝',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						time: "2021-10-10",
						num: "300"
					},
				]
			}
		}
	}
</script>

<style>
	.cu-form-group {
		padding: 1rpx 65rpx;
		min-height: 0;
		border: 1px solid #CCCCCC;
		border-radius: 13rpx;
	}

	.padding {
		padding: 8upx 18upx;
	}

	.margin-top-xxxl {
		margin-top: 60upx;
	}

	.cu-list.card-menu {
		height: 11vh;
	}

	.way {
		margin-right: 30rpx;
		margin-left: 30rpx;
		border-radius: 20rpx;
	}

	.icon {
		padding-right: 15upx;
	}
	.line{
		line-height: 4vh;
	}
</style>
