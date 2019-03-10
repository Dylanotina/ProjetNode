function searchAll(cb) {
    return fetch(`api/installation/`,
        { accept :'application/json'
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(cb);
}

function checkStatus(res) {
    if(res.status >=200 && res.status<300){
        return res;
    }
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.response = res
    console.log(error);
    throw error;
}

function parseJSON(response) {
    return response.json();
}
const Client = {searchAll};
export default Client;