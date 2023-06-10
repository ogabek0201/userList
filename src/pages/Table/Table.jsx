import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { Person, LocationCity, Timelapse, Call } from "@mui/icons-material";
import { useContext, useState } from "react";
import { UserContext } from "../../utils/UserContext";
import Tr from "../../components/Tr/Tr";
import "./style.css";

const Table = () => {
  const {datas,deleteUser,putUser}=useContext(UserContext)
  let [filterActives, setFilterActives] = useState("All");
  let [filterCity, setFilterCity] = useState("All");
  return (
    <Box component={"div"} sx={{ marginY: "40px" }}>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Status"
          defaultValue="All"
          onChange={(e) => {
            setFilterActives(e.target.value);
          }}
          sx={{ width: "200px" }}
        >
          <MenuItem value={"All"}>All status</MenuItem>
          <MenuItem value={true}>Active</MenuItem>
          <MenuItem value={false}>Inactive</MenuItem>
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="City"
          defaultValue="All"
          sx={{ width: "200px" }}
          onChange={(e) => {
            setFilterCity(e.target.value);
          }}
        >
          <MenuItem value={"All"}>All cites</MenuItem>
          <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
          <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
          <MenuItem value={"Khujand"}>Khujand</MenuItem>
          <MenuItem value={"Kulob"}>Kulob</MenuItem>
        </TextField>
      </Box>
      <table>
        <thead>
          <tr>
            <th>
              <Box>
                {" "}
                <Typography
                  component={"p"}
                  sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <Person /> Name
                </Typography>
              </Box>
            </th>
            <th>
              <Box>
                {" "}
                <Typography
                  component={"p"}
                  sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <LocationCity />
                  City
                </Typography>
              </Box>
            </th>
            <th>
              <Box>
                {" "}
                <Typography
                  component={"p"}
                  sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <Timelapse /> Status
                </Typography>
              </Box>
            </th>
            <th>
              <Box>
                {" "}
                <Typography
                  component={"p"}
                  sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <Call /> Phone
                </Typography>
              </Box>
            </th>
            <th>
              <Box>
                {" "}
                <Typography component={"p"} sx={{ width: "30px" }}></Typography>
              </Box>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterActives == "All"
            ? filterCity == "All"
              ? datas?.map((e) => <Tr key={e.id} {...e} deleteUser={deleteUser} putUser={putUser}  />)
              : datas
                  ?.filter((e) => e.city == filterCity)
                  .map((e) => <Tr key={e.id} {...e} deleteUser={deleteUser} putUser={putUser}  />)
            : filterCity == "All"
            ? datas
                ?.filter((e) => e.status == filterActives)
                .map((e) => <Tr key={e.id} {...e} deleteUser={deleteUser} putUser={putUser}  />)
            : datas
                ?.filter((e) => e.status == filterActives)
                .filter((e) => e.city == filterCity)
                .map((e) => <Tr key={e.id} {...e} deleteUser={deleteUser} putUser={putUser} />)}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
