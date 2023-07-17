/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function deleteCard() {
    setModalOpen(true);
  }
  function closeModalHandler(){
    setModalOpen(false);
  }
  

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteCard}>
          Delete
        </button>
      </div>
      { modalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      { modalOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
