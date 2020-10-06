import axios from 'axios';

const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";

const getResourse = async (url) => {
  try {
    const response = await axios.get(`${_apiBase}${url}`);
     if(response.data.success) {
      return response.data;
     }
     else if(response.data.message) {
      return response.data.message;
     }
  } catch (error) {
    console.error(error);
  }
}


// const getRegisteredUsers = () => {
//     return getResourse('/users?page=5&count=6');
// }
//getRegisteredUsers

const getPositions = async () => {
  const data = await getResourse('/positions');
  return (typeof data === "string") ?  data : data.positions;
}

const getToken = async () => {
  const data = await getResourse('/token');
  return data.token;
}

const userRegisterRequest = async({name, email, phone, file: {0: file }, position_id, token}) => {
  const formData = new FormData();
  formData.append('position_id', position_id);
  formData.append('name', 'Jhon');
  formData.append('email', 'Jhon@gmail.com');
  formData.append('phone', '+380955388485');
  formData.append('photo', fileField.files[0]);

/*fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token}, })
.then(function(response) { return response.json(); })
.then(function(data) {
  console.log(data);
    if(data.success) {
    // process success response
    } else {
    // proccess server errors
    }
})
.catch(function(error) {
  // proccess network errors
});
*/

  try {
    const response = await axios.post(`${_apiBase}/users`);
     if(response.data.success) {
      return response.data;
     }
     else if(response.data.message) {
      return response.data.message;
     }
  } catch (error) {
    console.error(error);
  }
}

export { getPositions, getToken, userRegisterRequest };
