import axios from 'axios';

const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";

const getResourse = async (url) => {
    console.log("api get request to", url); //DELETE
    return await axios.get(`${_apiBase}${url}`);
}



// const getRegisteredUsers = () => {
//     return getResourse('/users?page=5&count=6');
// }
//getRegisteredUsers

const getPositions = async () => {
  return await getResourse('/positions');
}

const getToken = async () => {
  return await getResourse('/token');
}

const userRegisterRequest = async ({ name, email, phone, file: { 0: file }, position_id, token }) => {

  const formData = new FormData();
  formData.append('position_id', position_id);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', file);
  for(var pair of formData.entries()) {
    //console.log(pair[0]+ ', '+ pair[1]);
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






    return await axios.post(`${_apiBase}/users`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Token': token
      }
    });

}



export { getPositions, getToken, userRegisterRequest };
