import React from "react";
import { User, Image as ImageInterface } from "./types";
import "./Image.css";

interface Props {
  user: User;
  image: ImageInterface | any;
}

const Image: React.FC<Props> = ({ image, user }) => {
  const { name, url, _id } = image;
  return (
    <div className="image" key={_id}>
      <img src={url} alt={name} />
    </div>
  );
};

export default Image;
