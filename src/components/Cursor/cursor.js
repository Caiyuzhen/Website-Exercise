// 鼠标效果
export function cursorInit () {

	// 🔥🔥🔥 hover 后小圆点变大圆点 (先获取所有被打标记的元素)
	const allDotHoverElements = $('div[data-bigdot="true"]')
	// console.log(allDotHoverElements);
	allDotHoverElements.hover(() => {
		centerDotDOM.addClass('bigdot')
		// console.log('移入元素了')
	}, () => {
		centerDotDOM.removeClass('bigdot')
		// console.log('移出元素了')
	})



	// 🔥🔥DOM 的内部小圆点（上面在移入元素时添加类名）
	const centerDotDOM = $('.mouse-point')

	// canvas 的外环
	paper.setup('myCanvas')
	const circle = new paper.Path.Circle(new paper.Point(300, 300), 24)
	circle.strokeColor = '#7286D3'
	circle.strokeWidth = 3


	const tool = new paper.Tool()


	let lastX = 0
	let lastY = 0
	let mouseMoveX = 0
	let mouseMoveY = 0

	tool.onMouseMove = function (e) {
		// console.log(e.point)
		mouseMoveX = e.point.x
		mouseMoveY = e.point.y
	}


	/** 🔥🔥🔥🔥🔥【缓动函数】结合【帧率刷新】
	 a -> 起始值     
	b -> 结束值     
	n -> 缓动系数(强度 0-1)
	*/
	const lerp = (a, b, n) => {
		return (1 - n) * a + n * b 
	}


	// 🌟🌟🌟🌟底层还是用的 requestAnimationFrame (动画)
	paper.view.onFrame = function () {
		lastX = lerp(lastX, mouseMoveX, 0.2)
		lastY = lerp(lastY, mouseMoveY, 0.2)

		// 🔥更新圆形的位置
		circle.position = new paper.Point(lastX, lastY)

		// 计算一下小圆点元素的宽高 (🔥🔥🔥每次页面刷新后都要重新计算一下)
		const centerDotWidth = centerDotDOM.width()
		const centerDotHeight = centerDotDOM.height()
		// 原生的话如何计算元素的宽高？ -- getComputedStyle 或 getBoundingClientRect

		// 更改中心小圆点
		centerDotDOM.css(
			'transform',
			// 🔥 还要偏移一点点, 让鼠标的头就是小圆点的中心
			`translateX(${mouseMoveX - centerDotWidth / 2}px) translateY(${mouseMoveY - centerDotHeight / 2}px)`
		)
	}
}