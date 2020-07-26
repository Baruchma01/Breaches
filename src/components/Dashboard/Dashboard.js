import React from "react";
import Modal from "../Modal/Modal";

const Dashboard = (props) => {
    return (
      <main>
        <Modal show={props.show} handleClose={props.handleCloseModal}>
          {props.children}
        </Modal>
      </main>
    );
}

export default Dashboard;
