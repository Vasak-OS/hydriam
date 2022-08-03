import { createApp } from 'vue';
import FilterTab from './components/FilterTab.js';
import MenuSection from './components/MenuSection.js';
import Search from './components/Search.js';
import UserInfo from './components/UserInfo.js';

const app = createApp({
    data() {
        return {
            filter: '',
            menuData: JSON.parse(this.$execSync('python', ['/usr/share/Lynx/lynx-desktop-service/Lynx/getMenu.py']).stdout.toString().replaceAll('\'', '\"'))
        }
    },
    computed: {
        apps() {
            let apps = [];
            for (let category in this.menuData) {
                const appMenu = this.menuData[category];
                apps = apps.concat(appMenu['apps']);
            }
            return apps;
        }
    },
    async beforeMount() {
        // Set windows Properties
        this.$win.setAlwaysOnTop(true);
        this.$win.setShowInTaskbar(false);
        this.$win.setResizable(false);
        this.$win.focus();
        this.$win.setPosition("center");

        this.$exec('python', ['/usr/share/Lynx/lynx-desktop-service/Setters/setMenu.py', this.pid]);

        this.$win.on('blur', (evt) => {
            this.$win.close();
        });
    },
    template: `
        <div class="row">

            <UserInfo />
            <Search v-model:filter="filter" />
            <template v-if="filter !== ''">
                <FilterTab :apps="apps" :filter="filter" />
            </template>
            <template v-else>
                <MenuSection :menuData="menuData" />
            </template>

        </div>
    `,
    components: {
        FilterTab,
        MenuSection,
        Search,
        UserInfo
    }
});

app.config.globalProperties.$execSync = require('child_process').spawnSync;
app.config.globalProperties.$exec = require('child_process').spawn;
app.config.globalProperties.$win = nw.Window.get();
app.config.globalProperties.$pid = process.pid.toString();
app.config.globalProperties.$homePath = nw.App.dataPath.concat('/../../../');

app.mount('#menu');

document.addEventListener('keyup', keyUpEvents);

function keyUpEvents(evt) {

    switch (evt.code) {
        case 'Escape':
            app.config.globalProperties.$win.close();
            break;
        default:
            break;
    }

}