import axios from 'axios';

const _apiBase = "https://frontend-test-assignment-api.abz.agency/api/v1";

const getResourse = async (url) => {
    return await axios.get(`${_apiBase}${url}`);
}

const getPositions = async () => {
  return await getResourse('/positions');
}

const getToken = async () => {
  return await getResourse('/token');
}

const userRegisterRequest = async ({ name, email, phone, photo: { 0: photo }, position_id, token }) => {

  const formData = new FormData();
  formData.append('position_id', position_id);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', photo);
  for(var pair of formData.entries()) {
    console.log(pair[0]+ ', '+ pair[1]);
 }
    return await axios.post(`${_apiBase}/users`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Token': token
      }
    });

}


export { getPositions, getToken, userRegisterRequest, getResourse };
