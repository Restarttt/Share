<template name="mine">
	<view>
		<scroll-view scroll-y class="page">
			<!-- 用户信息 -->
			<view class="cu-list menu-avatar card-menu margin-top">
				<view class="cu-item">
					<view class="cu-avatar round  lg"
						style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
					</view>
					<view class="content">
						<view class="text-white">嗯嗯嗯</view>
					</view>
					<view class="padding flex flex-wrap justify-between align-center text-color">
						<button class="cu-btn round bg-yellow shadow">刷新</button>
					</view>
				</view>
				<view class="bg-white flex padding justify-between">
					<view class="text-lg padding" v-for="(item,index) in time_list" :key='index'>
						<view class="padding margin-bottom-sm">{{item.title}}</view>
						<view class="text-bold">{{item.num}}</view>
					</view>
				</view>
			</view>
			<!-- 更多菜单 -->
			<view class="margin-top-xl">
				<view class="menu card-menu  cu-list sm-border">
					<view class="cu-item arrow" @tap="toChild" :data-url="item.url" v-for="(item,index) in list"
						:key="index">
						<view class="content">
							<text class="margin-right-sm"
								:class="['cuIcon-' + item.cuIcon,'text-' + item.color]"></text>
							<text class="text-grey">{{item.title}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 关于等 -->
			<view class="cu-list menu  card-menu margin-top sm-border">
				<view class="cu-item arrow">
					<button class="cu-btn content" open-type="contact">
						<text class="cuIcon-btn text-olive"></text>
						<text class="text-grey">客服</text>
					</button>
				</view>
				<view class="cu-item arrow" @tap="jump">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">关于</text>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height">
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "mine",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				time_list: [{
						title: '今日',
						num: 22,
						icon: 'cuIcon - share',
						color: 'blue'
					},
					{
						title: '本周',
						num: 22.2,
						icon: 'cuIcon - share',
						color: 'blue'
					},
					{
						title: '累计',
						num: 22,
						icon: 'cuIcon - share',
						color: 'blue'
					},
				],
				list: [{
						title: '余额提现',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url: '../mine/record'
					},
					{
						title: '收款方式',
						img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
						url: '../mine/info'
					},
					{
						title: '收益明细',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
						url: '../mine/detail'
					},
					{
						title: '分享记录',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
						url: '../mine/sharing'
					}, {
						title: '浏览记录',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
						url: '../mine/browse'
					}
				],
			};
		},
		methods: {
			toChild(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				})
			},
			jump() {
				uni.navigateTo({
					url: '../mine/about?id=1&name=uniapp'
				})

			},
		},
	}
</script>

<style>
	.cu-list.menu-avatar>.cu-item {
		height: 13vh;
		background-color: #6d71fe;
	}

	.padding {
		padding: 13upx 18upx;
	}

	.text-bold {
		text-align: center;
	}
</style>
