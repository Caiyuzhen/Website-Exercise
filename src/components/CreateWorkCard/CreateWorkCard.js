// 动态的生成 works 卡片数据
export default class CreateWorkCard {


	// 静态属性, 保存数据
	static createCard = null


	constructor(data) {
		this.cardData = data	
		// this.targetEle = document.querySelector('.project-cards-block')
	}


	//动态的生成 html DOM 的模板字符串
	createWorkTemp (cardData) {
		const htmlText = `
			<div class="project-card-wrapper">

				<span class="project-card-title">${cardData.title}</span>

				<img src="${cardData.imgUrl}" alt="">

				<div class="project-info-container">
					<div class="info-row">
						<span class="info-name">Service</span>
						<span class="info-detail">${cardData.services}</span>
					</div>

					<span class="border"></span>

					<div class="info-row">
						<span class="info-name">Domain</span>
						<span class="info-detail">${cardData.domain}</span>
					</div>

					<span class="border"></span>

					<div class="info-row">
						<span class="info-name">For</span>
						<span class="info-detail">${cardData.for}</span>
					</div>

					<span class="border"></span>

					<div class="info-row">
						<span class="info-name">Finished</span>
						<span class="info-detail">${cardData.finished}</span>
					</div>
				</div>
			</div>`
		return htmlText
	}



	// // 渲染卡片 DOM
	// append (_html) {
	// 	this.targetEle.insertAdjacentHTML('beforeend', _html)
	// }

	// ⚡️⚡️⚡️便历数据, 拼接生成 DOM, 并返回（就不在 class 内部进行渲染了）, 避免出现 undefined 的情况！！
	renderCard () {
		let cardHtml = ''
		this.cardData.forEach(_card => {
			const _cardDOM = this.createWorkTemp(_card)
			// this.append(_cardDOM)
			cardHtml += _cardDOM
		})

		return cardHtml //返回渲染好的 DOM 结构！
	}


	// 静态初始化方法, 🔥🔥🔥【最终调用就会生成 DOM！】
	static init (data) {
		if(this.createCard instanceof CreateWorkCard) {
			console.log('👀 已经创建过实例了！')
		} else {
			this.createCard = new CreateWorkCard(data)
			const html = this.createCard.renderCard()
			// const cardHtml = this.createCard.append(html)
			return html
			// this.createCard = new CreateWorkCard(data)
			// this.createCard.renderCard() 
		}
	}

}