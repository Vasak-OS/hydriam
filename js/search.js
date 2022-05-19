const searchData = await getSearchData();

function searchApps(){
    const filter = document.getElementById('search').value;
    const matchs = searchData.filter(app => {
        app.name.toLowerCase().includes(filter) || app.description.toLowerCase().includes(filter)
    });

    drawResult(matchs)
}

async function drawResult(data){
    let categoryHTML = document.getElementById('menu-category');
    let menuHTML = document.getElementById('menu-content');
    if (document.getElementById('search').value == ''){
        drawMenu();
    } else if (data.length === 0){
        categoryHTML.innerHTML = '';
        menuHTML.innerHTML = 'No se encontraron apps';
    } else {
        categoryHTML.innerHTML = '';
        let myHTML;
        for (app in data){
            myHTML = myHTML.concat(`
            <button class="btn col-3 btn-app"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="${apps[app].name}"
                onclick="openApp('${apps[app].path}')">
                <img src="file://${apps[app].icon}" class="img-fluid" style='width:100%;' />
                <span class="name-app text-center">${apps[app].name}</span>
                <span class='text-muted' style='display:none;'>${apps[app].description}</span>
                <span style='display:none;'>${apps[app].keywords}</span>
            </button>
            `);
        }
        menuHTML.innerHTML = myHTML;
    }
}