import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  borderRadius: "10px",

  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ open, handleClose }) => {
  const location = useLocation();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
