import axios from 'axios';

const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";

const getResourse = async (url) => {
    return await axios.get(`${_apiBase}${url}`);
}


/*const getResourse = async (url) => {
  try {
    const response = await axios.get(`${_apiBase}${url}`);
    if (response.data.success) {
      return response.data;
    }
    else if (response.data.message) {
      return response.data.message;
    }
  } catch (error) {
    console.error(error);
  }
}*/


// const getRegisteredUsers = () => {
//     return getResourse('/users?page=5&count=6');
// }
//getRegisteredUsers

const getPositions = async () => {
  const data = await getResourse('/positions');
  return data.positions;
}

const getToken = async () => {
  const data = await getResourse('/token');
  return data.token;
}

const userRegisterRequest = async ({ name, email, phone, file: { 0: file }, position_id, token }) => {

  const formData = new FormData();
  formData.append('position_id', position_id);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', file);
  for(var pair of formData.entries()) {
    console.log(pair[0]+ ', '+ pair[1]);
 }


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


  run().catch(err => console.log(err));
  async function run() {
    const blob = await fetch(base64).then(res => res.blob());

    const formData = new FormData();
    formData.append('yinyang.png', blob);

    // Post the form, just make sure to set the 'Content-Type' header
    const res = await axios.post('//localhost:5001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    // Prints "yinyang.png"
    console.log(res.data);
  }

  */





  try {
    const response = await axios.post(`${_apiBase}/users`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Token': token
      }
    });
    return response.data;
  } catch (error) {
    console.dir(error);
    console.error(error.response.data);

  }

}

export { getPositions, getToken, userRegisterRequest };
