<template>
	<view class="page-small">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">收款方式</block>
		</cu-custom>
		<!-- 未填信息页面 -->
		<view class="margin-top cu-list.card-menu">
			<view class="flex justify-between margin-top padding margin">
				<button class="cu-btn  lg bg-color text-white shadow ">
					<text class="cuIcon-weixin text-pink icon padding-right-xs"></text>微信提现</button>
				<button class="cu-btn  lg line-grey shadow "><text
						class="cuIcon-emojiflashfill text-pink icon padding-right-xs"></text>支付宝</button>
			</view>
			<view class="form">
				<form>
					<view class="cu-form-group margin-top-xl border-rd">
						<view class="title padding-left-xs">姓名</view>
						<input placeholder="请填正确真实姓名" name="input"></input>
					</view>
					<view class="cu-form-group margin-top-xl border-rd">
						<view class="title padding-left-xs">手机号</view>
						<input placeholder=".." name="input" type="number"></input>
					</view>
				</form>
			</view>
			<view class="padding flex justify-center">
				<button class="cu-btn  bg-color lg shadow text-white">保存</button>
			</view>
			<!-- 须知 -->
			<view class="know margin-top-xl">
				<view class="cu-bar">
					<view class="action">
						<text class="cuIcon-titles text-green"></text>
						<text class="text-x text-bold bg">提现须知</text>
					</view>
				</view>
				<view class="action padding-sm bg" v-for="(item,index) in text_list" :key="index">
					<text class="cuIcon-title text-blue"></text>
					<text class='padding text-sm'>{{item.title}}</text>
				</view>
			</view>
			<!-- 已填信息页面 -->
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				text_list: [{
					title: '请确保您填写的信息与提现账户一致， 如因填写账户信息错误而导致的提现失败， 扣除金额将不予返还。'
				}, {
					title: '微信提现用户请确保微信绑定账号与填写手机号一致'
				}]
			}
		}
	}
</script>

<style>
	.cu-form-group {
		min-height: 80rpx;
		border: 1rpx solid #eee;
	}

	.cu-form-group+.cu-form-group {
		border-top: 1rpx solid #eee;
	}


	.bg {
		letter-spacing: 4upx;
	}

	.border-rd {
		border-radius: 13upx;
	}

	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
