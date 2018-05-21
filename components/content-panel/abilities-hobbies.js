let cont1 = Vue.extend({
  template : `
						<div class="panel panel-danger">
							<div class="panel-heading">
								<div class="panel-title">
									<div href="#accordionOne" data-toggle='collapse' data-parent='#accordion'>能力与爱好<span class="glyphicon glyphicon-chevron-down pull-right"></span></div>
								</div>
							</div>
							<div id="accordionOne" class="panel-collapse collapse in">
								<div class="panel-body">
									<div class="list-group">
										<div class="row">
											<div class="col-sm-6 text-center">
												<a href="javascript:;" class="list-group-item list-group-item-success">自学能力强，热爱前端</a>
												<a href="javascript:;" class="list-group-item list-group-item-info">熟悉使用 <code>Photoshop</code> 等绘图软件</a>
												<a href="javascript:;" class="list-group-item list-group-item-danger"><code>html+css</code> 的使用了然于胸</a>
												<a href="javascript:;" class="list-group-item list-group-item-warning">熟悉使用 <code>html5+css3</code> 新特性</a>
												<a href="javascript:;" class="list-group-item list-group-item-success">掌握 <code>canvas</code> 绘图新方法</a>
											</div>
											<div class="col-sm-6 text-center">
												<a href="javascript:;" class="list-group-item list-group-item-success">大爱并理解响应式布局</a>
												<a href="javascript:;" class="list-group-item list-group-item-info">熟练使用 <code>bootstrap</code> 前端框架</a>
												<a href="javascript:;" class="list-group-item list-group-item-danger">掌握 <code>Jquery</code> 这个神奇方便的库</a>
												<a href="javascript:;" class="list-group-item list-group-item-warning">有一定的 <code>Java</code> 编程基础</a>
												<a href="javascript:;" class="list-group-item list-group-item-success">有一定的设计 <code>审美</code> ，完美主义强迫症</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
              `
});
Vue.component('abilities-hobbies',cont1);