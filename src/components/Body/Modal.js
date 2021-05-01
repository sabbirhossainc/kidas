import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#CEE007" }}
        onClick={handleClickOpen}
      >
        Donet
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{ backgroundColor: "	#CEE007" }}
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{ textAlign: "center" }}
        >
          {"How do you like to donet?"}
        </DialogTitle>
        <DialogContent
          style={{ textAlign: "center" }}
        >
          <b>Payment Methods:</b>
        </DialogContent>
        <DialogContent>
          <DialogContent style={{ textAlign: "center" }}>
           <u>Via Bikash Account</u>
          </DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <b>Bikash A/C :</b>
          </DialogContentText>
          <DialogContent style={{ textAlign: "center" }}>
           <u>Via Bank Account</u>
          </DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <b>Donation Account Name: Kidas Fund Raising Account</b>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <b>Donation A/C: 1202010010419</b>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
           <b>NRB bank, keranigonj,Dhaka</b>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}