import { cursorInit } from '../../components/Cursor/cursor.js'
import IndexView from './View/IndexView.js'



// 渲染根页面
((doc) => {
	const oAppContainer = doc.querySelector('#moreWork')

	// 渲染 moreWork 页面
	const init = () => {
		// 渲染 view
		oAppContainer.innerHTML = IndexView()

		cursorInit()
	}

	init()
})(document)