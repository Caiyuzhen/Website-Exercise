// 引入图片
const circleBadgeNormal = './imgs/cssda-special-kudos-normal.png' //🔥路径需要从最外侧调用！
const circleBadgeHover = './imgs/cssda-special-kudos-hover.png' //🔥路径需要从最外侧调用！



const temp = `
	<div class="info-header-nav">
				<span class="info-header-nav-title">Portfolio</span>
				<div class="info-header-nav-badge">

					<!-- 🔥🔥🔥打标记的思路: 只要有 data-bigdot="true" 这个属性的元素 hover 上去后都会改变 Point 的样式！-->
					<!-- 只要加上 data-bigdot="true" 就有 hover 效果!-->
					<div data-bigdot="true" class="info-header-nav-badge-box">
						<img class="circleBadgeNormal" src="${circleBadgeNormal}" alt="">
						<img class="circleBadgeHover" src="${circleBadgeHover}" alt="">
					</div>
					
					<!-- 按钮 -->
					<div class="info-header-switch-container">
						<!-- 右侧开关 -->
						<!-- 只要加上 data-bigdot="true" 就有 hover 效果!-->
						<div data-bigdot="true" class="info-header-nav-badge-switch">
							<!-- 🔥🔥🔥开关小技巧, 把 checkbox type 的 input 放到 label 内！ 【点击 switch-bar】 也能改变 【checkbox】的状态！！因为在 label 下整个会自动绑定！ -->
							<label>
								<input class="checkBoxSwitch" type="checkbox">
								<div class="switch-bar"></div>
							</label>
						</div>
						<!-- info -->
						<div class="info-header-nav-badge-switch-info">
							<span class="switch-to-old">Switch to Old School</span>
							<span class="switch-to-new">Switch to New Style</span>
						</div>
					</div>
				</div>
			</div>
`

export default function headerAction() {
	return temp
}