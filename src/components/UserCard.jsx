const UserCard = ({ user, deleteUser, handleClickEdit }) => {
    return (
        <article className="rounded-2xl bottom-2 bg-slate-100">
            <div>
                <img className="w-[100] aspect-[2/3] object-cover mx-auto rounder-2xl  " src={user.image_url ? user.image_url : "/images/noImage.jpg"} alt=" User image Not Found" />
            </div>
            <h3 className="px-3 py-6 text-3xl font-semibold  border-t-2">{user.frist_name} {user.last_name}</h3>
            <ul>
                <li>
                    <h4 className="px-3 py-2 text-xl text-gray-400">Email</h4>
                    <samp className="px-3 py-2 text-xl">{user.email}</samp>
                </li>
                <li>
                    <h4 className="px-3 py-2 text-xl  text-gray-400">Birthday</h4>
                    <samp className="px-3 py-2 text-xl flex gap-3 items-center"><i className='bx bxs-gift text-3xl' ></i>
                        {user.birthday}
                    </samp>
                </li >
            </ul >
            <div className="px-3 py-2 text-md flex justify-end gap-3 border-t-2">
                <button className=" bg-red-600 rounded-md text-white p-2 text-2xl  hover:bg-red-400 transition-colors" onClick={() => deleteUser(user.id)}>
                    <i className='bx bxs-trash ' ></i>
                </button>
                <button className=" bg-slate-300 rounded-md text-white p-2 hover:bg-slate-200 transition-colors" onClick={() => handleClickEdit(user)}>
                    <i className='bx bxs-edit text-3xl' ></i>
                </button>
            </div>
        </article>

    )
}

export default UserCard