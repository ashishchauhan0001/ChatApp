import React from "react";

const NewMessages = (props) => {
  return (
    <div className="flex space-x-2">
      <img src={props.pic} alt="" className="h-6 w-6" />
      <div className="chat-box bg-white w-[80%] p-1 text-gray-500 rounded-xl">
        <p className="text-[0.8em]">{props.message}</p>
      </div>
    </div>
  );
};

export default NewMessages;
