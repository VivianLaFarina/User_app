const UserCard = ({ user }) => {
    return (
        <article>
            <div>
                <img className="w-[100] aspect-[3/5] object-cover mx-auto rounder-md  " src={user.image_url} alt=" User image Not Found" />
            </div>
            <h3>{user.frist_name} {user.last_name}</h3>
            <ul>
                <li>
                    <h4>Email</h4>
                    <samp>{user.email}</samp>
                </li>

                <li>
                    <h4>Birthday</h4>
                    <samp><i className='bx bxs-gift' ></i>
                    {user.birthday}
                    </samp>
                </li>
            </ul>
            <div>
                <button>
                <i className='bx bxs-trash' ></i>
                </button>
                <button>
                <i className='bx bxs-edit' ></i>
                </button>
            </div>
        </article>

    )
}

export default UserCard