/* eslint-disable react/prop-types */
import "../App.css"
import "./Modal.css"

function Modal(props) {

    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }
  return (
      <div className="modal">
    <p>Are you sure?</p>
    <div className="buttons">
    <button className="btn btn--alt" onClick={cancelHandler}>No</button>
    <br></br>
    <button className="btn" onClick={confirmHandler}>Yes</button>
    </div>
    </div> 
  )
}

export default Modal