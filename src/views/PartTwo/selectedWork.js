const circleImg_01 = './imgs/project_01.jpg'



const selectWorktemp = `
	<!-- 项目列表 -->
	<div class="selected-works">
		<span>SELECTED WORKS</span>
		<div class="works-text-container">
			<!-- 01 -->
			<div class="all-work">
				<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
				<span class="left-work-titles-info">
					Recongroup
				</span>
				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
				<!-- 跑马灯文字 -->
				<span class="text-moving">Corporate Design / Web Design Development</span>
			</div>


			<!-- 02 -->
			<div class="all-work">
				<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
				<span class="left-work-titles-info">
					Recongroup
				</span>
				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
				<!-- 跑马灯文字 -->
				<span class="text-moving">Corporate Design / Web Design Development</span>
			</div>


			<!-- 03 -->
			<div class="all-work">
				<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
				<span class="left-work-titles-info">
					Recongroup
				</span>
				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
				<!-- 跑马灯文字 -->
				<span class="text-moving">Corporate Design / Web Design Development</span>
			</div>
		</div>
	</div>
`

export default function selectedWork() {
	return selectWorktemp;
}