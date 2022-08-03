export default {
    props: {
        app: Object
    },
    methods: {
        openApp() {
            this.$exec('/usr/share/Lynx/lynx-desktop-service/script/runapp', [this.app.path]);
            this.$win.close();
        }
    },
    template: `
        <button class="btn col-2 btn-app"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            :title="app.name"
            @click="openApp()">
            <img :src="'file://' + app.icon" class="img-fluid" style='width:100%;' />
            <span class="name-app text-center">{{app.name}}</span>
            <span class='text-muted' style='display:none;'>{{app.description}}</span>
            <span style='display:none;'>{{app.keywords}}</span>
        </button>
    `
}