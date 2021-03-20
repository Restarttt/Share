<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">分享页面</block>
		</cu-custom>
		<!-- 用户信息 -->
		<view class="margin-top-xl">


			<view class="menu-avatar card-menu  cu-list sm-border margin-top">
				<view class="cu-item share-padding">
					<view class="cu-avatar round lg"
						style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
					</view>
					<view class="content">
						<view class="text-color text-bold">有分享就会有收获</view>
						<view class="text-cut text-gray padding-top-xs">
							2021年3月4日
						</view>
					</view>
					<view class="action flex" @tap="jump_report">
						<text class="cuIcon-infofill text-red  margin-right-xs"></text>
						<view class="text-grey text-sm text-bold">违规举报</view>
					</view>
				</view>
				<!--  -->
				<view class="bg-white flex padding justify-between">
					<view class="text-lg flex  align-center">
						<text class="cuIcon-attention text-gray  margin-right-xs"></text>
						<view class="text-bold text-sm">10</view>
					</view>
					<view class=" text-lg flex align-center">
						<text class="cuIcon-rechargefill text-red  margin-right-xs"></text>
						<view class="text-bold text-sm">分享收益</view>
						<view class="text-bold text-sm text-red margin-left-xs">200</view>
					</view>
				</view>
			</view>
			<!-- 内容 -->
			<view class="margin-top-xl">

			</view>
			<view class="cu-list menu card-menu margin-top sm-border bg-white">
				<view class="flex padding justify-between">
					<view class='cu-tag  bg-gray text-df round padding-xl'>有分享就会有收获</view>
					<view class="flex flex-wrap justify-between align-center text-color">
						<button class="cu-btn round bg-color shadow ">
							<!-- <image src="../../static/tabbar/about_cur.png" mode=""></image> -->
							<text class="text-white text-df padding'">相关文章</text>
						</button>
					</view>
				</view>
				<view class="sm-border text-center margin">
					<view class="padding solids radius">
						<text class="cuIcon-attentionforbid text-gray margin-right-xs"></text>
						查看分享内容
						<text class="cuIcon-unfold text-gray margin-right-xs"></text>
					</view>
					
				</view>
			</view>
		</view>
		<!-- 分享 -->
		<view class="cu-bar btn-group margin-top">
			<button class="cu-btn bg-blue shadow-blur round">分享</button>
		</view>
		<!-- 广告 -->
		<view class="margin-top-xl text-center  text-bold">
			广告

		</view>
		<!-- 	<view class="cu-bar btn-group margin-top">
			<button class="cu-btn bg-blue shadow-blur round">编辑</button>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			jump_report() {
				uni.navigateTo({
					url: '../post/report?id=1&name=uniapp'
				})
			}
		}

	}
</script>

<style>
	image {
		width: 30upx;
		height: 30upx;
	}

	.radius {
		border-radius: 20rpx;
	}

	.cu-list.menu-avatar>.cu-item .content {
		left: 153rpx;
	}

	.cu-list.menu-avatar>.cu-item .action {
		width: 160rpx;
	}

	.share-padding {
		padding-top: 20upx;
		padding-bottom: 20upx;
	}

	.padding-xl {
		padding: 35upx;
	}
</style>
