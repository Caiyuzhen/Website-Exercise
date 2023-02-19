import { cursorInit } from './components/Cursor/cursor.js'
import indexView from './views/indexView.js'
import selectedWork from './controllers/selectedWorks.js'


// 渲染根页面
((doc) => {
	const oAppContainer = doc.querySelector('#app')


	const init = () => {
		// 渲染页面 View
		oAppContainer.innerHTML = indexView()

		// 引入 Controller 层
		selectedWork()
		
		// 初始化 Canvas, 在拉伸的时候不会影响到画布内的元素比例
		cursorInit()
	}

	init()
})(document)


