//动态生成 works 列表
export default class WorkList {

	constructor(data) {
		this.listData = data //🔥🔥🔥保存静态属性 -> 外部传入的 data 数据
		// this.targetElement = document.querySelector('.works-text-container') //⚡️⚡️⚡️要插入 html 的目标容器
	}

	//动态的生成 html DOM 的模板字符串
	createWorkDOM (workData) {//🔥原型方法
		const htmlText = `
			<div class="all-work">
						
				<div class="all-work-text-box"> <!-- 这一层用来裁切元素 -->
					<!-- 左侧主目录, 🌟🌟数字在 css 内的【伪元素】去自动生成！！ -->
					<a href="${workData.url}" class="left-work-titles-info">${workData.title}</a>

					<!-- 跑马灯文字 -->
					<span class="text-move">${workData.subTitle}</span>
				</div>

				<!-- 图片 -->
				<div class="circle-img-container">
					<img src="${workData.imgUrl}" alt="">
				</div>
			</div>`

		return htmlText //🚀🚀返回动态生成的 DOM！
	}


	//渲染 DOM 到原来的 html 上【用 insertAdjacentHTML 】方法可以把文本解析问 Element 元素, 然后插入到 DOM 中！！并且不会破坏现有的元素！！
	// append (_html) {
	// 	this.targetElement.insertAdjacentHTML('beforeend', _html) //🚀🚀🚀🔥🔥插入 DOM, beforeend 表示插入到元素自身的后面！！
	// }


	// 🔥🔥遍历数据, 把数据传入 createWorkDOM () 方法, 生成 DOM, 然后插入到原来的 html 中
	renderWorkList () {
		let workListHtml = ''
		this.listData.forEach(_work => {//便利的就是外部传入的数据
			const _htmlDOM = this.createWorkDOM(_work) //🔥🔥渲染好数据的 DOM, 然后再传回到 append 方法中去挂载回 DOM 树上！
			// this.append(_html_)
			workListHtml += _htmlDOM
		})

		return workListHtml //返回渲染好的 DOM 结构！
	}


	// 静态初始化方法, 🔥🔥🔥【最终调用就会生成 DOM！】
	static init(data) { //🔥🔥！！data 是外部传入的数据
		if(this.createList instanceof WorkList) {//⚡️⚡️单实例的模式, 说明已经创建过实例了, 避免重复创建
			console.log('👀 已经创建过实例了！')
		} else {
			this.listDOM = new WorkList(data) //🔥🔥创建一个实例！！！  静态方法、静态属性的 this 指向类本身, 而不是实例, 原型方法的 this 访问的是实例！！!
			const html = this.listDOM.renderWorkList()
			return html
		}
	}


	// 静态属性, 保存数据
	static createList = null
}