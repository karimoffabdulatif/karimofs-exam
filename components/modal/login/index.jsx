import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput, IconButton } from '@mui/material';
import Image from 'next/image';
import Close_Icon from '../../../public/Mask group.svg';
import Key from '../../../public/Key_Icon.svg';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

const mobileStyle = {
  '@media (max-width: 600px)': {
    width: '90%',
    p: 2,
  },
};

const Login_Modal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container'>
      <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ ...style, ...mobileStyle }}>
          <Typography id="modal-title" variant="h6" component="h2" className='text-[24px] font-semibold'>
            Вход в аккаунт
          </Typography>
          <Typography id="modal-description" className='text-[12px] font-medium pt-[7px]'>
            Если Вы не зарегистрированы, нажмите кнопку
            <span className='text-[12px] ml-[3px] text-[#FBD029]'>{"Регистрация"}</span>
          </Typography>

          <div className='pt-[22px]'>
            <TextField
              fullWidth
              label="Login"
              id="fullWidth"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image src={Close_Icon} alt="Icon" width={24} height={24} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className='pt-[22px]'>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position="start">
                    <Image src={Key} alt="Icon" width={24} height={24} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>

          <div className='pt-[10px]'>
            <p className='text-[12px] text-[#917BFF]'>Забыли пароль!</p>
          </div>
          <div className='pt-[29px]'>
            <button className='text-[16px] font-medium  w-[160px] bg-[#FBD029] hover:bg-[#a08c3d] p-[10px] rounded-md'>Войти</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Login_Modal;
