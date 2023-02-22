import { gsap } from '../../../../../src/libs/GSAP/src/index.js'//核心库


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
		workElement.hover(function (e) {
			//🔥🔥 this 指向的是【⚡️当前 this】 hover 到 【⚡️.all-work】元素身上具有 【⚡️.circle-img-container】 这个类名的元素！
			const circleImage = this.querySelector('.circle-img-container') 
			// console.log(this) //this 指向的就是 hover 的那个元素 (箭头函数会有问题)
			// console.log(e.currentTarget) //e.target 指向的就是 hover 的那个元素（箭头函数也没问题）

			// 🌟变化图片样式
			// gsap.to('.circle-img-container', {
			gsap.to(circleImage, {
				x: e.offsetX, /* 鼠标偏移量 */
				y: e.offsetY,
				opacity: 1,
				scale: 1,
				duration: 0.2,
			})
		}, function () { // 鼠标移出
			//🔥🔥 this 指向的是【⚡️当前 this】 hover 到 【⚡️.all-work】元素身上具有 【⚡️.circle-img-container】 这个类名的元素！
			const circleImage = this.querySelector('.circle-img-container') 

			gsap.to(circleImage, {
				opacity: 0,
				scale: 0,
				duration: 0.2,
			})
		})

		// 鼠标位置移动
		workElement.mousemove(function (e) {
			//🔥🔥 this 指向的是【⚡️当前 this】 hover 到 【⚡️.all-work】元素身上具有 【⚡️.circle-img-container】 这个类名的元素！
			const circleImage = this.querySelector('.circle-img-container') 

			// 🌟变化样式
			gsap.to(circleImage, {
				x: e.offsetX,
				y: e.offsetY,
			})
		})
	})
}