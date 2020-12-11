import React from "react";
import { User, Image as ImageInterface } from "./types";
import "./Image.css";

interface Props {
  user: User;
  image: ImageInterface;
  handleDelete: (_id: string) => Promise<void>;
}

const Image: React.FC<Props> = ({ image, user, handleDelete }) => {
  const { name, url, _id, uploadedBy } = image;

  return (
    <div className="image" key={_id}>
      {user && user._id === uploadedBy && (
        <button onClick={async () => await handleDelete(_id!)}>X</button>
      )}
      <img src={url} alt={name} />
      <h4 className="image__name">{name}</h4>
    </div>
  );
};

export default Image;
