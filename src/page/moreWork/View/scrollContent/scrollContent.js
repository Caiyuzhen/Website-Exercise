import CreateWorkCard from '../../../../components/CreateWorkCard/CreateWorkCard.js'
import { gsap } from '../../../../../src/libs/GSAP/src/index.js'//核心库
import { ScrollTrigger } from '../../../../../src/libs/GSAP/src/ScrollTrigger.js' //引入插件


// 🔥数据(配置数据就能控制视图！)
const worksData = [
	{
		title: 'Hotel Banumesister',
		imgUrl: '../../imgs/work_01.png',
		services: 'WebDesign & Development',
		domain: 'www.hotelbanumesister.com',
		for: 'KWER',
		finished: 2021
	},
	{
		title: 'Mountain Retreat Lodge',
		imgUrl: '../../imgs/work_02.png',
		domain: 'www.mountainretreatlodge.com',
		for: 'JEQU',
		finished: 2023
	},
	{
		title: 'Island Paradise Resort',
		imgUrl: '../../imgs/work_03.png',
		domain: 'www.islandparadiseresort.com',
		for: 'PKEG',
		finished: 2024
	},
	{
		title: 'Desert Oasis Lodge',
		imgUrl: '../../imgs/work_04.png',
		domain: 'www.desertoasislodge.com',
		for: 'HJFO',
		finished: 2023
	},
	{
		title: 'Country Retreat Inn',
		imgUrl: '../../imgs/work_05.png',
		domain: 'www.countryretreatinn.com',
		for: 'FKPG',
		finished: 2022
	},
	{
		title: 'Seaside Villas',
		imgUrl: '../../imgs/work_06.png',
		domain: 'www.seasidevillas.com',
		for: 'JGWP',
		finished: 2021
	},
	{
		title: 'Cityscape Hotel',
		imgUrl: '../../imgs/work_07.png',
		domain: 'www.cityscapehotel.com',
		for: 'GEPW',
		finished: 2021
	},
]


// 等 DOM 渲染完再执行
document.addEventListener('DOMContentLoaded', function () {
	// 注册插件
	gsap.registerPlugin(ScrollTrigger)


	// 🌟🌟🌟横向滚动效果 ——————————————————————————————————————————————————————————————————————
	// 获取元素并转化为数组
	const sections = gsap.utils.toArray('.block')

	// 要滚动的总长
	let allWidth = 0
	sections.forEach(item => {
		allWidth += item.getBoundingClientRect().width
	})
	// console.log(allWidth)

	// 滚动的视口范围
	let scrollView = document.querySelector('.scroll-content').offsetWidth
	console.log(scrollView)

	
	gsap.to('.scroll-content', { //⚡️ to 为要联动的元素
		x: -allWidth + scrollView,
		// ease: 'none',//取消缓动
		scrollTrigger: { //🍺🍺🍺 核心！！！
			trigger:'.scroll-content', //🔥🔥🔥从哪个元素开始联动(默认起始点就是这个元素) 
			pin:  true, // 🔥把元素定住！ 
			scrub: 1, //🔥🔥摩擦力 
			end: () => "+=" + (allWidth - scrollView), // 🔥🔥可以添加【字符串】【数字】跟【🔥函数】！！这里是为了让（滚动条更短）一些（滚动距离更长）【+= 表示从起始点开始加等于需要移动的距离】
			onLeave: () => { /* 🔥结束滚动的事件 */
				console.log('已经离开了元素(结束滚动）')
				// 改变背景色
				document.body.classList.add('dark')
			},
			onEnterBack: () => { /* 🔥滚动回去的事件 */
				console.log('向回滚动了')
				document.body.classList.remove('dark')
			}
		}
	})


	// 🌟🌟🌟大文字视差效果 ——————————————————————————————————————————————————————————————————————
	let moveArea = document.querySelector('.part-one').getBoundingClientRect().width - innerWidth //视差范围
	console.log(moveArea)

	gsap.to('.text-two',{//⚡️ to 为要联动的元素
		x: -200,
		// ease: 'none',
		scrollTrigger: {
			trigger: '.scroll-content', //🚀🚀 起始点
			scrub: 1,
			start: moveArea + (innerWidth / 4),//🚀🚀距离起始点多远之后才触发【联动效果】,相当于【向左偏移量】, (innerWidth / 4) 表示再露出一点再改变, 根据网站窗口的 1 / 4
			end: '+=' + innerWidth //🔥位移多远才结束【联动效果】
		}
	})
})



// 🔥从类中获得拼接好的 DOM HTML！！再传入下面的模板字符串！
const cardHtml = CreateWorkCard.init(worksData) //🔥🔥🔥生成 card DOM HTML, 然后再嵌入回 Temp 内！！
// console.log(cardHtml)

const scrollContentTemp = `
	<div class="scroll-card-container">

		<!-- 🌟 滚动的内容范围 -->
		<div class="scroll-content">
			<!-- 第一部份 -->
			<div class="block project-cards-block part-one">
				${cardHtml}
			</div>		

			<!-- 第二部分 -->
			<div class="block personal-text part-two">
				<span class="text-one">Personal</span>  
					<br>
				<span class="text-two">Content</span>
			</div>

			<!-- 第三部份 -->
			<div class="block photo-card part-three">
				<img src="../../../../../src/imgs/photo.jpg" alt="">
			</div>
		</div>
	</div>`





export default function scrollContentArea () {
	return scrollContentTemp
}