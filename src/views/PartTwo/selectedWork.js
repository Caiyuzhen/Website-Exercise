// const circleImg_01 = './imgs/project_01.jpg'
// const circleImg_02 = './imgs/project_02.jpg'
// const circleImg_03 = './imgs/project_03.jpg'
// const circleImg_04 = './imgs/project_04.jpg'
// const circleImg_05 = './imgs/project_05.jpg'
// console.log(gsap)
import WorkList from '../../components/WorkList/workList.js'


// ๐ฅๆฐๆฎ(้็ฝฎๆฐๆฎๅฐฑ่ฝๆงๅถ่งๅพ๏ผ)
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



// ๐ฅไป็ฑปไธญ่ทๅพๆผๆฅๅฅฝ็ DOM HTML๏ผ๏ผๅไผ ๅฅไธ้ข็ๆจกๆฟๅญ็ฌฆไธฒ๏ผ
const workListHtml = WorkList.init(worksData)


//ๅจๆ็ๆธฒๆ DOM ๏ผ๐๐ๅฏนไบๅๅฎนๅค็ๆๅตไผๆดๅๅฅฝ๐๐๏ผ โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
const selectWorktemp = `	
	<!-- ้กน็ฎๅ่กจ -->
	<div class="selected-works">
		<span>SELECTED WORKS</span>
		<div class="works-text-container">
			<!-- ๐ฅ๐ฅ่ฐ็จ init ่ฟไธชใๅๅๆนๆณใๅนถใไผ ๅฅๆฐๆฎใๆฅๅจๆ็็ๆ DOM !!!-->
			${workListHtml}
		</div>
	</div>
`




// // ็ญๅพๆๆกฃๅ ่ฝฝๅฎๆ(ๆธฒๆๅฎ DOM ๅๆ่ก), ๐ๆญคๆถๆๆกฃๅทฒ็ปๅ ่ฝฝๅฎๆฏไบ, DOM ๅทฒ็ปๆธฒๆๅฎๆฏไบ!!
// document.addEventListener('DOMContentLoaded', function() {
	
// 	// ๐GSAP ่ฎพ็ฝฎๅบ็กๆ ทๅผ
// 	gsap.set('.circle-img-container', {
// 		opacity: 0,
// 		scale: 0,
// 		xPercent: -50, //๐ฅๆ นๆฎ่ช่บซๅฎฝๅบฆ็ 50% ๆฅๅฎไฝ
// 		yPercent: -50, //๐ฅๆ นๆฎ่ช่บซ้ซๅบฆ็ 50% ๆฅๅฎไฝ
// 	})

// 	// JQuery ้ๅ GSAP๏ผ
// 	const workElement = $('.all-work') //hover ็ถๅ็ด , ๆพ็คบๅพ็

// 	// ๐ฅ๐ฅ้ผ ๆ ็งปๅฅ, ๆพ็คบๅพ็ xxx.hover(()=>{}) ่ฟไธชๆฏ JQuery ็ hover ๆนๆณ๏ผ๏ผ
// 	workElement.hover((e) => {
// 		// ๐ๅๅๆ ทๅผ
// 		gsap.to('.circle-img-container', {
// 			x: e.offsetX, /* ้ผ ๆ ๅ็งป้ */
// 			y: e.offsetY,
// 			opacity: 1,
// 			scale: 1,
// 			duration: 0.2,
// 		})
// 	}, () => { // ้ผ ๆ ็งปๅบ
// 		gsap.to('.circle-img-container', {
// 			opacity: 0,
// 			scale: 0,
// 			duration: 0.2,
// 		})
// 	})

// 	// ้ผ ๆ ไฝ็ฝฎ็งปๅจ
// 	workElement.mousemove((e) => {
// 		// ๐ๅๅๆ ทๅผ
// 		gsap.to('.circle-img-container', {
// 			x: e.offsetX,
// 			y: e.offsetY,
// 		})
// 	})
	
// })





export default function selectedWork() {
	return selectWorktemp;
}

