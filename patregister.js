import React, { useEffect, useState } from "react";

//patient/ subject Registration
// creating onclick event function
const submit = () => {

    alert("Patient Data Submitted...!");


}

const cancel = () => {


    window.location.href = ("https://buzzer246-obscure-xylophone-4vxvqqxppvh7r97-3000.preview.app.github.dev/#/home");
}




const Register = () => {


    let formstatus;
    let [name, pickName] = useState([]);
    let [email, pickEmail] = useState([]);
    let [mobile, pickMobile] = useState([]);
    let [password, pickPassword] = useState([]);
    let [repassword, pickRepass] = useState([]);
    let [gender, pickGender] = useState([]);
    let [sendmessage, pickMessage] = useState([]);
    let [male, updateMale] = useState([]);
    let [female, updateFemale] = useState([]);
    let [others, updateOthers] = useState([]);
    const [errorlist, updateError] = useState({});
    const [msg, updateMessage] = useState("");


    const save = () =>{
        
    
    
        var url ="http://localhost:8080/account";
        var postData ={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {username:email})
        }
        fetch(url,postData)
        .then(response => response.json())
        .then(userinfo=>{
    
            if(userinfo>=0){
    
                    updateMessage("Patient Saved Sucessfully");
    
            }else{
    
                updateMessage("Patient data Should Fill");
            }
        })
    }
    
    useEffect(()=>{
        save();
    },[true]);


    const Validateme = (obj) => {

        obj.preventDefault();
        let formstatus = true;
        if (name == "") {

            errorlist['nameerror'] = "Invalid Name";
            formstatus = false;
        } else {
            errorlist['nameerror'] = "";

        }
        updateError(errorlist);

        if (password == "" || password <= 6 || password >= 8) {

            errorlist['passworderror'] = "Invalid Password";
            formstatus = false;
        } else {
            errorlist['passworderror'] = "";

        }
        updateError(errorlist);

        var epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!epattern.test(email)) {

            errorlist['emailerror'] = "Invalid Email";
            formstatus = false;
        } else {

            errorlist['emailerror'] = "";
        }

        updateError(errorlist);

        var mpattern = /^[2-9]\d{9}$/;

        if (!mpattern.test(mobile)) {

            errorlist['mobileerror'] = " Invalid MobileNo";
            formstatus = false;
        } else {
            errorlist['mobileerror'] = ""

        }
        updateError(errorlist);

        if (sendmessage == "") {

            errorlist['messageerror'] = "Enter your Comments";
            formstatus = false;
        } else {
            errorlist['messageerror'] = "";

        }
        updateError(errorlist);

        if (gender == "") {

            errorlist['gendererror'] = "Enter Gender";
        } else {

            errorlist['gendererror'] = "";
        }
        updateError(errorlist);
    }
    return (

        <div className="col-sm-lg-12">
            <p className="text-center">Thanks for Creating Patient Account..Cheers</p>

            <div className="container p-3">
                <form action="#" method="POST" onSubmit={Validateme} />
                <div className="row">
                    <div className="col-lg-6 offset-3">
                        <h3 className="text-center mb-4 text-danger">Create an Patient/Subject Account</h3>
                        <div className="row mb-4">
                            <div className="col-lg-3">Name</div>
                            <div className="col-lg-9"><input type="text" className="form-control" onChange={obj => pickName(obj.target.value)} placeholder="Enter the Name" required />
                                <i className='text-danger'>{errorlist.nameerror}</i>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-lg-3">Email-id</div>
                            <div className="col-lg-9"><input type="email" className="form-control" onChange={obj => pickEmail(obj.target.value)} placeholder="Enter the Email Address" />
                                <i className='text-danger'>{errorlist.emailerror}</i>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-lg-3">Mobile Number</div>
                            <div className="col-lg-9"><input type="number" className="form-control" onChange={obj => pickMobile(obj.target.value)} placeholder="Enter the Mobile Number" />
                                <i className='text-danger'>{errorlist.mobileerror}</i>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div clasName="col-lg-3">Password</div>
                            <div className="col-lg-9"><input type="password" className="form-control" onChange={obj => pickPassword(obj.target.value)} placeholder="Enter the Password" />
                                <i className='text-danger'>{errorlist.mobileerror}</i>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-lg-3">Gender</div>
                            <div className="col-lg-9">
                                <select className="form-select" onChange={obj => pickGender(obj.target.value)} checked="checked">

                                    <options value={male}>Male</options>
                                    <options value={female}>Female</options>
                                    <options value={others}>Others</options>
                                </select>

                                <i className='text-danger'>{errorlist.gendererror}</i>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-lg-3" onChange={obj => pickMessage(obj.target.value)}>Send Message</div>
                            <div className="col-lg-9"><textarea className="form-control">


                            </textarea>
                                <i className='text-danger'>{errorlist.sendmessageerror}</i>
                            </div>

                        </div>

                        <div className="text-center mb-4">
                            <button className="btn btn-primary m-2" type="submit" onClick={save}>Register</button>
                            <button className="btn btn-warning" type="button" onClick={cancel}>Clear</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )

}



export default Register;