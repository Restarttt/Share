<template>
	<view class="page-small">
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			<cu-custom bgColor="bg-gradual-blue" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">浏览记录</block>
			</cu-custom>
			<!-- -->
			<view class="cu-list menu-avatar">
				<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in list"
					:key="index" @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd"
					:data-target="'move-box-' + index">
					<view @tap="jump" class="cu-avatar round lg"
						:style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]">
					</view>
					<view class=" content">
						<view class="text-grey">{{item.title}}</view>
						<view class="flex">
							<view class="text-gray text-sm">
								{{item.name}}
							</view>
							<view class="text-gray text-sm padding-left">
								{{item.time}}
							</view>
						</view>
					</view>
					<view class="action">
						<text class="cuIcon-discoverfill text-orange"></text>
					</view>
					<view class="move">
						<view class="bg-grey">置顶</view>
						<view class="bg-red">删除</view>
					</view>
				</view>
			</view>
		</scroll-view>
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

			};
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '../post/share?id=1&name=uniapp'
				})
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}

	}
</script>

<style>
</style>
