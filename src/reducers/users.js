import {
	USERS_FETCHED
	} from '../constants/ActionTypes';

   const initialState = [
    {
      id: 1,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Maximillian",
      job: "Leading specialist of the Control Department",
      mail: "controldepartment@gmail",
      phone: "+380 50 678 03 24"
    },
    {
      id: 2,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Adolph Blaine Charles David Earl Matthew Matthew",
      job: "Contextual advertising specialist",
      mail: "adolph.blainecharles@gmail.com",
      phone: "+380 50 678 03 24"
    },
    {
      id: 3,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Adolph Blaine Charles David Earl Matthew Matthew",
      job: "Contextual advertising specialist",
      mail: "adolph.blainecharles@gmail.com",
      phone: "+380 50 678 03 24"
    },
    {
      id: 4,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Adolph Blaine Charles David Earl Matthew Matthew",
      job: "Contextual advertising specialist",
      mail: "adolph.blainecharles@gmail.com",
      phone: "+380 50 678 03 24"
    },
    {
      id: 5,
      photo: "https://frontend-test-assignment-api.abz.agency/images/users/5e54ff59e5a4548.jpeg",
      name: "Adolph Blaine Charles David Earl Matthew Matthew",
      job: "Contextual advertising specialist",
      mail: "adolph.blainecharles@gmail.com",
      phone: "+380 50 678 03 24"
    }
  ];

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
	case USERS_FETCHED:
		return action.users

	default:
		return state;
	}
}

export default usersReducer;
