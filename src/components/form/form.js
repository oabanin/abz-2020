import React from 'react';

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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
                        <form onSubmit={handleSubmit} action="#">
                            <div className="form__labelInput">
                                <label htmlFor="form__name">Name</label>
                            </div>
                                <input className="form__name" id="form__name" placeholder="Your name" />
                            <div className="form__labelInput">
                                <label htmlFor="form__email">Email</label>
                            </div>
                            <input className="form__email" id="form__email" placeholder="Your email" type="email" />
                            <div className="form__labelInput">
                                <label htmlFor="form__phone">Phone number</label>
                            </div>
                            <input className="form__phone" id="form__phone" placeholder="+380 XX XXX XX XX" type="email" />
                            <p className="form__radioTitle">Select your position</p>
                            <div className="form__labelRadio">
                                <input className="form__radio" name="form__radio" id="form__radio1" type="radio"/><label htmlFor="form__radio1">Frontend developer</label>
                            </div>
                            <div className="form__labelRadio">
                                <input className="form__radio" name="form__radio" id="form__radio2" type="radio"/><label htmlFor="form__radio2">Backend developer</label>
                            </div>
                            <div className="form__labelRadio">
                                <input className="form__radio" name="form__radio" id="form__radio3" type="radio"/><label htmlFor="form__radio3">Designer</label>
                            </div>
                            <div className="form__labelRadio">
                                <input className="form__radio" name="form__radio" id="form__radio4" type="radio"/><label htmlFor="form__radio4">QA</label>
                            </div>
                            <p className="form__uploadTitle">Photo</p>
                            <label className="form__labelUpload" htmlFor="form__upload">
                                <input className="form__upload" id="form__upload" type="file"  accept=".jpg, .jpeg, .png"/>
                            </label>
                            <input className="button form__submit" value="Sing up now" type="submit"/>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Form;
