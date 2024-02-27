import React from "react";
import { Dialog } from "@mui/material";

function ManageModal({ title }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      <div className="test"> title</div>
    </Dialog>
  );
}

export default ManageModal;
