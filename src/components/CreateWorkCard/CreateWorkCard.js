// 动态的生成 works 卡片数据
export default class CreateWorkCard {
	constructor(data) {
		this.cardData = data	
		this.targetEle = document.querySelector('.scroll-card-container')
	}


	//动态的生成 html DOM 的模板字符串
	createWorkTemp (cardData) {
		const htmlText = `
			<div class="scroll-content">
				<div class="block project-card-block">
					<div class="project-card">
						<span class="project-card-title">${cardData.title}</span>
						<img src="${cardData.imgUrl}" alt="">
					</div>
				</div>
			</div>`

		return htmlText
	}



	// 渲染卡片 DOM
	append (_html) {
		this.targetEle.insertAdjacentHTML('beforeend', _html)
	}

	// 便利数据, 生成 DOM
	renderCard () {
		this.cardData.forEach(_card => {
			const _cardDOM = this.createWorkTemp(_card)
			this.append(_cardDOM)
		})
	}

	// 静态初始化方法, 🔥🔥🔥【最终调用就会生成 DOM！】
	static init (data) {
		if(this.createCard instanceof CreateWorkCard) {
			console.log('👀 已经创建过实例了！')
		} else {
			this.createCard = new CreateWorkCard(data)
			this.createCard.renderCard() 
		}
	}


	// 静态属性, 保存数据
	static createCard = null
}