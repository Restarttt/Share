<template>
	<view class="page-small">
		<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg" :isBack="true">
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
				<view class="bg-green radius padding margin text-center">
					<text class="letter">分享至群聊获取收益</text>
				</view>
			</view>
		</view>
		<!-- 更多-->
		<view class="margin sus">
			<view class="text-center more text-center">
				<view class="padding text-df bg-white">更多邀请方式</view>
				<view class="solid-top more-line"></view>
			</view>
			<view class="cu-list grid col-3 no-border">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<!-- <view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view> -->
					</view>
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
					cuIcon: 'share',
					color: 'red',
					badge: 120,
					name: '小程序链接'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '朋友圈'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
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
		width: 40vw;
		height: 15vw;
		background-color: #fff;

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
