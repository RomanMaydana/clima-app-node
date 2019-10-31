const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=26998ff1d896b6083afa64a1ae0d12fd&units=metric`);
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}