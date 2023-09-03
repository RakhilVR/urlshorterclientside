import React, { useRef, useState } from 'react'

function Dsaquestions() {

    const [input1Data, setInput1Data] = useState(0);
    const [input2Data, setInput2Data] = useState(0);
    const [totalOperations, setTotalOperations] = useState(0);
    const [result, setResult] = useState(0);
    const [operationSign, setoperationSign] = useState("+");


    console.log(result);

    const handlechange = (e) => {
        setInput1Data(e.target.value);

    }
    const handlechange1 = (e) => {
        setInput2Data(e.target.value);

    }
    const add = () => {

        if (input1Data && input2Data != null) {
            setoperationSign("+")
            const sum = parseInt(input1Data) + parseInt(input2Data)
            setTotalOperations(totalOperations + 1);
            setResult(sum)
            document.getElementById("result").style.display = "block"
            console.log(document.getElementById("result"));
        }
    }

    const multipy = () => {

        if (input1Data && input2Data != null) {
            setoperationSign("*")
            const sum = parseInt(input1Data) * parseInt(input2Data)
            setTotalOperations(totalOperations + 1);
            setResult(sum)
            document.getElementById("result").style.display = "block"
            console.log(document.getElementById("result"));
        }
    }


    const divide = () => {

        if (input1Data && input2Data != null) {
            setoperationSign("/")
            const sum = parseInt(input1Data) / parseInt(input2Data)
            setTotalOperations(totalOperations + 1);
            setResult(sum)
            document.getElementById("result").style.display = "block"
            console.log(document.getElementById("result"));
        }
    }


    const substract = () => {

        if (input1Data && input2Data != null) {
            setoperationSign("-")
            const sum = parseInt(input1Data) - parseInt(input2Data)
            setTotalOperations(totalOperations + 1);
            setResult(sum)
            document.getElementById("result").style.display = "block"
            console.log(document.getElementById("result"));
        }
    }

    const reset = () => {

        const restedvalue = 0
        setInput1Data(restedvalue)
        setInput2Data(restedvalue)
        setoperationSign("+")
        document.getElementById("result").style.display = "none"
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-info mt-5'>Total Operations = {totalOperations}</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 mt-5 text-end">
                        <input type="number" onChange={handlechange} value={input1Data} name="" id="" />
                    </div>
                    <div className="col-md-4 col-sm-4 mt-5">
                        <h1 className='text-warning'>{operationSign}</h1>

                    </div>
                    <div className="col-md-4 col-sm-4 mt-5 text-start">
                        <input type="number" onChange={handlechange1} value={input2Data} name="" id="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3 mt-5 text-end">
                        <button className='btn btn-danger mx-4 mt-5 ' onClick={reset}>Reset</button>
                    </div>

                    <div className="col-md-6 col-sm-6 mt-5">
                        <button className='btn btn-success mx-4 mt-5' onClick={add}>+</button>
                        <button className='btn btn-success mx-4 mt-5' onClick={substract}>-</button>
                        <button className='btn btn-success mx-4 mt-5' onClick={multipy}>*</button>
                        <button className='btn btn-success mx-4 mt-5' onClick={divide}>/</button>
                    </div>


                    <div className="col-md-3 col-sm-3 mt-5 text-start">
                        <h3 className='mt-5 text-success ' style={{ display: "none" }} id='result'>Result = {result} </h3>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Dsaquestions
