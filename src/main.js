import { cursorInit } from './components/Cursor/cursor.js'
import baseInfoView from './views/baseInfoView.js'



// 渲染根页面
((doc) => {
	const oAppContainer = doc.querySelector('#app')


	const init = () => {
		// 渲染页面
		oAppContainer.innerHTML = baseInfoView()
		
		// 初始化, 在拉伸的时候不会影响到画布内的元素比例
		cursorInit()
	}

	init()
})(document)


