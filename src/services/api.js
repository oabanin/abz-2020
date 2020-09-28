import axios from 'axios';

const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";


const getResourse = async (url) => {
  try {
    const response = await axios.get(`${_apiBase}${url}`);
     if(response.data.success) {
      return response.data;
      //return "zalupa";
     }
     else {
      return response.message;
     }
  } catch (error) {
    console.error(error);
  }
}


// const getRegisteredUsers = () => {
//     return getResourse('/users?page=5&count=6');
// }


const getPositions = async () => {
  const data = await getResourse('/positions');
  return (typeof data === "string") ?  data : data.positions;
}



//getRegisteredUsers
export { getPositions};
