// é¼ æ ææ
export function cursorInit () {

	// ð¥ð¥ð¥ hover åå°åç¹åå¤§åç¹ (åè·åææè¢«ææ è®°çåç´ )
	const allDotHoverElements = $('div[data-bigdot="true"]')
	// console.log(allDotHoverElements);
	allDotHoverElements.hover(() => {
		centerDotDOM.addClass('bigdot')
		// console.log('ç§»å¥åç´ äº')
	}, () => {
		centerDotDOM.removeClass('bigdot')
		// console.log('ç§»åºåç´ äº')
	})



	// ð¥ð¥DOM çåé¨å°åç¹ï¼ä¸é¢å¨ç§»å¥åç´ æ¶æ·»å ç±»åï¼
	const centerDotDOM = $('.mouse-point')

	// canvas çå¤ç¯
	paper.setup('myCanvas')
	const circle = new paper.Path.Circle(new paper.Point(300, 300), 24)
	circle.strokeColor = '#7286D3'
	circle.strokeWidth = 2


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


	/** ð¥ð¥ð¥ð¥ð¥ãç¼å¨å½æ°ãç»åãå¸§çå·æ°ã
	 a -> èµ·å§å¼     
	b -> ç»æå¼     
	n -> ç¼å¨ç³»æ°(å¼ºåº¦ 0-1)
	*/
	const lerp = (a, b, n) => {
		return (1 - n) * a + n * b 
	}


	// ððððåºå±è¿æ¯ç¨ç requestAnimationFrame (å¨ç»)
	paper.view.onFrame = function () {
		lastX = lerp(lastX, mouseMoveX, 0.2)
		lastY = lerp(lastY, mouseMoveY, 0.2)

		// ð¥æ´æ°åå½¢çä½ç½®
		circle.position = new paper.Point(lastX, lastY)

		// è®¡ç®ä¸ä¸å°åç¹åç´ çå®½é« (ð¥ð¥ð¥æ¯æ¬¡é¡µé¢å·æ°åé½è¦éæ°è®¡ç®ä¸ä¸)
		const centerDotWidth = centerDotDOM.width()
		const centerDotHeight = centerDotDOM.height()
		// åççè¯å¦ä½è®¡ç®åç´ çå®½é«ï¼ -- getComputedStyle æ getBoundingClientRect

		// æ´æ¹ä¸­å¿å°åç¹
		centerDotDOM.css(
			'transform',
			// ð¥ è¿è¦åç§»ä¸ç¹ç¹, è®©é¼ æ çå¤´å°± = å°åç¹çä¸­å¿
			`translateX(${mouseMoveX - centerDotWidth / 2}px) translateY(${mouseMoveY - centerDotHeight / 2}px)`
		)
	}
}