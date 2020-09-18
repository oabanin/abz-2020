import React, { useEffect, useRef, useState } from 'react';

const User = ({photo, name, job, mail, phone}) => {
  return(
     <div className="col-md-4">
            <img className="users__photo" src={photo}/>
            <div className="users__info">
              <h2 className="users__name">Maximillian</h2>
              <div className="users__job">Leading specialist of the Control Department</div>

              <a data-tip="controldepartment@gmail" className="users__email" href="mailto:controldepartment@gmail">controldepartment@gmail</a>
              <div className="users__phone">+380 50 678 03 24</div>
            </div>
      </div>
    );
}

export default User;
