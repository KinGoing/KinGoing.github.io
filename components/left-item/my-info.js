let info = Vue.extend({
  template : `
            <div class="panel panel-success">
							<div class="panel-heading">个人信息<span class="glyphicon glyphicon-question-sign pull-right infos" data-container="body" data-toggle="popover" data-placement="top" data-content="关于我的一些个人信息！" placement='top'></span></div>
							<div class="panel-body">
								<img class="img-responsive img-rounded img-thumbnail iimg" src="img/mine.jpg" alt="我的头像，是我本人呢">
								<p><h3 id="myName" class="text-center text-primary">Jerps</h3></p>
								<address>
									<span class="glyphicon glyphicon-home" title="Address"></span>
									<code>安徽&nbsp;芜湖</code><br>
									<span class="glyphicon glyphicon-file" title="PostalCode"></span>
									<code>238321</code><br>
									<span class="glyphicon glyphicon-signal" title="QQ"></span>
									<code>415767688</code><br>
									<span class="glyphicon glyphicon-envelope" title="Email"></span>
									<code>follitude.jer@qq.com</code>
								</address>
							</div>
						</div>
              `
});
Vue.component('my-info',info);