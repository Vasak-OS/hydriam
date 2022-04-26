async function shutdown(){
    exec('systemctl poweroff');
    winMenu.close();
}

async function logout(){
    exec('loginctl terminate-session $XDG_SESSION_ID');
    winMenu.close();
}

async function reboot(){
    exec('systemctl reboot');
    winMenu.close();
}

async function suspend(){
    exec('systemctl suspend');
    winMenu.close();
}