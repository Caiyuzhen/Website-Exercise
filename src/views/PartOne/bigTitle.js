const bigTitleInfo = `
	<div class="info-header-detail">
		<span>HI 👋</span>
		<span>I'M ZENO, FRONTEDN</span>
		<span>DEVELOPER AND DESIGNER</span>
		<!--  
			data-bigdot 不能加到行内元素上, 加上也没效果！因为行内元素没有一个矩形的结构(没有长宽）！ 
			行内元素要有宽高的话, 可以用 inline-block 或者 block 来替换！!这样就有宽高了！
		-->
		<div class="info-header-more" data-bigdot="true">
			more about me
		</div>
	</div>
`

export default function bigTitle () {
	return bigTitleInfo
}