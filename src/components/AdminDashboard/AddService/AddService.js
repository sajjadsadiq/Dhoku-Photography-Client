import React, { useState } from 'react';
import './AddService.css'

const AddService = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handelBlur = event => {
        const newInfo = {...info};
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo)
    }

    const handelFileChange = event => {
        const newFile = event.target.files[0]
        setFile(newFile)
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="serviceTitle p-5">
                    <label htmlFor="">Service Title</label> <br/>
                    <input onBlur={handelBlur} placeholder="Enter Title" type="text" />
                </div>
                <div className="description pl-5 pb-5">
                    <label htmlFor="">Description</label> <br/>
                    <input onBlur={handelBlur} placeholder="Enter Description" type="text"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="img p-5">
                    <label htmlFor="">Image</label>
                    <input onChange={handelFileChange} type="file" name="" id=""/>
                </div>
            </div>
        </div>
    );
};

export default AddService;