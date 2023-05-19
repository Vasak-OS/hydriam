export default {
	props: {
		category: String,
		image: String,
		description: String
	},
	computed: {
		name() {
			return this.category.replaceAll(' ', '-').toLowerCase();
		},
		isActive() {
			return this.name == 'accessories';
		}
	},
	template: `
    <li class="nav-item" role="presentation">
        <button class="nav-link" :class="{active:isActive}" data-bs-toggle="tab" role="tab" aria-selected="true" :data-bs-target="'#' + name" :id="name + '-tab'">
            <img :src="'file://' + image" data-bs-toggle="tooltip" data-bs-placement="left" :title="description" class="img-fluid category-img" />
        </button>
    </li>
    `
};