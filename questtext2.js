import React from "react";

let loader = () => {

    var msg= "please,mention your Temperature by percentage";
    document.getElementById("container").innerText = msg;
}


const Questext2 = () => {


    const cancel = () =>{

        alert("Please,select Temperature !");
        
      }
      
      const submit = () =>{
      
        //alert("please, Wait submmitng to the Server ..!")
        window.location.href=("http://127.0.0.1:3000/#/Patient");
      }
  
    return (

            
        < div className="text-center">

       
            <p className="mt-3"> Second Questioneer...!</p>

            <label>How much Percentage your having now?</label>
            <div id="container">
            <select type="checkbox" checked>
                <option value={"25%"}>25%</option>
                <option value={"50%"}>50%</option>
                <option value={"75%"}>75%</option>
                <option value={"100%"}>100%</option>
            </select>
            </div>
            <div className='colSpan= 3 mt-2'>
      <button className='btn btn-success text-center text-white' type='submit'onClick={submit}>Next</button>
      <button className='btn btn-danger text-center text-white m-2' type='submit'onClick={cancel}>Cancel</button>
     </div>

     </div>
        
    );
}



export default Questext2;