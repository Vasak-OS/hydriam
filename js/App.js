import { createApp } from 'vue';

const app = createApp({
    async beforeMount() {
        // Set windows Properties
        this.$win.setAlwaysOnTop(true);
        this.$win.setShowInTaskbar(false);
        this.$win.setResizable(false);
        this.$win.focus();
        this.$win.setPosition("center");

        this.$exec('python', ['/usr/share/Lynx/lynx-desktop-service/Setters/setMenu.py', `${this.pid.toString()}`]);
    },
    template: `
        <div class="row">

        <!-- Informacion del usuario -->
        <div id="user-info" class="col-12 text-center">
            <div class="container-fluid">
            <div class="row">
                <div class="col-4 text-center">
                <a data-bs-toggle="tooltip" data-bs-placement="left" title="Shutdown" href="#"
                    class="btn btn-primary btn-session" onclick="shutdown();">
                    <img src="file:///usr/share/Lynx/lynx-menu/img/shutdown.svg" class="img-fluid" />
                </a>
                <a data-bs-toggle="tooltip" data-bs-placement="left" title="Reboot" href="#"
                    class="btn btn-primary btn-session" onclick="reboot();">
                    <img src="file:///usr/share/Lynx/lynx-menu/img/reboot.svg" class="img-fluid" />
                </a>
                </div>
                <div class="col-4" id="imgDiv">
                <img src="" class="img-fluid user-img" id="user-img" alt="user" />
                </div>
                <div class="col-4 text-center">
                <a data-bs-toggle="tooltip" data-bs-placement="left" title="Logout" href="#"
                    class="btn btn-primary btn-session" onclick="logout();">
                    <img src="file:///usr/share/Lynx/lynx-menu/img/logout.svg" class="img-fluid" />
                </a>
                <a data-bs-toggle="tooltip" data-bs-placement="left" title="Suspend" href="#"
                    class="btn btn-primary btn-session" onclick="suspend();">
                    <img src="file:///usr/share/Lynx/lynx-menu/img/suspend.svg" class="img-fluid" />
                </a>
                </div>
            </div>
            </div>
        </div>

        <!-- Search section -->
        <div class="col-12" id="searc-div">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" id="search"
                onchange="searchApps()" aria-describedby="icon-search" />
            <span class="input-group-text" id="icon-search">🔍</span>
            </div>
        </div>

        <!-- Menu section -->
        <div class="col-12">
            <div class="tab-content" id="menu-content">
            </div>
            <ul class="nav nav-pills nav-justified" id="menu-category" role="tablist"></ul>
        </div>

        </div>
    `,
    components: {

    }
});

app.config.globalProperties.$execSynx = require('child_process').spawnSync;
app.config.globalProperties.$exec = require('child_process').spawn;
app.config.globalProperties.$win = nw.Window.get();
app.config.globalProperties.$pid = process.pid;

app.mount('#menu');