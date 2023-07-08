import React from "react";
import "./BlockSell.css";

const BlockSell = (props) => {
  const { title, img_src } = props;

  return (
    <div className="BlockSellStyle">
      <div className="ImgBlockStyle">
        <img src={img_src} alt=""></img>
      </div>

      <div className="DetailBlockStyle">
        <div className="HeadLabelBlockStyle">
          <p>{title}</p>
        </div>

        <div className="BuyButtonBlockStyle">
          <button>ดูรายละเอียด</button>
        </div>
      </div>
    </div>
  );
};

export default BlockSell;
