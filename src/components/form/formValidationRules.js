export default function validate(values) {
    let errors = {};

    const {email, name, phone, position_id} = values;

    if(!email) {
      errors.email = 'Email address is required';
    }else if (!/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if(!name) {
      errors.name = 'Name is required';
    }else if(!/^.{2,60}$/.test(name)){
      errors.name = 'Name should be 2-60 characters';
    }

    if(!phone) {
      errors.phone = 'Phone is required';
    } else if(!/^(\+38)?0\d{9}$/.test(phone.replace(/[^+\d]/g, ""))){
      errors.phone = 'Phone number should start with code of Ukraine +380';
    }

    if(!position_id) {
      errors.position_id = 'Position is required';
    } else if(!/\d/.test(position_id)){
      errors.position_id = 'Position id should contains only number';
    }


    return errors;
  };




// position_id - user position id. You can get list of all positions with their IDs using the API method GET api/v1/positions
// photo - user photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB.
