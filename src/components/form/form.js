import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { getPositions, getToken, userRegisterRequest } from '../../services/api';

const maxFileSize=5*1024**2;


const Form = () => {
  const { register, handleSubmit, setError, clearErrors, errors } = useForm();

  const onSubmit = async(data) => {
    const token = await getToken();
    const response = await userRegisterRequest({...data, token})
  };

  const [fetchedPositions, setFetchedPositions] = useState([]);
  const [choosedFilename, setchoosedFilename] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const pos = await getPositions();
      setFetchedPositions(pos);

    }
    fetchData();

  }, [])

  const onChooseFile = (file, name) => {
    if (!file) return;

    clearErrors(name);
    setchoosedFilename(file.name);

    if(file.size > maxFileSize){
      const errMsg = "File size must not exceed 5MB";
      setError(name, {
        type: "size",
        message: errMsg
      });
      return errMsg;
    } else if (file.type !=="image/jpeg") {
       const errMsg = "File should be jpg/jpeg image";
      setError(name, {
        type: "extention",
        message: errMsg
      });
      return errMsg;
    } else {
      const url = window.URL || window.webkitURL;
      const img = new Image();
      img.src = url.createObjectURL(file);
      img.onload = function() {
        if(this.width < 70 || this.height < 70) {
          url.revokeObjectURL(this.src);
          const errMsg = "File should be with resolution at least 70x70px!";
          setError(name, {
            type: "resolution",
            message: errMsg
          });

          return errMsg;
        }
      }

      return true;
    }

  }
  return (
    <section className="form">
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="form__title">Register to get a work</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <p className="form__subtitle">Attention! After successful registration and alert, update the list of users in the block from the top</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit(onSubmit)} action="#" noValidate>
              <div className="form__field">
                <label htmlFor="form__name">Name</label>
                <input
                  className={errors.name ? "form__name--error" : "form__name"}
                  id="form__name"
                  name="name"
                  placeholder="Your name"
                  ref={register({
                    required: 'Name is required',
                    maxLength: {
                      value: 60,
                      message: 'Max length is 60 characters'
                    },
                    minLength: {
                      value: 2,
                      message: 'Min length is 2 characters'
                    }
                  })}
                />
                {errors.name && <div className="form__feedback error">{errors.name.message}</div>}
              </div>

              <div className="form__field">
                <label htmlFor="form__email">Email</label>
                <input
                  className={errors.email ? "form__email--error" : "form__email"}
                  id="form__email"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  ref={register({
                    required: 'Email is required',
                    maxLength: {
                      value: 100,
                      message: 'Max length is 100 characters'
                    },
                    minLength: {
                      value: 2,
                      message: 'Min length is 2 characters'
                    },
                    pattern: {
                      value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
                      message: 'Email address must be according to RFC2822'
                    }
                  })
                  }

                />
                {errors.email && <div className="form__feedback error">{errors.email.message}</div>}
              </div>

              <div className="form__field">
                <label htmlFor="form__phone">Phone number</label>
                <input
                  className={errors.phone ? "form__phone--error" : "form__phone"}
                  id="form__phone"
                  name="phone"
                  ref={register({
                    required: 'Phone is required',
                    validate: {
                      checkNumber: value => /^[\+]{0,1}380([0-9]{9})$/.test(value.replace(/[^+\d]/g, "")) || 'Phone number should start with code of Ukraine +380',
                    },

                  })
                  }
                  placeholder="+380 XX XXX XX XX"
                  type="phone"
                />
                {errors.phone && <div className="form__feedback error">{errors.phone.message}</div>}
              </div>
              <p className="form__radioTitle">Select your position</p>

              {typeof fetchedPositions === "object" && fetchedPositions.map(position => (
                <div key={position.id} className="form__radioWrapper">
                  <input
                    className="form__radio"
                    id={`form__radio${position.id}`}
                    type="radio"
                    name="position_id"
                    value={position.id}
                    ref={register({ required: 'Position is required' })}
                  />
                  <label className="form__radioLabel" htmlFor={`form__radio${position.id}`}>{position.name}</label>
                </div>)
              )}
              {errors.position_id && <div className="form__feedback error">{errors.position_id.message}</div>}
              {typeof fetchedPositions === "string" && <div className="form__feedback error">{fetchedPositions}</div>}

              <p className="form__uploadTitle">Photo</p>
              <div className="form__uploadWrapper">
                <label className={errors.file ? "form__labelUpload--error" : "form__labelUpload"} htmlFor="form__upload">
                  <input
                    className="form__upload"
                    id="form__upload"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    name="file"
                    onChange={(e) => onChooseFile(e.target.files[0],e.target.name)}
                    ref={register({ required: 'File is required', validate: (files)=> onChooseFile(files[0], 'file')})}
                  />
                  <div className="form__uploadPlaceholder">{choosedFilename ? choosedFilename : "Upload your photo"}</div>
                  <div className="form__uploadButtonWrapper">
                    <span>Browse</span>
                  </div>
                </label>
              </div>

              {errors.file && <div className="form__feedback error">{errors.file.message}</div>}

              <input className="button form__submit" value="Sing up now" type="submit" />
            </form>
          </div>
        </div>


      </div>

    </section>
  )

}

export default Form;
