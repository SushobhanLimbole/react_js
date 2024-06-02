import React from 'react';
import { firebaseAuth } from '../Firebase/Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './SignOut.css';

export default function SignOut () {

    const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      alert('User signed out seccesfully');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className='sign-out-button' onClick={handleSignOut}>Sign Out</button>
  );
};

