import React from "react";
import { User, Image as ImageInterface } from "./types";
import "./Image.css";

interface Props {
  user: User;
  image: ImageInterface;
}

const Image: React.FC<Props> = ({ image, user }) => {
  const { name, url, _id, uploadedBy } = image;
  return (
    <div className="image" key={_id}>
      {user._id === uploadedBy && <button>X</button>}
      <img src={url} alt={name} />
      <h4 className="image__name">{name}</h4>
    </div>
  );
};

export default Image;
