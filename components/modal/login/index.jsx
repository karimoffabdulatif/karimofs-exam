"use client";
import React, { useState } from "react";
import { Input, Modal } from "antd";
import { login } from "@/sevice/auth.service";
import User from "../../../public/User_Icon.svg";
import Image from "next/image";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Login = async (values) => {
    try {
      console.log("Login values:", values);
      const response = await login(values);
      console.log("Login response:", response);
      if (response && response.status === 200) {
        handleClick();
        closeModal();
        console.log("Modal yopilsin");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const showModal = () => {
    console.log("Modalni ochish");
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const values = { email, password };
    await Login(values);
  };

  const closeModal = () => {
    console.log("Yopilsin");
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <button
        className="w-[40px] h-[40px] shadow-lg  lg:w-[46px] lg:h-[46px] bg-[#F2F2F2] hover:bg-yellow-300 rounded-sm flex items-center justify-center"
        onClick={showModal}
      >
        <Image src={User} alt="image" />
      </button>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        onClose={closeModal}
        footer={[
          <button
            key="ok"
            className="custom-ok-button flex justify-start ml-7 px-14 py-2 font-semibold bg-yellow-300 hover:bg-yellow-500 transition-all border rounded-md"
            onClick={handleOk}
          >
            Войти
          </button>
        ]}
        className="p-[25px]"
      >
        <form
          className="p-[25px] flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleOk();
          }}
        >
          <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
          <p className="w-[270px] text-[12px]">
            Если Вы не зарегистрированы, нажмите кнопку
          </p>
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="p-3"
          />
          <Input.Password
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="p-3"
          />
        </form>
      </Modal>
      
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Login successful!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Index;
