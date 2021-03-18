<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">分享页面</block>
		</cu-custom>
		<!-- 用户信息 -->
		<view class="cu-list menu-avatar card-menu margin-top">
			<view class="cu-item">
				<view class="cu-avatar round lg"
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
				</view>
				<view class="content">
					<view class="text-grey">凯尔</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text>
							2021年3月4日 18:04
						</view>
					</view>
				</view>
				<view class="action flex" @tap="jump_report">
					<text class="cuIcon-infofill text-red  margin-right-xs"></text>
					<view class="text-grey text-xs">违规举报</view>
				</view>
			</view>
			<!--  -->
			<view class="bg-white flex padding justify-between">
				<view class="text-lg flex">
					<text class="cuIcon-infofill text-red  margin-right-xs"></text>
					<view class="text-bold">10</view>
				</view>
				<view class=" text-lg flex">
					<text class="cuIcon-infofill text-red  margin-right-xs"></text>
					<view class="text-bold">200yuan</view>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="cu-list menu-avatar card-menu margin-top bg-white">
			<view class="flex padding justify-between">
				<view class="text-lg flex">
					<view class="text-bold">有分享就会有收获</view>
				</view>
				<view class=" text-lg flex">
					<text class="cuIcon-infofill text-red  margin-right-xs"></text>
					<view class="text-bold">相关文章</view>
				</view>
			</view>
			<view class="sm-border text-center margin">
				<text>查看内容</text>
				<text class="cuIcon-infofill text-red  margin-right-xs"></text>
			</view>

		</view>

		<!-- 分享 -->
		<view class="cu-bar btn-group margin-top">
			<button class="cu-btn bg-blue shadow-blur round">分享</button>
		</view>
		<!-- 广告 -->
		<view class="margin-top">
			广告
			
		</view>
		<view class="cu-bar btn-group margin-top">
			<button class="cu-btn bg-blue shadow-blur round">编辑</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			jump_report(){
				uni.navigateTo({
					url:'../post/report?id=1&name=uniapp'
				})
			}
		}

	}
</script>

<style>
</style>
