// 鼠标效果
export function cursorInit () {
	// DOM 的内部小圆点
	const centerDotDOM = $('.mouse-point')
	// 计算一下元素的宽高
	const centerDotWidth = centerDotDOM.width()
	const centerDotHeight = centerDotDOM.height()
	// 原生的话如何计算元素的宽高？
	// getComputedStyle 或 getBoundingClientRect
	
	// 输出元素的宽度值，不包含边框占据的位置
    // console.log(box.clientWidth);  ==>  输出 100 , 类型为number
 
    // 输出元素的宽度值，包含边框占据的位置
    // console.log(box.offsetWidth);  ==>  输出 106 , 类型为number
 
    // 输出元素的宽度设置，不包含边框占据的位置
    // console.log(getComputedStyle(box).width);  ==>  输出 100px , 类型为字符串


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

		// 更改中心小圆点
		centerDotDOM.css(
			'transform',
			// 🔥 还要偏移一点点, 让鼠标的头就是小圆点的中心
			`translateX(${mouseMoveX - centerDotWidth / 2}px) translateY(${mouseMoveY - centerDotHeight / 2}px)`
		)
	}
}