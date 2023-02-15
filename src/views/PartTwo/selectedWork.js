const circleImg_01 = './imgs/project_01.jpg'
// console.log(gsap)





// // 等待文档加载完成(渲染完 DOM 后才行), 🌟此时文档已经加载完毕了, DOM 已经渲染完毕了!!
// document.addEventListener('DOMContentLoaded', function() {
	
// 	// 🌟GSAP 设置基础样式
// 	gsap.set('.circle-img-container', {
// 		opacity: 0,
// 		scale: 0,
// 		xPercent: -50, //🔥根据自身宽度的 50% 来定位
// 		yPercent: -50, //🔥根据自身高度的 50% 来定位
// 	})

// 	// JQuery 配合 GSAP！
// 	const workElement = $('.all-work') //hover 父元素, 显示图片

// 	// 🔥🔥鼠标移入, 显示图片 xxx.hover(()=>{}) 这个是 JQuery 的 hover 方法！！
// 	workElement.hover((e) => {
// 		// 🌟变化样式
// 		gsap.to('.circle-img-container', {
// 			x: e.offsetX, /* 鼠标偏移量 */
// 			y: e.offsetY,
// 			opacity: 1,
// 			scale: 1,
// 			duration: 0.2,
// 		})
// 	}, () => { // 鼠标移出
// 		gsap.to('.circle-img-container', {
// 			opacity: 0,
// 			scale: 0,
// 			duration: 0.2,
// 		})
// 	})

// 	// 鼠标位置移动
// 	workElement.mousemove((e) => {
// 		// 🌟变化样式
// 		gsap.to('.circle-img-container', {
// 			x: e.offsetX,
// 			y: e.offsetY,
// 		})
// 	})
	
// })



//渲染 DOM ————————————————————————————————————————————————————————————————————————
const selectWorktemp = `
	<!-- 项目列表 -->
	<div class="selected-works">
		<span>SELECTED WORKS</span>
		<div class="works-text-container">

			<!-- 01 -->
			<div class="all-work">
				
				<div class="all-work-text-box"> <!-- 这一层用来裁切元素 -->
					<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
					<span class="left-work-titles-info">Recon Group</span>

					<!-- 跑马灯文字 -->
					<span class="text-move">Corporate Design / Web Design Development</span>
				</div>


				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
			</div>


			<!-- 02 -->
			<div class="all-work">
				
				<div class="all-work-text-box"> <!-- 这一层用来裁切元素 -->
					<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
					<span class="left-work-titles-info">Glassland</span>

					<!-- 跑马灯文字 -->
					<span class="text-move">Corporate Design / Web Design Development</span>
				</div>

				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
			</div>


			<!-- 03 -->
			<div class="all-work">
				
				<div class="all-work-text-box"> <!-- 这一层用来裁切元素 -->
					<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
					<span class="left-work-titles-info">PEFC</span>

					<!-- 跑马灯文字 -->
					<span class="text-move">Corporate Design / Web Design Development</span>
				</div>

				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
			</div>


			<!-- 04 -->
			<div class="all-work">
				
				<div class="all-work-text-box"> <!-- 这一层用来裁切元素 -->
					<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
					<span class="left-work-titles-info">Bioshpere Lab Lungau</span>

					<!-- 跑马灯文字 -->
					<span class="text-move">Corporate Design / Web Design Development</span>
				</div>

				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
			</div>


			<!-- 05 -->
			<div class="all-work">
				
				<div class="all-work-text-box"> <!-- 这一层用来裁切元素 -->
					<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
					<span class="left-work-titles-info">ZIID</span>

					<!-- 跑马灯文字 -->
					<span class="text-move">Corporate Design / Web Design Development</span>
				</div>

				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${circleImg_01}" alt="">
				</div>
			</div>
			
		</div>
	</div>
`




export default function selectedWork() {
	return selectWorktemp;
}

