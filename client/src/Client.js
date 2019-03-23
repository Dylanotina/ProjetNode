function searchAllInstallation(cb) {
    return fetch(`api/installation`,
        { accept :'application/json'
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function searchAllActivite(cb) {
    return fetch(`api/activite`,
        {accept : 'application/json'})
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);

}

function searchAllEquipement(cb) {
    return fetch(`api/equipement`,
        {accept :'application/json'})
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function searchVille(query, cb){
    return fetch(`api/installation/ville/${query}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function searchCodePostal(query,cb){
    return fetch(`api/installation/code_postal/${query}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function searchNomInstallation(query, cb) {
    return fetch(`api/installation/nom/${query}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function searchTypeActivite(query,cb) {
    return fetch(`api/installation/activite/${query}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function RecupererLesLibelles(cb) {
    return fetch(`api/activite/`)
        .then(parseJSON)
        .then(cb);

}

function checkStatus(res){
    if(res.status >=200 && res.status<300){
        return res;
    }
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.response = res;
    console.log(error);
    throw error;
}

function parseJSON(response) {
    return response.json();
}
const Client = {searchAllInstallation,searchAllActivite,searchAllEquipement,searchVille,searchCodePostal,searchNomInstallation,searchTypeActivite,RecupererLesLibelles};
export default Client;