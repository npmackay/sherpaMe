import {
  Modal,
  Button,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { GiTwoCoins } from "react-icons/gi";

function AddBalanceModal({ open, handleClose }) {
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
      open={open}
      onClose={handleClose}
    >
      <Grid>
        <Paper
          sx={{
            width: "17.5rem",
            height: "30rem",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Add Balance</Typography>

          <Grid item xs={8}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <TextField
              id="outlined-adornment-amount"
              variant="outlined"
              InputProps={{
                startAdornment: <GiTwoCoins />,
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <InputLabel htmlFor="outlined-adornment-card">
              Card Number
            </InputLabel>
            <TextField id="outlined-adornment-card" variant="outlined" />
          </Grid>
          <Grid item xs={8}>
            <InputLabel htmlFor="outlined-adornment-expiry">
              Expiry Date
            </InputLabel>
            <TextField id="outlined-adornment-expiry" variant="outlined" />
          </Grid>
          <Grid item xs={8}>
            <InputLabel htmlFor="outlined-adornment-cvc">CVC</InputLabel>
            <TextField id="outlined-adornment-cvc" variant="outlined" />
          </Grid>

          <Button
            sx={{
              backgroundColor: "#9D44C0",
              width: "12rem",
              height: "3rem",
              margin: "1rem",
            }}
            variant="contained"
            color="primary"
          >
            Add Balance
          </Button>

          <Button onClick={handleClose}>Close</Button>
        </Paper>
      </Grid>
    </Modal>
  );
}

export default AddBalanceModal;
