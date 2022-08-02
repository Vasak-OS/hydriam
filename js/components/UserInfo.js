export default {
    template: `
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
    `
}