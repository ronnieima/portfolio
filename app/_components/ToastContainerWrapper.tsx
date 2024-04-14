'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Drift from 'react-driftjs';

function ToastContainerWrapper() {
  return (
    <>
      <Drift appId="3vup5hfswd4d" />
      <ToastContainer />
    </>
  );
}

export default ToastContainerWrapper;
