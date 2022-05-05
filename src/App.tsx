import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  TextField,
  TextFieldProps,
  Container,
  Box,
} from "@mui/material";

function App() {
  return (
    <Container maxWidth="xs">
      <form>
        <h1 className="heading">Welcome!!</h1>
        
        <Box mb={2}>
          
          <div>
            <TextField
              color="primary"
             
              placeholder="Country Name"
              fullWidth
              variant="outlined"
              label="Country Name"
              autoFocus
            ></TextField>
          </div>

          <Button
            color="primary"
            fullWidth
            
          >
            submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default App;
