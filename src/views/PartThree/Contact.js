const lifeVideo = 'src/video/things.mp4'

// 点击切换视频的开关
export function changeVideo () {
	document.addEventListener('DOMContentLoaded', function () {
		$('.footer-info-right').click(function () {
			$(this).toggleClass('ticked')
		})
	})
}



// 渲染第三部分
const contactTemp = `
	<div class="footer">
		<span class="footer-title">Contact</span>

		<div class="footer-info">
			<div class="footer-info-left">
				<div>Zeno Cai</div>
				<div data-bigdot="true">📮 xxxxxx@gmail.com</div>
				<div data-bigdot="true">🔗 Linkedin</div>
			</div>

			<div class="footer-info-right">
				<div>You want to know more about me?</div>
				<div class="footer-info-right-box">
					<div data-bigdot="true">👉 Here are a few things I like!</div>
					<!-- 开关图标 -->
					<span class="footer-info-right-icon"></span>
				</div>
				<video 
					src="${lifeVideo}" 
					autoplay
					loop
					muted
					>
				</video>
			</div>
		</div>

		<div class="font-info-talk" data-bigdot="true">
			Let's talk
		</div>
	</div>
`
export default function Contact() {
	return contactTemp
}