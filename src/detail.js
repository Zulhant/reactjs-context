import React, { useContext, useState, useEffect } from 'react';

import { testingContext } from "./contexts/testing"
import Form from "./form"

const FormEdit = ({ id }) => {

  const testing = useContext(testingContext)


  useEffect(() => {
      testing.getListById(id)
  }, [])
  
  return (
   <div>
    <p>Name : {testing.name}</p>
    <br />
    <p>Age : {testing.age}</p>
   </div>
  );
}

export default FormEdit
