export default {
	props: {
		title: String,
		img: String,
		cmd: String
	},
	methods: {
		acction() {
			this.$exec(this.cmd);
			this.$win.close();
		}
	},
	template: `
        <a data-bs-toggle="tooltip" data-bs-placement="left" :title="title" href="#"
            class="btn btn-primary btn-session" @click="acction();">
            <img :src="img" class="img-fluid" />
        </a>
    `
};