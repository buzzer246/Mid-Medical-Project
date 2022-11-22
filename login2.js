import React, { useEffect, useState } from "react";

const Login = () => {

    const [username, pickUsername] = useState([]);
    const [password, pickPassword] = useState([]);
    const [message, updateMessage] = useState([]);

    let Submit = () =>{


        if (username == "" || password == "") {
            updateMessage("Enter Login Details !");
    
            fetch("http://localhost:8080/account")
                .then(response => response.json())
                .then(userinfo => {
                    if (userinfo[0].email == username && userinfo[0].password == password) {
                        updateMessage("Success : Please Wait Redirecting...");
                        window.location.reload(); // to reload the current page
                    } else {
                        updateMessage("Fail : Invalid or Not Exists !");
                    }
                })
        } else {
            updateMessage("Please Wait Validating...");
    
    
        }

    }
    

    useEffect(() => {
        Submit();
    }, [true]);

    return (


        <>

            <div className="container">
                <div className="row ">
                    <div className="col-lg-4 offset-lg-4 text-center bg-secondary shadow rounded mt-5">
                        <h4 className="text-center mt-4">Login</h4>
                        <p className="text-center text-danger"> {updateMessage} </p>

                        <label>Email-id/Username:</label>
                        <input type="text" className="form-control mb-3"
                            onChange={obj => pickUsername(obj.target.value)} />

                        <label>Password:</label>
                        <input type="password" className="form-control mb-3"
                            onChange={obj => pickPassword(obj.target.value)} />

                        <div className="text-center">
                            <button className="btn btn-primary mb-3"
                                onClick={Submit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;