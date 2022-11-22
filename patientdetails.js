import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';



const Patient = () => {


    const [patientinfo, updatePatient] = useState([]);

    const patientdetails = [

        { name: "TejoPrakash", drugname: "Astrozinica", loc: "Hyderbad", pincode: "501507" },
        { name: "Prashanth", drugname: "Paracitmol", loc: "Bangalore", pincode: "40214" },
        { name: "Dinesh", drugname: "citrogen", loc: "Delhi", pincode: "65421" },
        { name: "Prakash", drugname: "Respidrone", loc: "Pune", pincode: "000213" }
    ]

    return (
        <div className="col-sm-lg-6">

            <div className="col-sm-lg-6">
                <div className="card">
                    <div className="cardsize-sm">
                        <img src="https://www.clipartmax.com/png/middle/5-54113_clipart-patient-images-clip-art.png" width="80px" height="750px" className="card-img-top" alt="patient" />
                    </div>
                    <h3 className="text-danger text-center mt-4">Patient Details are: {patientdetails.length}</h3>
                    <div className="card-body text-center">

                        <div className="col-sm-lg-4 text-success">
                            <table className="table table-sm table-stripped">
                                <thead className="text-info">
                                    <tr>
                                        <th>  Patient Name </th>
                                        <th>  Drug Name </th>
                                        <th>  Patient Location </th>
                                        <th>  Patient Pincode </th>

                                        </tr>
                                   
                                </thead>
                                <tbody>

                                    {
                                        patientdetails.map((pinfo, index) => {

                                            return (
                                                <>
                                                <tr>
                                                    <td>{pinfo.name}</td>
                                                    <td> <p className="text-info">{pinfo.drugname}</p></td>
                                                    <td> <p>{pinfo.loc}</p></td>
                                                    <td> <p>{pinfo.pincode}</p></td>

                                                    </tr>

                                                </>
                                            )
                                        })




                                    }
                                </tbody>

                              

                                
                            </table>




                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Patient;