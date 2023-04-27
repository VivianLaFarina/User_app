const Header = ({setIsShowForm}) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)

  }
  return (
    <header className=" flex justify-between px-7 py-12  text-4xl font-bold   "
    ><h1 className="flex justify-center  ">Users</h1>
    <button onClick={handleClickShowModal} className="bg-purple-p text-white bg-gradient-to-r from-indigo-500 to-purple-500 p-2 hover:bg-purple-p/80 transition-colors hover:animate-pulse text-sm border-[1px] rounded-lg flex justify-between  gap-1 items-center cursor-pointer  "> <i className='bx bxs-user-plus text-white text-3xl rounded-2xl flex'></i> Add new user</button>
    </header>
  )
}

export default Header