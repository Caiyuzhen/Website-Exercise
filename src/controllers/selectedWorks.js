// 👀控制 hover Work 列表的效果
export default function selectedWork() {

	// 等待文档加载完成(渲染完 DOM 后才行), 🌟此时文档已经加载完毕了, DOM 已经渲染完毕了!!
	document.addEventListener('DOMContentLoaded', function() {
		
		// 🌟GSAP 设置基础样式
		gsap.set('.circle-img-container', {
			opacity: 0,
			scale: 0,
			xPercent: -50, //🔥根据自身宽度的 50% 来定位
			yPercent: -50, //🔥根据自身高度的 50% 来定位
		})

		// JQuery 配合 GSAP！
		const workElement = $('.all-work') //hover 父元素, 显示图片

		// 🔥🔥鼠标移入, 显示图片 xxx.hover(()=>{}) 这个是 JQuery 的 hover 方法！！
		workElement.hover((e) => {
			// 🌟变化样式
			gsap.to('.circle-img-container', {
				x: e.offsetX, /* 鼠标偏移量 */
				y: e.offsetY,
				opacity: 1,
				scale: 1,
				duration: 0.2,
			})
		}, () => { // 鼠标移出
			gsap.to('.circle-img-container', {
				opacity: 0,
				scale: 0,
				duration: 0.2,
			})
		})

		// 鼠标位置移动
		workElement.mousemove((e) => {
			// 🌟变化样式
			gsap.to('.circle-img-container', {
				x: e.offsetX,
				y: e.offsetY,
			})
		})
	})
}