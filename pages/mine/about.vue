<template>
	<view class="page-small">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<block slot="backText">返回</block>
			<block slot="content">关于</block>
		</cu-custom>
		<!--  -->
		<view class="margin">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-title text-color"></text>
					<text class="text-df text-bold">关于我们</text>
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-title text-color"></text>
					<text class="text-df text-bold">关于我们</text>
				</view>
			</view>
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-title text-color"></text>
					<text class="text-df text-bold">关于我们</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	.margin {
		margin-top: 40upx;
	}
</style>
