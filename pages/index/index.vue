<template>
	<view>
		<homepage v-if="PageCur=='homepage'"></homepage>
		<post v-if="PageCur=='post'"></post>
		<mine v-if="PageCur=='mine'"></mine>
<!-- 		<view class="cu-bar tabbar margin-bottom-xl bg-black">
			<view class="action text-orange">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action text-gray">
				<view class="cuIcon-similar"></view> 分类
			</view>
			<view class="action text-gray">
				<view class="cuIcon-recharge"></view>
				积分
			</view>
			<view class="action text-gray">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<view class="action text-gray">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>
		</view> -->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="homepage">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/homepage' + [PageCur=='homepage'?'_cur':''] + '.png'"></image>
				</view>
				<!-- <view :class="PageCur=='homepage'?'text-green':'text-gray'">主页</view> -->
			</view>
			<view class="action" @click="NavChange" data-cur="post">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/post' + [PageCur == 'post'?'_cur':''] + '.png'"></image>
				</view>
				<!-- <view :class="PageCur=='post'?'text-green':'text-gray'">发布</view> -->
			</view>
			<view class="action" @click="NavChange" data-cur="mine">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mine' + [PageCur == 'mine'?'_cur':''] + '.png'"></image>
				</view>
				<!-- <view :class="PageCur=='mine'?'text-green':'text-gray'">我的</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'homepage'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
