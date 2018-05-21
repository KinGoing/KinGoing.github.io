let header = Vue.extend({
  template : `
            <header>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="container">
						<div class="navbar-header">
							<div class="navbar-brand">Follitude.Jerps</div>
		
							<button type="button" class="navbar-toggle" data-toggle='collapse' data-target='#divNav'>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						
						<div id="divNav" class="collapse navbar-collapse">
							<ul class="nav navbar-nav navbar-right">
								<li id="icon">
									<div class="btn-group navbar-btn">
										<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">微信 <span class="caret"></span>
										</button>
										<ul class="dropdown-menu imenu">
											<li><img class="img-responsive img-rounded img-thumbnail" src="img/weixin.jpg" alt="微信"></li>
										</ul>
									</div>
		
									<div class="btn-group">
										<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">QQ <span class="caret"></span>
										</button>
										<ul class="dropdown-menu imenu">
											<li><img class="img-responsive img-rounded img-thumbnail" src="img/qq.jpg" alt="QQ"></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
              `
});
Vue.component('my-header',header);