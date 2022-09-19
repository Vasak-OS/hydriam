import AppButton from './abstract/AppButton.js';

export default {
	props: {
		apps: Array,
		filter: String
	},
	computed: {
		appsFiltred() {
			return this.apps.filter(app => app.name.toLowerCase().includes(this.filter) || app.description.toLowerCase().includes(this.filter));
		}
	},
	template: `
        <div class="col-12">
            <div class="tab-content" id="menu-content">
                <div class="container-fluid">
                    <div class="row">
                        <template v-for="app in appsFiltred">
                            <AppButton :app="app" />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    `,
	components: {
		AppButton
	}
};