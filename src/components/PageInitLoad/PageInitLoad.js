import loadingPage from './../../views/Loading/loadingPage.js'


// ð¥ð¥ç¨æ¥ååå§åçå¨ç»ææï¼
export default function PageInitLoad () {
	// ð¥ð¥ð¥ JQuery ä¾¦æµé¡µé¢ DOM åç´ çå è½½, å¹¶å¨å è½½å®æåæ§è¡åè°å½æ°, ç±»ä¼¼ DOMContentLoaded, ä¸è¬ä¸é½ç¨ DOMContentLoaded ï¼DOM æ æå»ºå®æçå°±å¯ä»¥æ§è¡ï¼, èä¸ä¼ç¨ onload, å ä¸º onload ä¼ç­å°ææèµæºé½å è½½å®æ¯ææ§è¡ ï¼ä¼æ¯è¾æ¢ï¼ 
	$(function() { //åè°
		$('.loading-block').addClass('loading-block-move') // loading é¡µé¢ä½ç§»å¨ç»
	


		// allContainer è·åææéè¦è¢«è§å¯çå¯¹è±¡
		const allContainer = $('.init-Ref')//åè·åææè¢«éèçæ¨¡å



		// è·å¾ downOne åç´ ï¼ æ·»å  transitionend äºä»¶, ç¨æ¥çå¬å¨ç»ç»æåæ§è¡çåè°
		const downOne = $('.downOne')
		downOne.on('transitionend', () => {
			// console.log('loading å¨ç»ç»æ');

			// â¡ï¸â¡ï¸â¡ï¸ä¸ºäºé¿åå¤ªå¿«å°±ãæ¸ç°ãäº,æä»¥ setTimeout ä¸ä¸ (ðä¸ä¸¥è°¨çåæ³ï¼ðä¸¥è°¨çåæ³åºè¯¥ç­ loading é¡µé¢ transitionend äºä»¶ç»æååæ§è¡)
			// setTimeout(() => {

				// ð¥ð¥ä¸ãå»ºç«äº¤åè§å¯å¨, ç¨æ¥çå¬åç´ æ¯å¦è¿å¥è§å£ååä»ä¹å¨ä½
				const IObserver = new IntersectionObserver((entries) => {
					// console.log(entries) //æ 3 ä¸ªåç´ , æ¯ä¸ªæ°ç»
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							// æ·»å æ¸å¥å¨ç»
							console.log(entry.target) //ð¥ target å°±æ¯è¿å¥è§å¯åºåçåç´ 
							$(entry.target).addClass('animate__animated animate__fadeIn') //ð¥ç¨ animate.css åºçå¨ç»
						}
					})	
				})


				/* ð äºãå·ä½è§å¯åªä¸ªåç´ , ä¼è§¦åä¸é¢ entries çåè°, ç¨ jQuery ç each æ¹æ³ç»æ¯ä¸ªåç´ é½æ·»å ä¸è§å¯å¨ */
				allContainer.each((index, element) => { //â¡ï¸â¡ï¸â¡ï¸element å°±æ¯éååºæ¥ç DOM åç´ , observer(XXX)  è¦ä¼ å¥çä¹æ¯ DOM åç´ ï¼
					IObserver.observe(element) /* ð¥ð¥ð¥ç» DOM åç´ æ·»å è§å¯å¨ï¼ï¼ */
					// console.log(index);
				})

			// },2000)
		})
	})


	return loadingPage ()
}