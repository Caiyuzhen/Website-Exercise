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

console.log('屏幕倍数:', devicePixelRatio)


// 🔥🔥鼠标选区效果
// let startPoint = { x: 0, y: 0 };

// document.addEventListener('pointerdown', (event) => {
//   startPoint.x = event.clientX;
//   startPoint.y = event.clientY;
// });

// let selectBox = null;

// document.addEventListener('pointermove', (event) => {
//   const currentPoint = { x: event.clientX, y: event.clientY };
//   const x = Math.min(startPoint.x, currentPoint.x);
//   const y = Math.min(startPoint.y, currentPoint.y);
//   const width = Math.abs(startPoint.x - currentPoint.x);
//   const height = Math.abs(startPoint.y - currentPoint.y);

//   if (!selectBox) {
//     selectBox = document.createElement('div');
//     selectBox.style.position = 'absolute';
//     selectBox.style.border = '1px solid #000';
// 	selectBox.style.background = 'rgba(0,0,0,0.1)';
//     document.body.appendChild(selectBox);
//   }

//   selectBox.style.left = x + 'px';
//   selectBox.style.top = y + 'px';
//   selectBox.style.width = width + 'px';
//   selectBox.style.height = height + 'px';
// });

// document.addEventListener('pointerup', () => {
// 	if (selectBox) {
// 	  const elements = document.elementsFromPoint(
// 		startPoint.x,
// 		startPoint.y
// 	  ).filter((el) => selectBox.contains(el));
  
// 	  console.log(elements);
  
// 	  document.body.removeChild(selectBox);
// 	  selectBox = null;
// 	}
// });

  





export default function indexView() {
	changeVideo()
	return indexViewTemp
}
