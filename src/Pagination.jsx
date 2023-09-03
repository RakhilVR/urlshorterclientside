/* eslint-disable array-callback-return */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Pagination() {

    const [apiData, setApidata] = useState([]);
    const [paginationNumber, setpaginationNumber] = useState([]);
    // setpaginationNumber(apiData.length / 2)


    useEffect(() => {

        const dataFromApi = async () => {
            const result = await axios.get("https://dummyjson.com/products");
            setApidata(result.data.products);
            const newArr = result.data.products
            console.log("gg",(newArr.length)); 
        }

        dataFromApi()


    }, [])
    return (
        <div>
            <div className="row">
                {apiData.map((item, index) => (
                    <div key={index} className="col-md-3 mt-5">
                        {/* {console.log(apiData.length)} */}
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>


    )
}

export default Pagination
