import axios from 'axios';

const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";


const getResourse = async (url) => {
  try {
    const response = await axios.get(`${_apiBase}${url}`);
     if(response.data.success) {
      return response.data;
     }
     else {
      throw new Error (`Response from ${_apiBase}${url} hasn't been success`);
     }
  } catch (error) {
    console.error(error);
  }
}


// const getRegisteredUsers = () => {
//     return getResourse('/users?page=5&count=6');
// }


const getPositions = async () => {
  const response = await getResourse('/positions');
  return response.positions;
}



//getRegisteredUsers
export { getPositions};
