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
  const [images, setImages] = useState([
    {
      _id: "1",
      url:
        "https://images.unsplash.com/photo-1607676965446-7368a12426d0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "dasdsa",
    },
    {
      _id: "1",
      url:
        "https://images.unsplash.com/photo-1607676965446-7368a12426d0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "dasdsa",
    },
    {
      _id: "3",
      url:
        "https://images.unsplash.com/photo-1607577070449-531c2296916c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "dasdsa",
    },
    {
      _id: "1",
      url:
        "https://images.unsplash.com/photo-1607676965446-7368a12426d0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "dasdsa",
    },
    {
      _id: "3",
      url:
        "https://images.unsplash.com/photo-1607577070449-531c2296916c?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "dasdsa",
    },
    {
      _id: "1",
      url:
        "https://images.unsplash.com/photo-1607676965446-7368a12426d0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "dasdsa",
    },
  ]);
  useEffect(() => {
    (async () => {
      const { data } = await Axios.get("/api/images/");
      console.log(data);
      setImages(data.images);
    })();
  }, []);

  return (
    <div>
      {visible && (
        <Modal images={images} setImages={setImages} setVisible={setVisible} />
      )}
      <div className="mansonry" style={{}}>
        {images && images.map((img) => <Image image={img} user={user} />)}
      </div>
    </div>
  );
};

export default Home;
