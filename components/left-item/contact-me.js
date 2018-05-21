let contact = Vue.extend({
  template : `
            <div class="panel panel-primary">
				<div class="panel-heading">联系我<span class="glyphicon glyphicon-question-sign pull-right infos" data-container="body" data-toggle="popover" data-placement="top" data-content="您可以在此处直接与我交流！" placement='top'></span></div>
				<div class="panel-body">
					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=415767688&site=qq&menu=yes"><img border="0" style="height: 30px;width: 30px" src="img/qq.png" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
					<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=HHpzcHB1aGl4eTJ2eW5cbW0yf3Nx" style="text-decoration:none;"><img style="height: 30px;width: 30px" src="img/email.png"/></a>
				</div>
			</div>
              `
});
Vue.component('contact-me',contact);