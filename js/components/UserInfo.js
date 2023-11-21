import SessionButtom from './abstract/SessionButtom.js';

export default {
	data() {
		return {
			homePath: this.$homePath,
		};
	},
	template: `
        <div id="user-info" class="col-12 text-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 text-center">
                        <SessionButtom title="Shutdown" img="/img/shutdown.svg" cmd="systemctl poweroff" />
                        <SessionButtom title="Reboot" img="/img/reboot.svg" cmd="systemctl reboot" />
                    </div>
                    <div class="col-4" id="imgDiv">
                        <img :src="'file://' + homePath + '/.face'" class="img-fluid vsk-profile-picture user-img" id="user-img" alt="user" />
                    </div>
                    <div class="col-4 text-center">
                        <SessionButtom title="Logout" img="/img/logout.svg" cmd="loginctl terminate-session $XDG_SESSION_ID" />
                        <SessionButtom title="Suspend" img="/img/suspend.svg" cmd="systemctl suspend" />
                    </div>
                </div>
            </div>
        </div>
    `,
	components: {
		SessionButtom,
	},
};
