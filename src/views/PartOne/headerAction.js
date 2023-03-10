// å¼å¥å¾ç
const circleBadgeNormal = 'src/imgs/cssda-special-kudos-normal.png' //ð¥è·¯å¾éè¦ä»æå¤ä¾§è°ç¨ï¼
const circleBadgeHover = 'src/imgs/cssda-special-kudos-hover.png' //ð¥è·¯å¾éè¦ä»æå¤ä¾§è°ç¨ï¼


// åæ¢ä¸»é¢ï¼åæ¢æé®æ ·å¼ç¨ CSS åç, äºä»¶åæ¯å ä¸ .old-school ç±»åä¾¿å¯ä»¥åæ¢ï¼
// ð¥ð¥éè¦ç­åç´ å è½½å®æ¯åæè½ç»å®äºä»¶ï¼
document.addEventListener('DOMContentLoaded', () => {
	$('.info-header-nav-badge-switch').click((e) => {
		// console.log(e.target)
		// åæ¢ä¸»é¢, ç±äºjQuery ç bug, label åä¼äºä»¶åæ³¡æ§è¡ä¸¤æ¬¡, æä»¥å ä¸å¤æ­, åªæç¹å»çä¸æ¯ label åçåç´ æä¼æ§è¡åæ¢ä¸»é¢çæä½ï¼!
		if(!e.target.classList.contains('checkBoxSwitch')) {
			$('body').toggleClass('old-school')
		}
	})
})

	

const temp = `
	<div class="info-header-nav">
			<span class="info-header-nav-title-box">
				<span class="info-header-nav-title">Portfolio</span>
			</span>
		<div class="info-header-nav-badge">

			<!-- ð¥ð¥ð¥ææ è®°çæè·¯: åªè¦æ data-bigdot="true" è¿ä¸ªå±æ§çåç´  hover ä¸å»åé½ä¼æ¹å Point çæ ·å¼ï¼-->
			<!-- åªè¦å ä¸ data-bigdot="true" å°±æ hover ææ!-->
			<div data-bigdot="true" class="info-header-nav-badge-box">
				<img class="circleBadgeNormal" src="${circleBadgeNormal}" alt="">
				<img class="circleBadgeHover" src="${circleBadgeHover}" alt="">
			</div>
			
			<!-- æé® -->
			<div class="info-header-switch-container">
				<!-- å³ä¾§å¼å³ -->
				<!-- åªè¦å ä¸ data-bigdot="true" å°±æ hover ææ!-->
				<div data-bigdot="true" class="info-header-nav-badge-switch">
					<!-- ð¥ð¥ð¥å¼å³å°æå·§, æ checkbox type ç input æ¾å° label åï¼ ãç¹å» switch-barã ä¹è½æ¹å ãcheckboxãçç¶æï¼ï¼å ä¸ºå¨ label ä¸æ´ä¸ªä¼èªå¨ç»å®ï¼ -->
					<label>
						<input class="checkBoxSwitch" type="checkbox">
						<div class="switch-bar"></div>
					</label>
				</div>
				<!-- info -->
				<div class="info-header-nav-badge-switch-info">
					<span class="switch-to-old">Switch to Old School</span>
					<span class="switch-to-new">Switch to New Style</span>
				</div>
			</div>
		</div>
	</div>
`

export default function headerAction() {
	return temp
}