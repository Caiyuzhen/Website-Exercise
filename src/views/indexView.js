import PageInitLoad from '../components/PageInitLoad/PageInitLoad.js'
import headerAction from "./PartOne/headerAction.js" //🔥路径需要从最外侧调用！
import bigTitle from "./PartOne/bigTitle.js" //🔥路径需要从最外侧调用！
import imgBoxs from "./PartOne/imgBox.js" //🔥路径需要从最外侧调用！
import selectedWork from './PartTwo/selectedWork.js'
import Contact from './PartThree/Contact.js'
import {changeVideo} from './PartThree/Contact.js'


// 顶部信息 View
const indexViewTemp = `
 	<!-- 加载页 -->
	<!-- ${PageInitLoad()} -->
	
	<div class="container">
		<!-- 顶部信息 /* 🔥 init-Ref 渐入效果 */ -->
		<div class="info-header init-Ref"> 
			<!-- 右侧按钮 -->
			${headerAction()}

			<!-- 大标题文字组件 -->
			${bigTitle()}
			
			<!-- 图片组件 -->
			${imgBoxs()}
			
		</div>

		<!-- 项目列表 -->
		<div class="init-Ref">
			${selectedWork()}
		</div>

		<!-- 渲染底部信息 -->
		<div class="init-Ref">
			${Contact()}
		</div>
	</div>

`



export default function indexView() {
	changeVideo()
	return indexViewTemp
}
