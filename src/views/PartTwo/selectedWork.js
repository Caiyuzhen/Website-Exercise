// const circleImg_01 = './imgs/project_01.jpg'
// const circleImg_02 = './imgs/project_02.jpg'
// const circleImg_03 = './imgs/project_03.jpg'
// const circleImg_04 = './imgs/project_04.jpg'
// const circleImg_05 = './imgs/project_05.jpg'
// console.log(gsap)
import WorkList from '../../components/WorkList/workList.js'


// 🔥数据(配置数据就能控制视图！)
const worksData = [
	{
	  title: 'Recongroup',
	  subTitle: 'Corporate Design / Webdesign & Development',
	  imgUrl: 'src/imgs/project_01.jpg',
	  url: '/src/page/moreWork/index.html'
	},
	{
	  title: 'Glassland',
	  subTitle: 'Webdesign & Development',
	  imgUrl: 'src/imgs/project_02.jpg',
	  url: '/src/page/moreWork/index.html'
	},
	{
	  title: 'PEFC',
	  subTitle: 'Graphic Design / Animations / SM',
	  imgUrl: 'src/imgs/project_03.jpg',
	  url: '/src/page/moreWork/index.html'
	},
	{
	  title: 'Biosphere Lab Lungau',
	  subTitle: 'Corporate Design / Webdesign & Development / Social Media / Newsletter',
	  imgUrl: 'src/imgs/project_04.jpg',
	  url: '/src/page/moreWork/index.html'
	},
	{
	  title: 'ZIID',
	  subTitle: 'Corporate Design / Webdesign / Graphic Design / Newsletter ',
	  imgUrl: 'src/imgs/project_05.jpg',
	  url: '/src/page/moreWork/index.html'
	},
	{
	  title: 'Hotel Gambswirt',
	  subTitle: 'Webdesign / Social Media / Photography',
	  imgUrl: 'src/imgs/project_06.jpg',
	  url: '/src/page/moreWork/index.html'
	},
	{
	  title: 'More works',
	  subTitle: 'More works & photography',
	  imgUrl: 'src/imgs/project_07.jpg',
	  url: '/src/page/moreWork/index.html'
	},
]



// 🔥从类中获得拼接好的 DOM HTML！！再传入下面的模板字符串！
const workListHtml = WorkList.init(worksData)


//动态的渲染 DOM （🌟🌟对于内容多的情况会更友好🌟🌟） ————————————————————————————————————————————————————————————————————————
const selectWorktemp = `	
	<!-- 项目列表 -->
	<div class="selected-works">
		<span>SELECTED WORKS</span>
		<div class="works-text-container">
			<!-- 🔥🔥调用 init 这个【原型方法】并【传入数据】来动态的生成 DOM !!!-->
			${workListHtml}
		</div>
	</div>
`




// // 等待文档加载完成(渲染完 DOM 后才行), 🌟此时文档已经加载完毕了, DOM 已经渲染完毕了!!
// document.addEventListener('DOMContentLoaded', function() {
	
// 	// 🌟GSAP 设置基础样式
// 	gsap.set('.circle-img-container', {
// 		opacity: 0,
// 		scale: 0,
// 		xPercent: -50, //🔥根据自身宽度的 50% 来定位
// 		yPercent: -50, //🔥根据自身高度的 50% 来定位
// 	})

// 	// JQuery 配合 GSAP！
// 	const workElement = $('.all-work') //hover 父元素, 显示图片

// 	// 🔥🔥鼠标移入, 显示图片 xxx.hover(()=>{}) 这个是 JQuery 的 hover 方法！！
// 	workElement.hover((e) => {
// 		// 🌟变化样式
// 		gsap.to('.circle-img-container', {
// 			x: e.offsetX, /* 鼠标偏移量 */
// 			y: e.offsetY,
// 			opacity: 1,
// 			scale: 1,
// 			duration: 0.2,
// 		})
// 	}, () => { // 鼠标移出
// 		gsap.to('.circle-img-container', {
// 			opacity: 0,
// 			scale: 0,
// 			duration: 0.2,
// 		})
// 	})

// 	// 鼠标位置移动
// 	workElement.mousemove((e) => {
// 		// 🌟变化样式
// 		gsap.to('.circle-img-container', {
// 			x: e.offsetX,
// 			y: e.offsetY,
// 		})
// 	})
	
// })





export default function selectedWork() {
	return selectWorktemp;
}

