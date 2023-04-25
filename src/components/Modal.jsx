const Modal = ({isShowForm, setIsShowForm, handleSubmit, register, submit}) => {
    const handleClickShowModal = () => {
        setIsShowForm((isShowForm)=> !isShowForm);
    }
    return (
        <section className= {`fixed top-0 left-0 bottom-0 right-0 bg-black/20 flex justify-center items-center transition-opacity ${ isShowForm ? "opacity-100 visible" : "opacity-0 invisible"}`}>

            <form onSubmit={handleSubmit(submit)} className="bg-white p-6 grid gap-5 rounded-2xl w-[300px] relative ">
                <h3 className=" text-2xl font-bold">New User</h3>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold" htmlFor="first_name">First Name</label>
                    <input className="border-[1px] rounded-lg bg-gray-100 p-1 " id="first_name" type="text"
                    {...register("first_name")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold" htmlFor="last_name">Last Name</label>
                    <input className="border-[1px] rounded-lg bg-gray-100 p-1" id="last_name" type="text"
                    {...register("last_name")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold" htmlFor="Email">Email</label>
                    <input className="border-[1px] rounded-lg bg-gray-100 p-1" id="Email" type="email"
                    {...register("email")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold" htmlFor="password">Password</label>
                    <input className="border-[1px] rounded-lg bg-gray-100 p-1" id="password" type="password"
                    {...register("password")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold" htmlFor="birthday">Birthday</label>
                    <input className="border-[1px] rounded-lg bg-gray-100 p-1" id="birthday" type="date"
                    {...register("birthday")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold" htmlFor="image_url">URL Image</label>
                    <input className="border-[1px] rounded-lg bg-gray-100 p-1" id="image_url" type="img" 
                    {...register("image_url")}/>
                </div>
                <i onClick={handleClickShowModal} className='bx bx-x-circle absolute text-gray-500 top-3 right-4 text-3xl hover:text-red-500 cursor-pointer '></i>   
                <button className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm border-[1px] rounded-lg"> Add new user</button>
            </form>
        </section>
    );
};

export default Modal