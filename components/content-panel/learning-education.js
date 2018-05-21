let cont2 = Vue.extend({
  template : `
           <div class="panel panel-info">
						<div class="panel-heading">
							<div class="panel-title">
								<div href="#accordionTow" data-toggle='collapse' data-parent='#accordion'>学习与教育<span class="glyphicon glyphicon-chevron-down pull-right"></span></div>
							</div>
						</div>
						<div id="accordionTow" class="panel-collapse collapse">
							<div class="panel-body">
								<div class="list-group">
									<h4 class="text-primary ischool"><span class="glyphicon glyphicon-map-marker"></span> 安徽新华学院</h4><hr>
									<h5 class="text-danger"><span class="glyphicon glyphicon-tasks"></span> 网络工程专业（2014.9~2018.7）</h5>
									<a href="javascript:;" class="list-group-item list-group-item-success"><strong>校网络中心协管员：</strong>协助老师负责校园宽带和网络安全
									<span class="glyphicon glyphicon-arrow-right pull-right"> 学习和掌握了许多计算机网络相关知识，获老师多次表扬</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-info"><strong>校图书馆管理员：</strong>协助老师管理和整理校图书馆。
									<span class="glyphicon glyphicon-arrow-right pull-right"> 静下心来，读了诸多文学、专业的书籍。</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-warning"><strong>班级组织委员：</strong>策划和组织班级活动及相关。
									<span class="glyphicon glyphicon-arrow-right pull-right"> 增强锻炼了交际和策划能力。</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-danger"><strong>自学1：</strong>大二自学<code>移动android</code>开发技术。
									<span class="glyphicon glyphicon-arrow-right pull-right"> 对移动android开发流程有了深刻了解，后开设的android专业课全优！</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-success"><strong>自学2：</strong>大三自学<code>前端web</code>开发技术。
									<span class="glyphicon glyphicon-arrow-right pull-right"> 至今已学习近一年的时间，web学习渐入佳境！</span></a>
								</div>
							</div>
						</div>
           </div>
              `
});
Vue.component('learning-education',cont2);