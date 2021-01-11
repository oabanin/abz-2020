import axios from 'axios';

const _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const getUrl = async (url) => await axios.get(url);

const getResourse = async (url) => await axios.get(`${_apiBase}${url}`);

const getUsers = async (usersCount) => await getResourse(`/users?page=1&count=${usersCount}`);

const getPositions = async () => await getResourse('/positions');

const getToken = async () => await getResourse('/token');

const userRegisterRequest = async ({
  name, email, phone, photo: { 0: photo }, position_id, token,
}) => {
  const formData = new FormData();
  formData.append('position_id', position_id);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', photo);
  return await axios.post(`${_apiBase}/users`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Token: token,
    },
  });
};

export {
  getPositions, getToken, userRegisterRequest, getResourse, getUsers, getUrl,
};
