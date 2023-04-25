import axios from "axios";
import { useEffect, useState} from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import UserList from "./components/UsersList";
import {useForm} from "react-hook-form"

const BASE_URL = "https://users-crud.academlo.tech"

function App() {
  const [users, setUsers] = useState([])
  const [isShowForm, setIsShowForm] = useState(false);

  const { register, handleSubmit, reset} = useForm();

  const submit = (data) => {
    createUser(data)
  };

  const createUser = (data) => {
    const URL = BASE_URL + "/users/";

    axios
      .post(URL, data)
      .then(() => {
        getAllUsers()
        reset({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          birthday: "",
          image_url: "",
        });
        setIsShowForm(!isShowForm)
      })
      .catch((err) => console.log(err));
  }
  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;
    axios.delete(URL)
    .then((res) => getAllUsers(res.data))
    .catch((err) => console.log(err));
  }

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className="font-sans">
      <Header setIsShowForm={setIsShowForm} />
      <Modal
        register={register}
        handleSubmit={handleSubmit}
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        submit={submit}
      />
      <UserList users={users} deleteUser={deleteUser}/>
  


    </main>
  )
}

export default App

