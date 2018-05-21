let cont4 = Vue.extend({
  template : `
           <div class="panel panel-warning">
				<div class="panel-heading">
					<div class="panel-title">
						<div href="#accordionFour" data-toggle='collapse' data-parent='#accordion'>Web项目<span class="glyphicon glyphicon-chevron-down pull-right"></span></div>
					</div>
				</div>
				<div id="accordionFour" class="panel-collapse collapse">
					<div class="panel-body">
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
							<!-- Indicators -->
							<ol class="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
								<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								<li data-target="#carousel-example-generic" data-slide-to="2"></li>
								<li data-target="#carousel-example-generic" data-slide-to="3"></li>
								<li data-target="#carousel-example-generic" data-slide-to="4"></li>
								<li data-target="#carousel-example-generic" data-slide-to="5"></li>
							</ol>

							<!-- Wrapper for slides -->
							<div class="carousel-inner" role="listbox">
								<div class="item active demo1">
									<img src="img/demo0.jpg" alt="demo0">
									<div class="carousel-caption" style="position: static; ">
										<h3 class="text-danger">咖品汇商城（主移动端）</h3>
										<p>完善的购物流程，人性化的互动，优雅大气的风格，可以 <h3 class="text-info">"购我想购"!</h3></p>
									</div>
								</div>
								<div class="item demo2">
									<img src="img/demo1.jpg" alt="demo1">
									<div class="carousel-caption" style="position: static; ">
										<h3 class="text-primary">一种整洁高效的后台管理系统</h3>
										<p>让信息展示与人工操作相互结合的系统，采用响应式布局，让您 <h3 class="text-info">"随心所欲"!</h3></p>
									</div>
								</div>
								<div class="item demo3">
									<img src="img/demo2.jpg" alt="demo2">
									<div class="carousel-caption" style="position: static;">
										<h3 class="text-danger">一个当今主流的浏览器简述平台</h3>
										<p>信息与时俱进，操作简洁流畅！主流的响应式布局，让您 <h3 class="text-info">"想下就下"!</h3></p>
									</div>
								</div>
								<div class="item demo4">
									<img src="img/demo3.jpg" alt="demo3">
									<div class="carousel-caption" style="position: static;">
										<h3 class="text-primary">一个看似简单、实现较难的虚拟"画廊"</h3>
										<p>优美诗篇，图文并茂，动画如真，随机的排列，让您 <h3 class="text-info">"停不下来"！</h3></p>
									</div>
								</div>
								<div class="item demo5">
									<img src="img/demo4.jpg" alt="demo4">
									<div class="carousel-caption" style="position: static;">
										<h3 class="text-warning">一个整页滑动版的个人主页</h3>
										<p>内容布局恰到好处，动画如鱼游水，主流HTML5+CSS3网页，让您 <h3 class="text-info">"乐享其中"</h3></p>
									</div>
								</div>
								<div class="item demo6">
									<img src="img/demo5.jpg" alt="demo5">
									<div class="carousel-caption" style="position: static;">
										<h3 class="text-danger">另一个整页滑动版的个人主页</h3>
										<p>版页新颖，图文镶套，大胆红灰配色 <h3 class="text-info">挑战您的视觉！</h3></p>
									</div>
								</div>
							</div>

							<!-- Controls -->
							<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span class="sr-only">上一张</span>
							</a>
							<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span class="sr-only">下一张</span>
							</a>
						</div>
					</div>
				</div>
			</div>
              `
});
Vue.component('web-project',cont4);