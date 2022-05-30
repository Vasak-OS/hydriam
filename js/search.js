async function searchApps(){
    const searchData = await getSearchData();
    const filter = document.getElementById('search').value.toLowerCase();
    const matchs = searchData.filter(app => app.name.toLowerCase().includes(filter) || app.description.toLowerCase().includes(filter));
    drawResult(matchs);
}

async function drawResult(data){
    const categoryHTML = document.getElementById('menu-category');
    const menuHTML = document.getElementById('menu-content');
    if (document.getElementById('search').value == ''){
        drawMenu();
    } else if (data.length === 0){
        categoryHTML.innerHTML = '';
        menuHTML.innerHTML = 'No se encontraron apps';
    } else {
        let myHTML = '<div class="container-fluid"><div class="row">';
        for (app of data){
            console.log(app)
            myHTML = myHTML.concat(`
            <button class="btn col-3 btn-app"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="${app.name}"
                onclick="openApp('${app.path}')">
                <img src="file://${app.icon}" class="img-fluid" style='width:100%;' />
                <span class="name-app text-center">${app.name}</span>
                <span class='text-muted' style='display:none;'>${app.description}</span>
                <span style='display:none;'>${app.keywords}</span>
            </button>
            `);
        }
        menuHTML.innerHTML = myHTML.concat("</div></div>");
        categoryHTML.innerHTML = '';
    }
}