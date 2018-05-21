let about = Vue.extend({
  template : `
            <div class="curved_box">
				<p><h2 class="text-primary">Follitude</h2></p>
				<h3>一种无厘头式自娱自乐的状态。</h3>
			</div>
              `
});
Vue.component('follitude',about);