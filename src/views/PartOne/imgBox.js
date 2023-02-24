const avatarImg_01 = 'src/imgs/avatar-01.jpg' //🔥路径需要从最外侧调用！
const avatarImg_02 = 'src//imgs/avatar-02.jpg' //🔥路径需要从最外侧调用！
const circleText = 'src//imgs/circle-04.svg' //🔥路径需要从最外侧调用！
const arrowIcon = 'src//imgs/arrow.svg' //🔥路径需要从最外侧调用！


const imgBox = `
	<div class="info-header-imgs">
		<div class="info-header-imgs-box">
			<img src="${avatarImg_01}" alt="" class="show-avatar">
			<img src="${avatarImg_02}" alt="">
		</div>
		<div class="info-header-imgs-rotate" data-bigdot="true">
			<img src="${arrowIcon}" alt="" class="arrow-icon">
			<img src="${circleText}" alt="" class="circle-text">
		</div>
	</div>
`

export default function imgBoxs () {
	return imgBox
}