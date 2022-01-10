const homePath = nw.App.dataPath.concat('/../../../');
const execSynx = require('child_process').spawnSync;
const exec = require('child_process').spawn;
const process = require('process');

async function setIMG(){
  elem = document.getElementById('imgDiv');
  elem.innerHTML = `
    <img
      src="file://${homePath}.face"
      class="img-fluid lynx-profile-picture" />`
}