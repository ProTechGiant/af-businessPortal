import React from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";


const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
    fill={useColorModeValue("black", "white")}
  >
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
    <path d="M0 0h24v24H0z" fill="none"></path>
  </svg>
)

export default ArrowLeft
