// 根据 PC 还是 Mobile 端来绑定不同的【事件】
document.addEventListener('DOMContentLoaded', () => {
	// 🔥🔥小技巧: 判断 DOM 元素身上【有没有某个方法】来判断是什么设备, 也可以用 navigator.userAgent 来判断
	const moreAboutMe = document.querySelector('.info-header-more')
	// console.dir(moreAboutMe) //🔥🔥🔥打印 dir 可以把元素转【化成对象的数据模式】给打印出来！

	// 方法一: 封装为立即执行函数
	const clickEvent = (function (){
		if('ontouchstart' in document.documentElement === true) {
			// 移动端
			return 'touchstart'
		} else {
			// Pc 端
			return 'click'
		}
	}())

	moreAboutMe.addEventListener(clickEvent, () => {
		if(clickEvent === 'click') {
			console.log('PC 端')
		} else if(clickEvent === 'touchstart') {
			console.log('移动端')
		}
	})


	// 方法二: 不封装
	// if('ontouchstart' in document.documentElement === true) {
	// 	// 移动端
	// 	moreAboutMe.addEventListener('touchstart', () => {
	// 		console.log('移动端')
	// 	})
	// } else {
	// 	// Pc 端
	// 	moreAboutMe.addEventListener('click', () => {
	// 		console.log('PC 端')
	// 	})
	// }
})


const bigTitleInfo = `
	<div class="info-header-detail">
		<span>HI 👋</span>
		<span>I'M ZENO, FRONTEDN</span>
		<span>DEVELOPER AND DESIGNER</span>
		<!--  
			data-bigdot 不能加到行内元素上, 加上也没效果！因为行内元素没有一个矩形的结构(没有长宽）！ 
			行内元素要有宽高的话, 可以用 inline-block 或者 block 来替换！!这样就有宽高了！
		-->
		<div class="info-header-more" data-bigdot="true">
			more about me
		</div>
	</div>
`

export default function bigTitle () {
	return bigTitleInfo
}
