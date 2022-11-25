import React from 'react'
import {RotatingLines} from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className = "flex justify-center items-center">       
       <RotatingLines/>
    </div>
  )
}

