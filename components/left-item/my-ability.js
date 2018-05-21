let ability = Vue.extend({
  template : `
            <div class="panel panel-info noprint">
				<div class="panel-heading">能力技能
					<a class="glyphicon glyphicon-refresh pull-right" style="cursor:pointer" id="refresh"></a>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-sm-3">
							<span class="text-warning">HTML5</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-warning active pro1" ></div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<span class="text-info">CSS3</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-info active pro2" ></div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<span class="text-warning">JScript</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-warning active pro3" ></div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<span class="text-info">Jquery</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-info active pro4" ></div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<span class="text-warning">Ajax</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-warning active pro5" ></div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<span class="text-primary">BootStrap</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-primary active pro6" ></div>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<span class="text-info">Vue</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-primary active pro8" ></div>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-sm-3">
							<span class="text-danger">PS</span>
						</div>
						<div class="col-sm-9">
							<div class="progress">
								<div class="progress-bar progress-bar-striped progress-bar-danger active pro7" ></div>
							</div>
						</div>
					</div>
				</div>
			</div>
              `
});
Vue.component('my-ability',ability);