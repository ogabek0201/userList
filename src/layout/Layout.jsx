import { Add,} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import FormModal from "../components/FormModal/FormModal";
import {UserContext} from '../utils/UserContext'

const Layout = () => {
  const { postUser,postFile }=useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [city, setCity] = useState("All");

  const onFinish = async (values) => {
    values.city = city;
    let formData=new FormData();
    formData.append("file", values.img.file.originFileObj)
    const data = await postFile(formData)
    values.img=data.img
    postUser(values);
    handleClose();
  };
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1">
        User List
      </Typography>
      <Button variant="contained" onClick={handleOpen} startIcon={<Add />}>
        NEW
      </Button>
      <FormModal
      open={open}
      handleClose={handleClose}
      onFinish={onFinish}
      name={"Add User"}
      state={{}}
      city={city}
      setCity={setCity}
      btnName={"Add"}
      />
    </Box>
  );
};

export default Layout;
