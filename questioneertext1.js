import React,{useState} from 'react';

const Questionere1 = () =>{


const cancel = () =>{

  alert("Please,select any one Questionere !");
  
}

const submit = () =>{

  //alert("please, Wait submmitng to the Server ..!")

  window.location.href=("http://127.0.0.1:3000/#/qustext2");
  
}

return(
    <>
<div className='col-lg-6 offset-4'>
<p className="mt-3"> First Questioneer...!</p>
      <p>Do, you take the Drug Today mean how many Times a day ....?</p><br/>
      <input type="checkbox"  checked  />
     <select>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>0</option>
  
     </select>

     <div className='colSpan= 3 mt-2'>
      <button className='btn btn-success text-center text-white' type='submit'onClick={submit}>Next</button>
      <button className='btn btn-danger text-center text-white m-2' type='submit'onClick={cancel}>Cancel</button>
     </div>

     </div>

</>

 );
}
 export default Questionere1;