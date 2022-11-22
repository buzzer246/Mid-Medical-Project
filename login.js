import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Submit = () => {

    const[username,pickUsername] = useState([]);
    const[password,pickPassword] = useState([]);
    const[message, updateMessage] = useState([]);

    if (username == "" || password == "") {
        updateMessage("Enter Login Details !");
    } else {
        updateMessage("Please Wait Validating...");

        fetch("http://localhost:8080/account")
            .then(response => response.json())
            .then(userinfo => {
                if (userinfo[0].email == username && userinfo[0].password == password) {
                    updateMessage("Success : Please Wait Redirecting...");
                    window.location.reload(); // to reload the current page
                } else {
                    updateMessage("Fail : Invalid or Not Exists !");
                }
            })

    }
}


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login Here</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
            Enter the Username/Email:
            <input type="text" className="form-control" placeholder='Enter the Username/Email'></input>
          </Typography>
          <Typography align='center'id="modal-modal-description" sx={{ mt: 2 }}>
           Enter the Password:
           <input type="password" className="form-control" placeholder='Enter the Password'></input>
          </Typography>
          <Button align='center' onClick={Submit} variant="contained"  sx={{ mt: 2 }} className="text-center" color='success' margin="dense" colSpan={3}>Login</Button>
        </Box>
      </Modal>
    </div>
  );
}