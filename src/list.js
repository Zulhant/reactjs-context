import React, { useContext, useState } from 'react';

import { testingContext } from "./contexts/testing"
import { Link } from 'react-router-dom';

const  Form = () => {

  const testing = useContext(testingContext)

  return (
   <div>
       <h2>Daftar Nama</h2>
       {
           testing.list.map((item, i) => {
               return (
               <p>{item.name} || <Link to={`?action=edit&id=${i}`}>Edit</Link>  <Link to={`?action=detail&id=${i}`}>Detail</Link></p>
               )
           })
       }

       <br />

       <Link to="?action=add">
           Tambah
       </Link>
   </div>
  );
}

export default Form;
