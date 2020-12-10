import React from "react";
import { User, Image as UserInterface } from "./types";
import "./Image.css";

interface Props {
  user: User;
  image: UserInterface;
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
