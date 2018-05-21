let cont5 = Vue.extend({
  template : `
           <div class="panel panel-success">
			<div class="panel-heading">
				<div class="panel-title">
					<div href="#accordionFive" data-toggle='collapse' data-parent='#accordion'>PS项目<span class="glyphicon glyphicon-chevron-down pull-right"></span></div>
				</div>
			</div>
				<div id="accordionFive" class="panel-collapse collapse">
					<div class="panel-body">
						<div class="alert alert-warning alert-dismissible" role="alert">
					<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<strong>注：</strong> 下列样张已投入商用，为保证客户利益，仅作为展示，禁止一切转载及其他商业活动！违者必究！
				</div>
						<div class='row'>
							<div class="col-sm-3">
								<img class="img-responsive img-rounded img-thumbnail oimg" src="img/yoga01.jpg" alt="海报" />
							</div>
							<div class="col-sm-3">
								<img class="img-responsive img-rounded img-thumbnail oimg" src="img/yoga02.jpg" alt="单页" />
							</div>
							<div class="col-sm-3">
								<img class="img-responsive img-rounded img-thumbnail oimg" src="img/yoga03.jpg" alt="单页" />
							</div>
							<div class="col-sm-3">
								<img class="img-responsive img-rounded img-thumbnail oimg" src="img/yoga04.jpg" alt="单页" />
							</div>
						</div>
						<div class="row">
							<div class="col-sm-3">
								<img class="img-responsive img-rounded img-thumbnail oimg" src="img/yoga05.jpg" alt="单页" />
							</div>
							<div class="col-sm-3">
								<img class="img-responsive img-rounded img-thumbnail oimg" src="img/yoga06.jpg" alt="单页" />
							</div>
						</div>
					</div>
				</div>
			</div>
              `
});
Vue.component('ps-project',cont5);