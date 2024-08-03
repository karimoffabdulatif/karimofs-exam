import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

const Login_Modal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    let inputValue = event.target.value.replace(/\D/g, ''); // Remove non-digit characters

    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
    }

    setValue(inputValue);
  };

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
        <Box sx={style} className="modal-content">
          <Typography id="modal-title" variant="h6" component="h2" className='font-semibold'>
            С вашего карты будет списано сумма:
          </Typography>
          <Typography id="modal-description" className='text-[24px] font-semibold pt-[7px] '>
            250 000
            <span className='text-[16px] ml-[3px]'>UZS</span>
          </Typography>
          <div className='pt-[54px]'>
            <Typography id="modal-title" variant="h6" component="h2" className='font-semibold mb-[10px]'>
              Ваши карта данные
            </Typography>
            <Typography id="modal-title" className='font-normal'>
              Номер карты
            </Typography>
          </div>

          <div className='pt-4'>
            <input type="text" placeholder='1234 5678 9012 3456' className='w-[301px] bg-[#F2F2F2] p-[15px] rounded-md' />
          </div>
          <p className='text-[16px] font-normal pt-4 pb-4'>Срок карты</p>
          <div className='mb-[45px]'>
            <input
              type="text"
              placeholder='___ /___'
              value={value}
              onChange={handleChange}
              className='w-[97px] bg-[#F2F2F2] p-[15px] rounded-md'
            />
          </div>

          <div className=''>
            <button className='text-[16px] font-medium  w-[414px] bg-[#FBD029] hover:bg-[#a08c3d] p-[15px] rounded-md'>Оплатить</button>
          </div>
        </Box>
      </Modal>
      
      <style jsx global>{`
        @media (max-width: 767px) {
          .modal-content {
            width: 100%;
            max-width: 360px;
            padding: 16px;
          }
          .modal-content .w-[301px] {
            width: 100%;
          }
          .modal-content .w-[97px] {
            width: 100%;
          }
          .modal-content button {
            width: 100%;
            font-size: 14px;
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login_Modal;
