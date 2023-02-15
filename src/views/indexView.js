import headerAction from "./PartOne/headerAction.js" //🔥路径需要从最外侧调用！
import bigTitle from "./PartOne/bigTitle.js" //🔥路径需要从最外侧调用！
import imgBoxs from "./PartOne/imgBox.js" //🔥路径需要从最外侧调用！
import selectedWork from './PartTwo/selectedWork.js'


// 顶部信息 View
const indexViewTemp = `
	<div class="container">
		<!-- 顶部信息 -->
		<div class="info-header">
			<!-- 右侧按钮 -->
			${headerAction()}

			<!-- 大标题文字组件 -->
			${bigTitle()}
			
			<!-- 图片组件 -->
			${imgBoxs()}
			
		</div>

		<!-- 项目列表 -->
		${selectedWork()}
		<div class="part3"></div>
	</div>

`



export default function indexView() {
	return indexViewTemp
}
