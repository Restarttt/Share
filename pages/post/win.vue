<template>
	<view class="page-small">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">创建成功</block>
		</cu-custom>
		<view class="sus">
			<view class="flex-sub text-center">
				<view class="text-sl padding">
					<text class=" cuIcon-roundcheckfill text-green"></text>
				</view>
				<view class="padding">
					<text class="text-black text-bold text-xl ">[有分享，就会有收获]已经创建</text>
				</view>
				<view class="padding">你可以分享到微信群，获取收益</view>
				<view class="padding flex flex-direction">
					<button class="cu-btn bg-green margin-tb-sm lg letter">分享至群聊获取收益</button>
				</view>
			</view>
		</view>
		<!-- 更多-->
		<view class="margin sus">
			<view class="text-center more ">
				<view class="padding flex justify-center align-center">
					<view class="bg-gray more-width text-df"> 更多邀请方式</view>
				</view>
				<view class="solid-top more-line"></view>
			</view>
			<view class="cu-list grid col-3 no-border">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]"></view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="text-center text-blue">

			广告位

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList: [{
					cuIcon: 'forwardfill',
					color: 'red',
					name: '小程序链接'
				}, {
					cuIcon: 'emojiflashfill',
					color: 'orange',
					name: '朋友圈'
				}, {
					cuIcon: 'friendfill',
					color: 'yellow',
					name: '微信群'
				}]

			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
		}
	}
</script>

<style>
	.letter {
		letter-spacing: 10upx;
	}

	.more {
		position: relative;
	}

	.more-width {
		width: 34vw;
		height: 7vw;
		background-color: #fff;
		z-index:1;
	}

	.more-line {
		position: absolute;
		top: 50rpx;
		width: 95vw;
		height: 2rpx;
	}

	.sus {
		margin-top: 70upx;
	}
</style>
