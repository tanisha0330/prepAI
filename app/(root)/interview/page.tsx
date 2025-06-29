"use client"
import React from 'react'
import Agent from "@/components/Agents"



const page = () => {
  return (
    <>
    <h3> interview generation </h3>
    <Agent 
    userName ="You" 
    userId ="user1" 
    type ="generate"/>
    
    
    
    
    </>
  );
}

export default page