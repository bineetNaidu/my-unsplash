import Axios from "axios";
import React, { useState } from "react";
import "./Modal.css";

interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ setVisible }) => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      if (url && name && description) {
        const { data } = await Axios.post("/api/images", {
          url,
          name,
          description,
        });
        if (data.errors) throw new Error(data.errors);
        setVisible(false);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="modal">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit();
        }}
      >
        <button
          type="button"
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
        <h1>Create a new image</h1>
        <div className="form__box">
          <label>Url</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form__box">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__box">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Create!</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
