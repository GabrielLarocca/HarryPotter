import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './Components/Header';
import CardsC from './Components/CardsCharacters/CardsCharacters';

export default function App() {
  const key = '$2a$10$ihRQAqy0y1ONyS48fg0oY.eTyRo8hwW5EXeqowk76wTbxGtyU2Y8G'
  const [characters, setcharacter] = useState([])

  const fetchData = async () => {
    const response = await Axios.get(`https://www.potterapi.com/v1/houses?key=${key}`)
    setcharacter(response.data)
  }
  
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
    <Header/>
    <CardsC/>    <CardsC/>


    <CardsC/>
    <CardsC/>
    <CardsC/>
    <CardsC/>



      {console.log(characters)}
    </>
  );
}