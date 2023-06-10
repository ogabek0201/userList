import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Dropdown } from "antd";
import { useContext, useState } from "react";
import FormModal from "../FormModal/FormModal";
import { UserContext } from "../../utils/UserContext";


const Tr = (props) => {
  const {putUser,deleteUser,postFile}=useContext(UserContext)
  let {
    id,
    name,
    surname,
    city,
    phone,
    img,
    email,
    status,
  } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [citys, setCitys] = useState("All");
  let [userId, setUserId] = useState(null);
  const onFinish = async (values) => {
    values.city = citys;
    let formData=new FormData();
    formData.append("file", values.img.file.originFileObj)
    const data = await postFile(formData)
    values.img=data.img
    putUser(userId, values);
    handleClose();
  };
  const items = [
    {
      label: (
        <Button
          variant="text"
          startIcon={<Edit color="primary" />}
          onClick={() => {
            handleOpen();
            setCitys(city);
            setUserId(id);
          }}
        >
          Edit
        </Button>
      ),
      key: "0",
    },
    {
      label: (
        <Button
          variant="text"
          startIcon={<Delete color="error" />}
          onClick={() => deleteUser(id)}
        >
          Delete
        </Button>
      ),
      key: "1",
    },
  ];
  return (
    <tr>
      <td>
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src={import.meta.env.VITE_APP_API_URL_FILE+img}
            alt=""
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />
          <Box>
            <Typography variant="h5">{name + " " + surname}</Typography>
            <Typography component={"p"}>{email}</Typography>
          </Box>
        </Box>
      </td>
      <td>
        <Typography component={"p"}>{city}</Typography>
      </td>
      <td>
        <Typography
          component={"p"}
          sx={
            status
              ? {
                  background: "#259323",
                  padding: "5px",
                  width: "70px",
                  textAlign: "center",
                  color: "white",
                }
              : {
                  background: "#748998",
                  padding: "5px",
                  width: "80px",
                  textAlign: "center",
                  color: "white",
                }
          }
        >
          {status ? "ACTIVE" : "INACTIVE"}
        </Typography>
      </td>
      <td>
        <Typography component={"p"}>{phone}</Typography>
      </td>
      <td>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Typography
            component={"p"}
            sx={{ color: "#CFD6DC", fontSize: "20px", cursor: "pointer" }}
          >
            • • •
          </Typography>
        </Dropdown>
      </td>
      <FormModal
        open={open}
        handleClose={handleClose}
        onFinish={onFinish}
        name={"Edit User"}
        state={{
          name:name,
          surname:surname,
          status:status,
          phone:phone,
          email:email,
        }}
        city={citys}
        setCity={setCitys}
        btnName={"Edit"}
      />
    </tr>
  );
};

export default Tr;
