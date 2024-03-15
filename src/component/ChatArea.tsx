import React , {useState,useEffect} from "react";
import "./ChatArea.css";
import NewMessages from "./NewMessages";
import wifiImg from "/Wifi.png";
import connectionImg from "/Battery.png";
import batteryImg from "/connection.png";
import writeImg from "/write.png";
import backImg from "/Back.png";
import profileImg from "/Profile.png";
import pinImg from "/pin.png";
import shareImg from "/share.png";

const CharArea = () => {
  const [messages, setMessages] = useState([]);
  const url =  'https://qa.corider.in/assignment/chat?page=0';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const dataArr = data.chats;
        
      setMessages(dataArr.map((ele)=>{
        return (
          <NewMessages key = {ele.id} message={ele.message} pic={ele.sender.image} />
        )
      }
      ))

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="chat-area p-3 space-y-5">
      <div className="chat-header">
        <div className="flex justify-between">
          <p className="font-bold">9:41</p>
          <div className="flex">
            <img className="w-4 h-4 mx-1" src={wifiImg} alt="" />
            <img className="w-4 h-4 mx-1" src={connectionImg} alt="" />
            <img className="w-4 h-4 mx-1" src={batteryImg} alt="" />
          </div>
        </div>
      </div>

      <div className="chat-information space-y-3">
        <div className="flex justify-between">
          <div className="flex">
            <img src={backImg} alt="" />
            <p className="font-medium text-xl">Trip 1</p>
          </div>
          <div>
            <img src={writeImg}></img>
          </div>
        </div>

        <div className="flex space-x-2">
          <img src={profileImg} alt="" />
          <div>
            <div>
              <span className="font-thin">From</span>{" "}
              <span>IGI airport T3</span>
            </div>
            <div>
              <span className="font-thin">To</span> <span>sector28</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divisionLine">
        <hr className="bg-black" />
      </div>

      <div className="chat-main mt-8 space-y-3 h-[60%] overflow-x-hidden overflow-y-scroll">
        {messages}
      </div>

      <div className="chat-send w-[100%] ">
        <div className="flex bg-white p-2 space-x-2 rounded-xl">
          <input
            type="text"
            placeholder="Reply to @ashish"
            className="w-[80%]"
          />
          <button><img src={pinImg} alt="" className="h-5 w-5" /></button>
          <button><img src={shareImg} alt="" className="h-5 w-5" /></button>
          
        </div>
      </div>
    </div>
  );
};

export default CharArea;
