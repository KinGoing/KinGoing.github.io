let cont3 = Vue.extend({
  template : `
           <div class="panel panel-success">
						<div class="panel-heading">
							<div class="panel-title">
								<div href="#accordionThree" data-toggle='collapse' data-parent='#accordion'>工作与经历<span class="glyphicon glyphicon-chevron-down pull-right"></span></div>
							</div>
						</div>
						<div id="accordionThree" class="panel-collapse collapse">
							<div class="panel-body">
								<div class="list-group">
									<h4 class="text-primary ischool"><span class="glyphicon glyphicon-map-marker"></span> 栖巢集团——咖品汇（安徽）电子商务</h4><hr>
									<h5 class="text-danger"><span class="glyphicon glyphicon-tasks"></span> web前端开发工程师（2017.6~2018.2）</h5>
									<a href="javascript:;" class="list-group-item list-group-item-success"><strong>负责公司网站的日常维护：</strong><span class="glyphicon glyphicon-arrow-right pull-right"> 满足了公司发展需求</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-info"><strong>对已有网站进行优化：</strong><span class="glyphicon glyphicon-arrow-right pull-right"> 网站性能得以提高</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-warning"><strong>完善用户体验与业务需求：</strong><span class="glyphicon glyphicon-arrow-right pull-right"> 体验更人性化</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-danger"><strong>独立完成栖巢集团旗下电子商务线上主移动端商城：</strong><span class="glyphicon glyphicon-arrow-right pull-right"> 两个月内完成完整的线上商城</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-success"><strong>独立完成栖巢集团合作、加盟商的进货申请后台前台页面：</strong><span class="glyphicon glyphicon-arrow-right pull-right"> 半月内完成完整的进货申请平台</span></a>
									<a href="javascript:;" class="list-group-item list-group-item-info"><strong>独立测试、调试所有相关网站：</strong><span class="glyphicon glyphicon-arrow-right pull-right"> 独立完成测试及相关、并优化</span></a>
									<a href="http://www.cupinn.com/cupinn-app-mall/" class="list-group-item">注：商城、进货平台现正常运营中……<strong style="color: #a94442">（点击进入）</strong></a>
								</div>
							</div>
						</div>
					</div>
              `
});
Vue.component('work-experience',cont3);