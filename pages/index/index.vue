<template>
	<view>
		<homepage v-if="PageCur=='homepage'"></homepage>
		<post v-if="PageCur=='post'"></post>
		<mine v-if="PageCur=='mine'"></mine>
		<!--  -->

		<!--  底部组件-->
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="homepage">
				<view class="action">
					<view class="cuIcon-homefill" :class="PageCur == 'homepage'?'text-green':''"></view>
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="post">
				<view class="action  add-action">
					<button class="cu-btn cuIcon-add  shadow" :class="PageCur == 'post'?'bg-green':''"></button>
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mine">
				<view class="action">
					<view class="cuIcon-peoplefill" :class="PageCur == 'mine'?'text-green':''">
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
				PageCur: 'homepage'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				console.log(e.currentTarget.dataset.cur)
			},
// 获取随机码
			onShow() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes);
					}
				});
			
			}
		}
	}
</script>

<style>

</style>
