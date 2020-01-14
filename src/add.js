import React, { useContext, useState, useEffect } from 'react';

import { testingContext } from "./contexts/testing"
import Form from "./form"

const FormAdd = () => {

  const testing = useContext(testingContext)
  
  useEffect(() => {
      testing.clearForm()
  }, [])

  return (
   <div>
       <Form testing={testing} />
   </div>
  );
}

export default FormAdd
