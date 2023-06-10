import { Close, UploadOutlined } from '@mui/icons-material'
import { Box, Button, Divider, IconButton, MenuItem, Modal, TextField, Typography } from '@mui/material'
import { Form, Input, Radio, Upload } from 'antd'

const FormModal = (props) => {
const {open,handleClose,onFinish,name,state,city,setCity,btnName}=props
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 450,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 2,
      };
const options = [
        {
          label: "Active",
          value: true,
        },
        {
          label: "Inactive",
          value: false,
        },
      ];
  return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" fontWeight={"600"}>
              {name}
            </Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ marginY: "20px", border: "1px solid #00000099" }} />
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 30,
            }}
            style={{
              maxWidth: 450,
              width: "100%",
              padding: "0 50px",
            }}
            initialValues={state}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
                name="img"
                style={{textAlign:'center',}}
                rules={[
                  {
                    required: true,
                    message: "Please upload Image!",
                  },
                ]}
              >
                <Upload customRequest={(a,b)=>console.log(a)}  >
                  <Button icon={<UploadOutlined />} >Click to Upload Image</Button>
                </Upload>
              </Form.Item>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Please input your surname!",
                },
              ]}
            >
              <Input placeholder="Surname" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please checked your radio!",
                  type: "boolean",
                },
              ]}
            >
              <Radio.Group options={options} />
            </Form.Item>
            <Form.Item
              name="city"
            >
              <TextField
                id="outlined-select-currency"
                select
                label="City"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{
                  width: "355px",
                  outline: "1px solid #000",
                  borderRadius: "4px",
                  marginTop:'7px'
                }}
              >
                <MenuItem value={"All"}>All cites</MenuItem>
                <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
                <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
                <MenuItem value={"Khujand"}>Khujand</MenuItem>
                <MenuItem value={"Kulob"}>Kulob</MenuItem>
              </TextField>
            </Form.Item>
            <Form.Item name="phone"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
                
              },
            ]}
            >
              <Input placeholder="Phone" type="tel" />
            </Form.Item>
            <Divider sx={{ marginY: "20px", border: "1px solid #00000099" }} />
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button variant="contained" type="submit" htmlType="submit">
                {btnName}
              </Button>
            </Form.Item>
          </Form>
        </Box>
      </Modal>
  )
}

export default FormModal