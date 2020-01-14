import React  from 'react';


const  Form = ({ testing }) => {

  return (
   <div>
       <h2>Biodata anda</h2>
        <form>
            <input type="text" placeholder="name" value={testing.name} onChange={e => testing.setName(e.target.value)} />

            <br />

            <input type="text" placeholder="age" value={testing.age} onChange={e => testing.setAge(e.target.value)} />

            <br />

            <button onClick={testing.saveForm}>Tambahkan</button>
        </form>
   </div>
  );
}

export default Form;
