import React from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif";
import { useState,useEffect } from 'react';

export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    (async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem("chat-app-user")
      )
    );
      })();
  }, []);
  return (
    <Container>
        <img src={Robot} alt="Robot"/>
        <h1>Welcome, <span>{userName.username}!</span></h1>
        <h3>Please select a chat to start messaging.</h3>
    </Container>
  )
}

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: white;
   img {
       height: 20rem;
   }
   span {
       color: #4e00ff;
   }
`;
