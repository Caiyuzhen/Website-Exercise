import CreateWorkCard from '../../../../components/CreateWorkCard/CreateWorkCard.js'


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




const scrollContentTemp = `
	<div class="scroll-card-container">
		<!-- 🔥🔥调用 init 【原型方法】并传入数据！ -->
		${
			document.addEventListener('DOMContentLoaded', () => {
				CreateWorkCard.init(worksData)
			})
		}
	</div>
`

export default function scrollContentArea () {
	return scrollContentTemp
}