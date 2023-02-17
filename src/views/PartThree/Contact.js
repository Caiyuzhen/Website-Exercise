const lifeVideo = './video/things.mp4'

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

		<span class="font-info-talk">
			Let's talk
		</span>
	</div>
`
export default function Contact() {
	return contactTemp
}