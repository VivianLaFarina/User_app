const Header = ({setIsShowForm}) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)

  }
  return (
    <header className=""
    ><h1>Users</h1>
    <button onClick={handleClickShowModal} className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm border-[1px] rounded-lg "> <i className='bx bxs-user-plus text-2xl'></i> Create new user</button>
    </header>
  )
}

export default Header