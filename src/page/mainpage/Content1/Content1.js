import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Contend1 = (props)=>{

  // const [count,setCount] = useState(0);
  console.log("Contend 1 ok");
  // setCount(count + 1)

  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");

  const onInputTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const onInputImgLink = (event) => {
    console.log(event.target.value);
    setImgLink(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const itemData = {
      id: uuidv4(),
      title: title,
      img_src: imgLink,
    };

    if(itemData.title === "" || itemData.img_src === "")return

    props.onAddItem(itemData);

    setTitle("");
    setImgLink("");
  };

  return (

    <div className="Contend1">
      <form className="formStyle">
        <section>
          <div className="form-control">
            <label>Title</label>
            <input
              type="text"
              placeholder="หัวข้อ"
              onChange={onInputTitle}
              value={title}
            ></input>
          </div>

          <div className="form-control">
            <label>Image-Link</label>
            <input
              type="url"
              placeholder="ลิ้งรูป"
              onChange={onInputImgLink}
              value={imgLink}
            ></input>
          </div>

          <div className="form-control">
            <button type="submit" onClick={onSubmit}>
              เพิ่มข้อมูล
            </button>
          </div>
        </section>
      </form>

    </div>
  );
}



export default Contend1;