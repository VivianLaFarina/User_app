const Header = ({setIsShowForm}) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)

  }
  return (
    <header className=" flex justify-between px-7 py-12  text-4xl font-bold "
    ><h1 className="flex justify-center">Users</h1>
    <button onClick={handleClickShowModal} className="bg-purple-p text-white p-2 hover:bg-purple-p/80 transition-colors text-sm border-[1px] rounded-lg flex justify-between items-center "> <i className='bx bxs-user-plus text-purple-950 text-xl rounded-2xl flex'></i> Add new user</button>
    </header>
  )
}

export default Header