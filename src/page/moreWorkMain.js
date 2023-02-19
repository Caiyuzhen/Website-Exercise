import { cursorInit } from '../components/Cursor/cursor.js'
import moreWorkIndexView from '/src/page/View/moreWorkIndexView.js'

// 渲染根页面
((doc) => {
	const oAppContainer = doc.querySelector('#moreWork')

	// 渲染 moreWork 页面
	const init = () => {
		// 渲染 view
		oAppContainer.innerHTML = moreWorkIndexView()

		cursorInit()
	}

	init()
})(document)