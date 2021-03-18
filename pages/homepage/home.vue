<template name="homepage">
	<view>
		<scroll-view scroll-y class="page bg-white  homepage">
			<!-- 大标题 -->
			<view class="text-center">
				<text class="home-title">有分享，就会有</text>
				<text class="home-subt">收获</text>
			</view>
			<!--快捷-->
			<view class="down">
				<view class="share ">
					<view class="cu-bar btn-group">
						<button class="cu-btn .bg-color shadow-blur round lg" @tap="jump">
							<image src="../../static/tabbar/about_cur.png" mode=""></image>
							<text class="text text-bold text-df text-content text-white">快捷分享</text>
						</button>
					</view>
				</view>
				<view class="recond margin-top-sm">
					<view class="margin flex align-items justify-center " @tap="jump_share">
						<image src="../../static/tabbar/about_cur.png" mode=""></image>
						<text class="text-color text-content text-df text-share">分享记录</text>
					</view>
				</view>
			</view>
			<!-- 关于 -->
			<view class="flex justify-end margin-right-sm" @tap="jump_about">
				<image src="../../static/tabbar/about_cur.png" mode="">
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

	.home-title {
		font-size: 52upx;
		font-weight: 400;
		color: #8799A3;
		letter-spacing: 17upx;
		font-style: oblique;
	}

	.home-subt {
		font-weight: 600;
		font-size: 63upx;
		color: #0081FF;
		letter-spacing: 16upx;
		font-style: oblique;
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

	}
</style>
