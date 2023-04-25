import UserCard from "./UserCard";


const UsersList = ({users, deleteUser }) => {
  return (
    <section className="grid gap-12 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] justify-center">
      {users.map((user) =>(
       <UserCard key={user.id}  user={user} deleteUser={deleteUser}/>
      ))}
    </section>
  )
}

export default UsersList