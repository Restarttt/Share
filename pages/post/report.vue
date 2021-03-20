<template>
	<view class="page-small">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">违规举报</block>
		</cu-custom>

		<view class="repost">
			<view class="cu-bar margin">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					<text class="text-x text-bold">请提交该用户违规原因</text>
				</view>

			</view>
			<view class="cu-form-group margin-top bg-gray margin">
				<view class="title">请选择</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'111'}}
					</view>
				</picker>
			</view>

		</view>
		<view class="cu-bar margin">
			<view class="action">
				<text class="cuIcon-titles text-green"></text>
				<text class="text-x text-bold">请输入投诉内容</text>
			</view>
		</view>
		<view class="cu-form-group margin bg-gray">
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput"
				placeholder="多行文本输入框"></textarea>
		</view>
		<view class="cu-bar btn-group">
			<button class="cu-btn bg-color shadow-blur round lg">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['色情', '诱导', '欺诈', '违法犯罪', '恶意营销', '不实信息', '侵权', '其他' ],
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style>

</style>
