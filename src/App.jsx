import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import UserList from "./components/UsersList";
import { useForm } from "react-hook-form";

const BASE_URL = "https://users-crud.academlo.tech";

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: "",

};

function App() {
  const [users, setUsers] = useState([]);
  const [isUserIdToEdit, setIsUserIdToEdit] = useState();
  const [isShowForm, setIsShowForm] = useState(false);

  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  const submit = (data) => {
    if(!data.birthday) {
      data.birthday = null;
    }
    if(!data.image_url) {
      data.image_url = null;
    }
    if(isUserIdToEdit){
      editUser(data);
      } else {
      createUser(data);
    }
  };

  const createUser = (data) => {
    const URL = BASE_URL + "/users/";

    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm)
      })
      .catch((err) => console.log(err));
  };


  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`;
    
    axios
      .delete(URL)
      .then((res) => getAllUsers(res.data))
      .catch((err) => console.log(err));
  };

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`;

    axios
    .patch(URL, data)
    .then(() =>{
      getAllUsers();
      reset (DEFAULT_VALUES);
      setIsShowForm(!isShowForm);
      setIsUserIdToEdit();
    })
    .catch((err) => console.log(err));

  };

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  };
  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset(data);
    setIsUserIdToEdit(data.id);
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
        reset={reset}
        setIsUserIdToEdit={setIsUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit}
        errors = {errors}

      />
      <UserList 
      users={users} 
      deleteUser={deleteUser} 
      handleClickEdit={handleClickEdit} 
      />



    </main>
  )
}

export default App

