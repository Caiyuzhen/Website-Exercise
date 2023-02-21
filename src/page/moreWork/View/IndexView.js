import header from './header/header.js'
import scrollContentArea from './scrollContent/scrollContent.js'
import footer from './footer/footer.js'


const moreWorkIndexViewTemp = `
	${header()}
	${scrollContentArea()}
	${footer()}

`

// 入口文件
export default function moreWorkIndexView () {
	return moreWorkIndexViewTemp
}