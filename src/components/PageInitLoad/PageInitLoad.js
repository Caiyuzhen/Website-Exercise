import loadingPage from './../../views/Loading/loadingPage.js'


// 🔥🔥用来做初始化的动画效果！
export default function PageInitLoad () {
	// 🔥🔥🔥 JQuery 侦测页面 DOM 元素的加载, 并在加载完成后执行回调函数, 类似 DOMContentLoaded, 一般不都用 DOMContentLoaded （DOM 树构建完成狗就可以执行）, 而不会用 onload, 因为 onload 会等到所有资源都加载完毕才执行 （会比较慢） 
	$(function() { //回调
		$('.loading-block').addClass('loading-block-move') // loading 页位移动化
	})



	// 🔥🔥交叉观察器, 用来监听元素是否进入视口, allContainer 获取所有需要被观察的对象
	const allContainer = $('.init-Ref')//先获取所有被隐藏的模块

	const IObserver = new IntersectionObserver((entries) => {

	})

	/* 👀观察哪个元素, 会触发上面 entries 的回调, 用 jQuery 的 each 方法给每个元素都添加上观察器 */
	allContainer.each((index, dom) => {
		console.log(1);
		console.log(index, dom);
	})


	return loadingPage ()
}