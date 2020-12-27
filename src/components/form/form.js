import React, { useState, useContext } from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';

//Custom hooks
import { usePositions } from './usePositions';
import { useModal } from './useModal';
import { useMyForm } from './useMyForm';

//Context with API
import ApiContext from '../api-service-context';

//Components
import Positions from './components/positions';
import ModalContent from './components/modal';
import Spinner from "../spinner";

//Redux
import { fetchUsers } from '../../features/users/usersSlice';

//ChunkCss
import './form.scss'

const maxFileSize = 5 * 1024 ** 2;
const deletePhoneSymbols = (phone) => phone.replace(/[^+\d]/g, "");

const Form = () => {

  const { getUsers, getPositions, getToken, userRegisterRequest } = useContext(ApiContext);
  const { register, handleSubmit, setError, clearErrors, errors } = useForm();
  let { errorPositions, loadingPositions, fetchedPositions } = usePositions(getPositions);
  //fetchedPositions = [{ "id": 1, "name": "Frontend developer" }, { "id": 2, "name": "Backend developer" }, { "id": 3, "name": "Designer" }, { "id": 4, "name": "QA" }];
  const modal = useModal();
  const { choosedFilename, clearChoosedFilename, chooseFilename, submitError, clearSubmitError, setSubmitError, disabledSubmitBtn, enableSubmitBtn, disableSubmitBtn } = useMyForm();
  const dispatch = useDispatch();


  const onSubmit = async (submittedData, e) => {
    clearSubmitError();
    disableSubmitBtn();

    try {
      const tokenResponse = await getToken();
      if (!tokenResponse.data.success) throw Error("The API doesn't return token");
      await userRegisterRequest({ ...submittedData, phone: deletePhoneSymbols(submittedData.phone), token: tokenResponse.data.token });
      modal.openModal();
      e.target.reset();
      clearChoosedFilename();
      dispatch(fetchUsers(getUsers, 6));
      enableSubmitBtn();
    }
    catch (error) {
      error.response?.data?.message ? setSubmitError(error.response.data.message) : setSubmitError(error.message);
      if (error.response?.data?.fails) {
        for (let inputName in error.response.data.fails) {
          setError(inputName, {
            type: "apiError",
            message: error.response.data.fails[inputName][0]
          });
        }
      }
      else {
        modal.openModal();
      }
    }
    finally {
      enableSubmitBtn();
    }
  };


  const onChooseFile = (file, name) => {
    clearErrors(name); //Сбрасываем ошибки

    if (!file) {//Сбрасываем имя файла если ранее был выбран
      clearChoosedFilename();
      return;
    }

    chooseFilename(file.name);

    if (file.size > maxFileSize) {
      const errMsg = "File size must not exceed 5MB";
      setError(name, {
        type: "size",
        message: errMsg
      });
      return errMsg;
    } else if (file.type !== "image/jpeg") {
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
      img.onload = function () {
        if (this.width < 70 || this.height < 70) {
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


  const positionsList = !(loadingPositions || errorPositions)
    ? <Positions fetchedPositions={fetchedPositions} errors={errors} register={register} />
    : null;

  return (
    <section className="form">
      <div className="container-fluid">

        <div className="row" id="form">
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
          <div className="col-md-6 offset-md-3 col-sm-12 col-12">
            <form className="form__form" onSubmit={handleSubmit(onSubmit)} action="#" noValidate>
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
                {errors.name && <div className="form__error">{errors.name.message}</div>}
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
                {errors.email && <div className="form__error">{errors.email.message}</div>}
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
                      checkNumber: value => /^[\+]{0,1}380([0-9]{9})$/.test(deletePhoneSymbols(value)) || 'Phone number should start with code of Ukraine +380',
                    },
                    maxLength: {
                      value: 18,
                      message: 'Max length is 18 characters'
                    },
                    minLength: {
                      value: 12,
                      message: 'Min length is 12 characters'
                    },
                  })
                  }
                  placeholder="+380 XX XXX XX XX"
                  type="phone"
                />
                {errors.phone && <div className="form__error">{errors.phone.message}</div>}
              </div>
              <p className="form__radioTitle">Select your position</p>
              {loadingPositions ? <Spinner /> : null}
              {errorPositions ? <div className="form__error">{errorPositions}</div> : null}
              {positionsList}
              <p className="form__uploadTitle">Photo</p>
              <div className="form__uploadWrapper">
                <label className={errors.photo ? "form__labelUpload--error" : "form__labelUpload"} htmlFor="form__upload">
                  <input
                    className="form__upload"
                    id="form__upload"
                    type="file"
                    name="photo"
                    onChange={(e) => onChooseFile(e.target.files[0], e.target.name)}
                    ref={register({
                      required: 'File is required',
                      validate: (files) => onChooseFile(files[0], 'photo')
                    })}
                  />
                  <div className="form__uploadPlaceholder">{choosedFilename ? choosedFilename : "Upload your photo"}</div>
                  <div className="form__uploadButtonWrapper">
                    <span>Browse</span>
                  </div>
                </label>
              </div>
              {errors.photo && <div className="form__error">{errors.photo.message}</div>}

              <input
                className="button form__submit"
                value="Sing up now"
                type="submit"
                disabled={errorPositions || loadingPositions || disabledSubmitBtn}
              />
            </form>
          </div>
        </div>
      </div>

      <ReactModal
        overlayClassName={"ReactModal__Overlay"}
        className={"ReactModal__Content"}
        {...modal.bind}
      >
        <ModalContent
          closeModal={modal.closeModal}
          title={submitError ? "Error" : "Congratulations"}
          text={submitError ? submitError : "You have successfully passed the registration"}
          btnText={submitError ? "Ok" : "Great"}
        />
      </ReactModal>
    </section>
  )

}

export default Form;
