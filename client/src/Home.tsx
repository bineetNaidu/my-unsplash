import React, { useState, useEffect } from "react";
import Axios from "axios";
import Image from "./Image";
import { Image as ImageInterface, User } from "./types";
import Modal from "./Modal";

interface Props {
  user: User | any;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
}

const Home: React.FC<Props> = ({ user, setVisible, visible }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await Axios.get("/api/images/");
      console.log(data);
      setImages(data.images);
    })();
  }, []);

  const handleDelete = async (_id: string) => {
    const { data } = await Axios.delete(`/api/images/${_id}`);
    if (data.status === "OK")
      setImages(images.filter((i: ImageInterface) => i._id !== _id));
  };

  return (
    <div>
      {visible && (
        <Modal images={images} setImages={setImages} setVisible={setVisible} />
      )}
      <div className="mansonry" style={{}}>
        {images &&
          images.map((img) => (
            <Image image={img} user={user} handleDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
};

export default Home;
