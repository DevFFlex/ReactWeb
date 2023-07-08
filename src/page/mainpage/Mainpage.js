import React from "react";
import "./Mainpage.css";

// import { v4 as uuidv4 } from "uuid";
// import { useState } from "react";

import HeadBanner from "./banner/Banner";
import TabLeft from "./tableft/tableft";
// import Contend1 from "./contend1/Contend1";
// import Contend2 from "./contend2/contend2";



const MainPageComponent = ()=> {

  //   const initData = [
  //   {
  //     id: 1,
  //     title: "OMG",
  //     img_src:
  //       "https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848__340.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "TES",
  //     img_src:
  //       "https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "BVS",
  //     img_src:
  //       "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__340.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "TTE",
  //     img_src:
  //       "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "MMM",
  //     img_src:
  //       "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326__340.jpg",
  //   },
  // ];


  // const [itemList, setItemList] = useState(initData);
  // const onAddItemFunc = (newItem) => {
  //   setItemList((prevItem) => {
  //     return [newItem, ...prevItem];
  //   });
  // };

  return (
    <>

      <div className="page">
      
      <div className="tableft">
        <TabLeft/>
      </div>
      <div className="banner">
        <HeadBanner />
      </div>
      
      </div>

      {/* <div className="C12">
        <Contend1 onAddItem={onAddItemFunc} />
        <Contend2 initData={itemList} />
      </div> */}


    </>

      
  );
}

export default MainPageComponent;
