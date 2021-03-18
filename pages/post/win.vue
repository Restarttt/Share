<template>
	<view>
		<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">创建成功</block>
		</cu-custom>
		<view class="sus">
			<view class="flex-sub text-center">
				<view class="text-sl padding">
					<text class=" cuIcon-roundcheckfill text-green"></text>
				</view>
				<view class=" text-xl padding">
					<text class="text-black text-bold">[有分享，就会有收获]已经创建</text>
				</view>
				<view class="padding">你可以分享到微信群，获取收益</view>
			</view>
			<view class="bg-green radius padding margin text-center">
				<text>分享至群聊获取收益</text>
			</view>
		</view>
		<!-- 更多-->
		<view class="margin text-center">
			<view class="padding">更多方式</view>
			<view class="cu-list grid col-3 no-border">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view>

			广告位

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}]

			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
		}
	}
</script>

<style>

</style>
