import { createApp } from 'vue';
import UserInfo from './components/UserInfo.js';

const app = createApp({
    async beforeMount() {
        // Set windows Properties
        this.$win.setAlwaysOnTop(true);
        this.$win.setShowInTaskbar(false);
        this.$win.setResizable(false);
        this.$win.focus();
        this.$win.setPosition("center");

        this.$exec('python', ['/usr/share/Lynx/lynx-desktop-service/Setters/setMenu.py', this.pid]);

        this.$win.on('blur', function (evt) {
            this.$win.close();
        });
    },
    template: `
        <div class="row">

            <UserInfo />

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
        UserInfo
    }
});

app.config.globalProperties.$execSync = require('child_process').spawnSync;
app.config.globalProperties.$exec = require('child_process').spawn;
app.config.globalProperties.$win = nw.Window.get();
app.config.globalProperties.$pid = process.pid.toString();
app.config.globalProperties.$homePath = nw.App.dataPath.concat('/../../../');

app.mount('#menu');