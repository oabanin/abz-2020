import axios from 'axios';

const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";

const getResourse = async (url) => {
await axios.get(`${_apiBase}${url}`)
  .then(function (response) {
    // handle success
    return response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


const getRegisteredUsers = () => {
    return getResourse('/users?page=5&count=6');
}

const getPositions = ()=> {
    return getResourse('/positions');
}


export {getRegisteredUsers};