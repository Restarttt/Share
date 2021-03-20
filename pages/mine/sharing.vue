<template>
	<view class="page-small">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<block slot="backText">返回</block>
			<block slot="content">分享记录</block>
		</cu-custom>
		<!-- -->
		<view class="margin-top-xxxl">
			<view class="" v-for="(item,index) in list" :key='index'>
				<view class="cu-item bg-gray padding cu-list card-menu margin-top">
					<view class="flex justify-between">
						<view class="action">
							<text class="cuIcon-titles text-orange"></text>
							<text class="text-x text-bold margin-left-xs">{{item.time}}</text>
						</view>
						<view class="cuIcon-exit text-bluee text-xl"></view>
					</view>
					<view class="padding">
						<text class="text-gray">{{item.title}}</text>
					</view>
					<view class="flex  align-center justify-between">
						<button class="cu-btn bg-bluee  text-blue round">相关文章</button>
						<button class="cu-btn bg-blue  round text-white ">查看更多</button>
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
				list: [{
						title: '百度云资源',
						name: '李易峰创建',
						time: '2021.1.1',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../mine/record'
					},
					{
						title: '百度云资源',
						name: '李易峰创建',
						time: '2021.1.1',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../mine/record'
					}, {
						title: '百度云资源',
						name: '李易峰创建',
						time: '2021.1.1',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../mine/record'
					}, {
						title: '百度云资源',
						name: '李易峰创建',
						time: '2021.1.1',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../mine/record'
					},
				],
				modalName: null,
				listTouchStart: 0,
			}
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '../post/share?id=1&name=uniapp'
				})
			},

		}
	}
</script>

<style>
	.bg-bluee {
		background-color: #b7d6f8;
	}

	.cu-btn {
		width: 40vw;
	}

	.bg-gray {
		background-color: #f8f8f8;
	}
</style>
