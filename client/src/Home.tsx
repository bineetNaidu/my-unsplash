import React, { useState, useEffect } from "react";
import Axios from "axios";
import Image from "./Image";
import { User } from "./types";
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

  return (
    <div>
      {visible && <Modal setVisible={setVisible} />}
      <div
        className="images_list"
        style={{
          display: "grid",
          gridColumnGap: "24px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {images && images.map((img) => <Image image={img} user={user} />)}
      </div>
    </div>
  );
};

export default Home;
