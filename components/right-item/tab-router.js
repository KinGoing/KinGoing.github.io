let tab = Vue.extend({
  template : `
            <div>
							<ul class="nav nav-tabs" role="tablist">
								<li role="presentation" class="active"><a href="#time" data-toggle="tab">Time</a></li>
								<li role="presentation"><a href="#music" data-toggle="tab">Music</a></li>
								<li role="presentation"><a href="#love" data-toggle="tab">Love</a></li>
							</ul>

							<!-- Tab panes -->
							<div class="tab-content">
								<div role="tabpanel" class="tab-pane active" id="time">
									<canvas  width="200" height="200" id="clock" >您的浏览器不支持canvas</canvas>
								</div>
								<div role="tabpanel" class="tab-pane" id="music">
									<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=345 height=210 src="http://music.163.com/outchain/player?type=0&id=394184552&auto=0&height=430"></iframe>
								</div>
								<div role="tabpanel" class="tab-pane" id="love">
									<iframe frameborder="no" scrolling='no' border="0" marginwidth="0" marginheight="0" width=345 height=200 src="love.html"></iframe>
								</div>
							</div>
						</div>
              `
});
Vue.component('tab-nav',tab);