import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from './form';

function App() {

  return (
    <>
    <h1>MUI Forms</h1>
    <Form/>
    </>
  )
}

export default App
