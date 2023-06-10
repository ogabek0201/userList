import { useEffect, useState } from "react";
import { axiosApi, axiosFile } from "../utils/axiosRequest";
import {UserContext} from '../utils/UserContext'


const ContextAPI = ({ children }) => {
  const [datas, setDatas] = useState([]);
  async function get() {
    try {
      let { data } = await axiosApi.get("users");
      setDatas(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function postUser(obj) {
    try {
      let { data } = await axiosApi.post(`users`, obj);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteUser(id) {
    try {
      let { data } = await axiosApi.delete(`users/${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function putUser(id, obj) {
    try {
      let { data } = await axiosApi.put(`users/${id}`, obj);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function postFile(obj) {
    try {
      let { data } = await axiosFile.post(`upload`, obj);
      return data
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    get();
  }, []);

  return (
    <UserContext.Provider value={{ datas, get, postUser, putUser, deleteUser,postFile }}>
      {children}
    </UserContext.Provider>
  );
};
export default ContextAPI;
