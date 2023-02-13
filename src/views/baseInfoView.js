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
					<div class="info-header-nav-badge-box">
						<img class="circleBadgeNormal" src="${circleBadgeNormal}" alt="">
						<img class="circleBadgeHover" src="${circleBadgeHover}" alt="">
					</div>
					<div>switch</div>
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
`;



export default function baseInfoView() {
	return baseInfoTemp;
}