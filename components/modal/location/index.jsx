import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import Image from 'next/image';
import Location_Img from '../../../public/Location_Img.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 811,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
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
        <Box sx={style} className="modal-content">
          <div className="relative mb-[28px]">
            <Image src={Location_Img} alt='Img' layout='responsive' className="w-full" />
            <div className="absolute top-3 left-2 bg-white p-2 w-[417px]">
              <p className='text-[16px]'>
                Shifokorlar {`ko'chasi`} 2, 1b Uy, 49 xonadon
              </p>
            </div>
          </div>

          <button className='bg-[#FBD029] hover:bg-[#a4934d] w-[164px] p-3 rounded-md text-[20px] font-medium'>Сохранить</button>

        </Box>
      </Modal>
      
      <style jsx global>{`
        @media (max-width: 767px) {
          .modal-content {
            width: 100%;
            max-width: 360px;
            padding: 16px;
          }
          .modal-content .absolute {
            top: 2px;
            left: 2px;
            width: auto;
          }
          .modal-content button {
            width: 100%;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login_Modal;
