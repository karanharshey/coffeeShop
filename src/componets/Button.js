import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  margin: 1rem 1rem;
  font-size: 1rem;
  background-color: ${props => props.primary ? '#7c2214' : '#7c2214'};
  color: ${props => props.primary ? 'white' : 'white'};
  border: 2px solid #7c2214;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
<<<<<<< HEAD
  margin-right: 15px;
=======

  margin-right: 30px;
>>>>>>> 16a667df0abd39b5e203d8f01f832ddba5df066e
  border-radius: 10px;

    margin-right: ${props => props.noMargin ? '0' : '10px'}; /* Add margin for spacing */



  &:hover {
    background-color: ${props => props.primary ? '#7c2214' : 'white'};
    color: ${props => props.primary ? 'white' : '#7c2214'}
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;  /* Default to horizontal layout */
  gap: 10px;            /* Add space between the buttons */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically on small screens */
    gap: 10px;              /* Add space between stacked buttons */
  }
`;

const Button = ({ children, primary, onClick, noMargin, ...props }) => {
  return (
    <StyledButton
      primary={primary}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      noMargin={noMargin} /* pass the noMargin prop */

      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;