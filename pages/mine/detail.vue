<template>
	<view class="page-small">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">收益明细</block>
		</cu-custom>
		<!-- 用户信息 -->
		<view class="cu-list menu-avatar card-menu margin-top">
			<view class="cu-item">
				<view class="content">
					<view class="text-white">您目前累计收益</view>
					<view class="text-white">3333</view>
				</view>
				<view class="padding flex flex-wrap justify-between align-center text-color">
					<button class="cu-btn round bg-yellow shadow">刷新</button>
				</view>
			</view>
			<view class="bg-gray flex padding justify-between shadow">
				<view class="text-lg padding" v-for="(item,index) in time_list" :key='index'>
					<view class="padding margin-bottom-sm">{{item.title}}</view>
					<view class="text-bold">{{item.num}}</view>
				</view>
			</view>
		</view>
		<!-- 收益明细 -->
		<view class="margin-top-xxxl margin">
			<view class="text-xl padding text-center text-bold margin-bottom-sm">
				收益明细
			</view>
			<view v-for="(item,index) in list" :key="index" class="list">
				<view class="flex justify-between margin-top text-blu text-xl">
					<view class="content">
						<text class="text-sm">{{item.time}}</text>
					</view>
					<view class="content">
						<text class="text-sm">{{item.title}}</text>
					</view>
					<view class="content">
						<text class="text-sm">{{item.num}}元</text>
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
				time_list: [{
						title: '今日',
						num: 22
					},
					{
						title: '本周',
						num: 22.2
					},
					{
						title: '累计',
						num: 22
					},
				],
				list: [{
						title: '奖励',
						time: "2021-10-10",
						num: "300"
					},
					{
						title: '奖励',
						time: "2021-10-10",
						num: "300"
					},
				]

			};
		},

	}
</script>

<style>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}

	.cu-list.menu-avatar>.cu-item {
		height: 13vh;
		background-color: #6d71fe;
	}

	.cu-list.menu-avatar>.cu-item .content {
		left: 10vw;
		line-height: 2.2em;
	}

	.padding {
		padding: 13upx 18upx;
	}
	.margin{
		margin: 30rpx;
	}

	.text-bold {
		text-align: center;
	}
</style>
