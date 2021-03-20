<template name="post">
	<view>
		<scroll-view scroll-y class="page">
			<!-- 编辑框 -->
			<view class="edit">
				<view class="margin text-center radius bg-white .shadow-lg">
					<view class="text-left">
						<view class='cu-tag  bg-gray margin padding'>有分享就会有收获</view>
					</view>
					<view class="cu-form-group radius">
						<textarea class="bg-gray text-df padding-xl text-left text-bold" :disabled="modalName!=null"
							@input="textareaAInput" placeholder="请输入分享内容:"></textarea>
					</view>
				</view>
			</view>
			<!-- 类型 -->
			<view class="type">
				<view class="earnings">
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							<text class="cuIcon-redpacket_fill text-red"></text>收益类型
						</view>
						<view class="action">
							<button class="cu-btn bg-green shadow" @tap="showModal"
								data-target="RadioModal">Radio</button>
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
				</view>
				<view class="resource">
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							<text class="cuIcon-deliver_fill text-orange "></text> 资源类型
						</view>
						<view class="action">
							<button class="cu-btn bg-green shadow" @tap="showModal"
								data-target="ChooseModal">Choose</button>
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
									<button class="cu-btn orange lg block"
										:class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox"
										:data-value="item.value"> {{item.name}}
										<view class="cu-tag sm round"
											:class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT
										</view>
									</button>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="article">
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							<text class="cuIcon-formfill text-blue "></text> 关联文章
						</view>
						<view class="action">
							<button class="cu-btn bg-green shadow" @tap="showModal" data-target="Modal">Look</button>
						</view>
					</view>
				</view>
				<!--  -->
				<view class="cu-bar btn-group" @tap="jump">
					<button class="cu-btn bg-color shadow-blur round text-white">提交</button>
				</view>
			</view>
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
					hot:  false,
				}],
				radio: [{
					value: 0,
					name: '视频',
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '激励',
					checked: true,
					hot: false,
				}, {
					value: 2,
					name: '原生',
					checked: true,
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
