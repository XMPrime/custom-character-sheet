import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPortrait } from "../reducers/generalReducer";
import Dropzone from "react-dropzone";

export default function Portrait() {
  const dispatch = useDispatch();
  const portrait = useSelector((state) => state.general.portrait);
  const axios = require("axios");

  function changePortrait(img) {
    console.log(img[0]);
    dispatch(setPortrait(URL.createObjectURL(img[0])));
    // const portrait = new FileReader();
    // portrait.onload = (anImg) => {
    //   console.log(this);
    //   dispatch(setPortrait());
    // };

    // portrait.readAsDataURL(img[0]);
  }

  return (
    <Dropzone onDrop={(img) => changePortrait(img)} accept='image/*'>
      {({ getRootProps, getInputProps }) => (
        <div className='portrait border-bg' {...getRootProps()}>
          {portrait ? (
            <img
              src={portrait}
              alt='character portrait'
              className='portrait-img'
            />
          ) : null}
          <input {...getInputProps()} />
          {portrait ? null : <i className='fas fa-plus-circle'></i>}
        </div>
      )}
    </Dropzone>
  );
}

// style={{ backgroundImage: `url("${portrait}")` }}

{
  /* <div className="portrait" {...getRootProps()}>
{isDragActive ? (
  <p>Drop the files here ...</p>
) : (
  <p>Drag 'n' drop some files here, or click to select files</p>
)}
</div> */
}

// style={{backgroundImage: `url("${}")`}}
