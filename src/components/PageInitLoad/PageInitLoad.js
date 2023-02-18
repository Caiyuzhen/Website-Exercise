import loadingPage from './../../views/Loading/loadingPage.js'


// 🔥🔥用来做初始化的动画效果！
export default function PageInitLoad () {
	// 🔥🔥🔥 JQuery 侦测页面 DOM 元素的加载, 并在加载完成后执行回调函数, 类似 DOMContentLoaded, 一般不都用 DOMContentLoaded （DOM 树构建完成狗就可以执行）, 而不会用 onload, 因为 onload 会等到所有资源都加载完毕才执行 （会比较慢） 
	$(function() { //回调
		$('.loading-block').addClass('loading-block-move') // loading 页面位移动画
	


		// allContainer 获取所有需要被观察的对象
		const allContainer = $('.init-Ref')//先获取所有被隐藏的模块



		// 获得 downOne 元素， 添加 transitionend 事件, 用来监听动画结束后执行的回调
		const downOne = $('.downOne')
		downOne.on('transitionend', () => {
			// console.log('loading 动画结束');

			// ⚡️⚡️⚡️为了避免太快就【渐现】了,所以 setTimeout 一下 (👈不严谨的写法，👆严谨的写法应该等 loading 页面 transitionend 事件结束后再执行)
			// setTimeout(() => {

				// 🔥🔥一、建立交叉观察器, 用来监听元素是否进入视口后做什么动作
				const IObserver = new IntersectionObserver((entries) => {
					// console.log(entries) //有 3 个元素, 是个数组
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							// 添加渐入动画
							console.log(entry.target) //🔥 target 就是进入观察区域的元素
							$(entry.target).addClass('animate__animated animate__fadeIn') //🔥用 animate.css 库的动画
						}
					})	
				})


				/* 👀 二、具体观察哪个元素, 会触发上面 entries 的回调, 用 jQuery 的 each 方法给每个元素都添加上观察器 */
				allContainer.each((index, element) => { //⚡️⚡️⚡️element 就是遍历出来的 DOM 元素, observer(XXX)  要传入的也是 DOM 元素！
					IObserver.observe(element) /* 🔥🔥🔥给 DOM 元素添加观察器！！ */
					// console.log(index);
				})

			// },2000)
		})
	})


	return loadingPage ()
}