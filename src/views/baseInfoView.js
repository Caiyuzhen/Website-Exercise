// 引入图片
let circleBadgeNormal = './imgs/cssda-special-kudos-black.png'
let circleBadgeHover = './imgs/cssda-special-kudos-purple.png'


// 顶部信息 View
const baseInfoTemp = `
	<div class="container">
		<div class="info-header">
			<div class="info-header-nav">
				<span class="info-header-nav-title">Portfolio</span>
				<div class="info-header-nav-badge">
					<!-- 🔥🔥🔥打标记的思路: 只要有 data-bigdot="true" 这个属性的元素 hover 上去后都会改变 Point 的样式！-->
					<div data-bigdot="true" class="info-header-nav-badge-box">
						<img class="circleBadgeNormal" src="${circleBadgeNormal}" alt="">
						<img class="circleBadgeHover" src="${circleBadgeHover}" alt="">
					</div>
					<div class="info-header-switch-container">
						<!-- 右侧开关 -->
						<div class="info-header-nav-badge-switch">
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

			<div class="info-header-text">
				<p>Hi, I'm a frontend development and designer.</p>
				<span>more about me</span>
			</div>
			<div class="info-header-imgs">
				<div class="info-header-imgs-img">Image</div>
				<span class="info-header-imgs-rotate">Rotate</span>
			</div>
		</div>

		<div class="part2"></div>
		<div class="part3"></div>
	</div>

`



export default function baseInfoView() {
	return baseInfoTemp;
}
