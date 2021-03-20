<template name="homepage">
	<view>
		<scroll-view scroll-y class="page bg-white  homepage">
			<!-- 大标题 -->
			<view class="text-center">
				<text class="home-title text-bold">有分享，就会</text>
				<text class="home-subt home-sub text-bold">有</text>
				<text class="home-subt text-bold">收获</text>
				<!-- <image class='logo' src="../../static/logo.png" mode=""></image> -->
			</view>
			<!--快捷-->
			<view class="down">
				<view class="cu-bar btn-group">
					<button class="cu-btn .bg-color shadow-blur round lg" @tap="jump">
						<text class="cuIcon-calendar text-white icon">
							<text class="text text-bold text-df text-content text-white padding-left">快捷分享
							</text>
						</text>
					</button>
				</view>

				<view class="recond margin-top-sm">
					<view class="margin-top flex align-items justify-center" @tap="jump_share">
						<text class="cuIcon-calendar text-color icon">
							<text class="text-color text-content text-df text-share">分享记录</text>
						</text>
					</view>
				</view>
			</view>
			<!-- 关于 -->
			<view class="flex justify-end margin-right-sm" @tap="jump_about">
				<text class="cuIcon-questionfill text-color icon text-sl">
				</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "homepage",
		data() {
			return {};
		},
		methods: {
			jump() {
				uni.switchTab({
					url: '/pages/post/home'

				})
			},
			jump_share() {
				uni.navigateTo({
					url: '../mine/sharing?id=1&name=uniapp'
				})
			},
			jump_about() {
				uni.navigateTo({
					url: '../mine/about?id=1&name=uniapp'
				})
			},
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.homepage {
		margin-top: 60upx;
	}

	image {
		width: 50upx;
		height: 50upx;
		margin-right: 25upx;
	}

	.cu-bar.btn-group button {
		padding: 45rpx 35rpx;
	}

	.home-title {
		font-size: 52upx;
		font-weight: 400;
		color: #8799A3;
		letter-spacing: 12upx;
		font-style: oblique;
	}

	.home-subt {
		font-weight: 600;
		font-size: 63upx;
		color: #0081FF;
		letter-spacing: 13upx;
		font-style: oblique;
	}

	.home-sub {
		color: #39B54A;
	}

	.down {
		margin: auto;
		margin-top: 420upx;
	}

	.text {
		font-family: "Fantasy", Times, Fantasy;
		letter-spacing: 10upx;
	}

	.text-share {
		letter-spacing: 4upx;
		line-height: 2.0;
		padding-left: 13rpx;
	}

	.text-sl {
		font-size: 50upx;
	}

	.margin-right-sm{
		margin-right: 45upx;
		margin-top: 141upx;
	}
</style>
