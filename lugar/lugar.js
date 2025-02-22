const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'a9ccbc6946msh55a2eed611daf5ep1e8977jsn4b978a7fc070' }
    });
    const resp = await instance.get()
    if (resp.data.Results.leng === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}