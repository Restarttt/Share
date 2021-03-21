<template name="post">
	<view class="page-small page">
		<scroll-view scroll-y>
			<!-- 取消发布按钮 -->
			<view class="padding flex justify-between margin-left margin-right">
				<view class="text-xl text-gray">取消</view>
				<view class="text-xl  text-blue" @tap="jump">发布</view>
			</view>
			<!-- 编辑框 -->
			<view class="edit">
				<view class="cu-form-group radius">
					<textarea class="text-xxl text-left" :disabled="modalName!=null" @input="textareaAInput"
						placeholder="请输入分享内容:"></textarea>
				</view>
			</view>
			<!-- 网盘 -->

			<!-- 类型 -->
			<view class="menu cu-list sm-border">
				<!-- 收益 -->
				<view class="cu-item arrow" @tap="showModal" data-target="RadioModal">
					<view class="content flex">
						<view class="cuIcon-recharge text-gray"></view>
						<text class="text-grey padding-left">收益类型</text>
					</view>
				</view>

				<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
					<view class="cu-dialog" @tap.stop="">
						<radio-group class="block" @change="RadioChange">
							<view class="cu-list menu text-left">
								<view class="cu-item" v-for="(item,index) in radio" :key="index">
									<label class="flex justify-between align-center flex-sub">
										<view class="flex-sub">{{item.name}}</view>
										<radio class="round" :class="radio=='radio' + index?'checked':''"
											:checked="radio=='radio' + index?true:false" :value="'radio' + index">
										</radio>
									</label>
								</view>
							</view>
						</radio-group>
					</view>
				</view>

				<!-- 资源 -->
				<view class="cu-item arrow" @tap="showModal" data-target="ChooseModal">
					<view class="content flex">
						<view class="cuIcon-deliver text-gray"></view>
						<text class="text-grey padding-left">资源类型</text>
					</view>
				</view>
				<view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
					<view class="cu-dialog" @tap.stop="">
						<view class="cu-bar bg-white">
							<view class="action text-blue" @tap="hideModal">取消</view>
							<view class="action text-green" @tap="hideModal">确定</view>
						</view>
						<view class="grid col-3 padding-sm">
							<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
								<button class="cu-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'"
									@tap="ChooseCheckbox" :data-value="item.value"> {{item.name}}
								</button>
							</view>
						</view>
					</view>
				</view>
				<!-- 关联 -->
				<view class="cu-item arrow">
					<view class="content flex">
						<view class="cuIcon-profile text-gray"></view>
						<text class="text-grey padding-left">关联文章</text>
					</view>
				</view>
				<view class="solid-bottom"></view>
			</view>
			<!-- 网盘链接 -->
			<view class="padding margin-top-xl" @tap="showModal" data-target="bottomModal">
				<view class="padding wang_width radius shadow-warp bg-white text-center">
					<view class="lg text-gray cuIcon-upload text-center">
					</view>
					<text class="text-gray text-df text-center">
						网盘
					</text>
				</view>
			</view>
			<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
				<view class="cu-dialog bg-white">
					<view class="cu-bar bg-white">
						<view class="action text-green">确定</view>
						<view class="action text-blue" @tap="hideModal">取消</view>
					</view>
					<view class="margin">
						<textarea class="text-x text-left bg-gray margin-bottom  padding  radius text-width"
							@input="textareaAInput" placeholder="请输入网盘链接"></textarea>
						<textarea class="text-x text-left bg-gray margin-bottom padding radius text-width"
							@input="textareaAInput" placeholder="请输入提取码"></textarea>
						<text class="text-blue text-left">目前仅支持百度网盘链接</text>
					</view>
				</view>
			</view>
			<!--  -->
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "post",
		data() {
			return {
				modalName: null,
				textareaAValue: '',
				checkbox: [{
					value: 0,
					name: '文本',
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '链接',
					checked: true,
					hot: false,
				}, {
					value: 2,
					name: '图片',
					checked: true,
					hot: false,
				}],
				radio: [{
					value: 0,
					name: '视频',
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '激励',
					checked: false,
					hot: false,
				}, {
					value: 2,
					name: '原生',
					checked: false,
					hot: true,
				}],


			};

		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '../post/win?id=1&name=uniapp'
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
				console.log(e.detail.value)
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
				console.log(e.detail.value)
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			}
		}
	}
</script>

<style>
	.text-width {
		height: 6vh;
		width: 92vw;
	}

	.cu-dialog .cu-bar {
		margin-top: 0;
	}

	.wang_width {
		width: 21vw;
		height: 8vh;
		margin: 0 auto;
	}

	.cu-tag {
		letter-spacing: 4upx;
		border-radius: 100upx;
	}

	.cu-form-group textarea {
		padding: 25upx;
		margin: 0rpx 0 30rpx;
		height: 6.6em;
		border-radius: 10upx;
		letter-spacing: 4upx;
	}

	.cu-bar {
		margin-top: 50upx;
	}
</style>
