import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl mx-2">Loading</h1>
        <Circles
          height="60"
          width="60"
          color="#000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
