const Modal = ({
    isShowForm,
    setIsShowForm,
    handleSubmit,
    register,
    submit,
    reset,
    setIsUserIdToEdit,
    isUserIdToEdit,
    errors
}) => {
    const handleClickShowModal = () => {
        setIsShowForm((isShowForm) => !isShowForm);
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            image_url: "",
        });
        setIsUserIdToEdit()
    };
    return (
        <section className={`fixed top-0 left-0 bottom-0 right-0 bg-black/20 flex justify-center items-center transition-opacity ${isShowForm ? "opacity-100 visible" : "opacity-0 invisible"}`}>

            <form onSubmit={handleSubmit(submit)} className="bg-white p-6 grid gap-5 rounded-2xl w-[300px] relative ">
                <h3 className=" text-2xl font-bold">{isUserIdToEdit ? "Edit user" : "New user"}</h3>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold cursor-text" htmlFor="first_name">First Name
                        <span className="text-red-500" >*</span >
                    </label>
                    <input
                        className="border-[1px] rounded-lg bg-gray-100 p-1 "
                        id="first_name"
                        type="text"
                        {...register("first_name")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold cursor-text" htmlFor="last_name">Last Name
                        <span className="text-red-500" >*</span >
                    
                    </label>
                    <input
                        className="border-[1px] rounded-lg bg-gray-100 p-1"
                        id="last_name"
                        type="text"
                        {...register("last_name")} />
                </div>
                <div className="grid  gap-1 ">
                    <label className="text-xs font-semibold cursor-text" htmlFor="Email">Email
                        <span className="text-red-500" >*</span >
                    </label>
                    <input
                        className="border-[1px] rounded-lg bg-gray-100 p-1 grid cursor-text"
                        id="Email"
                        type="email"
                        {...register("email")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold cursor-text" htmlFor="password">
                        Password
                        <span className="text-red-500" >*</span >
                    </label >
                    <input
                        className="border-[1px] rounded-lg bg-gray-100 p-1 cursor-text"
                        id="password"
                        type="password"
                        {...register("password")} />
                </div>

                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold cursor-pointer" htmlFor="birthday">
                        Birthday
                    </label>
                    <input
                        className="border-[1px] rounded-lg bg-gray-100 p-1"
                        id="birthday"
                        type="date"
                        {...register("birthday")} />
                </div>
                <div className="grid gap-1 ">
                    <label className="text-xs font-semibold cursor-text" htmlFor="image_url">
                        URL Image
                    </label>
                    <input
                        className="border-[1px] rounded-lg bg-gray-100 p-1"
                        id="image_url"
                        type="img"
                        {...register("image_url", {
                            pattern: {
                              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                              message: " Ivalid URL - The URL you requested is not valid or has expired."
                            }
                        })} 
                        />
                        <span className=" text-center text-gray-400 font-semibold p-4 border-l ">
                            {errors.image_url && errors.image_url.message}
                        </span>
                </div>
                <i onClick={handleClickShowModal} className='bx bx-x-circle absolute text-gray-500 top-3 right-4 text-3xl hover:text-red-500 hover:animate-spin cursor-pointer '></i>
                <button className="bg-purple-p text-white p-2 bg-gradient-to-r from-indigo-500 to-purple-500bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-purple-p/90 transition-colors hover:animate-pulse  text-sm border-[1px] rounded-lg"> {isUserIdToEdit ? " Save Changes" : "Add New User "}</button>
            </form>
        </section>
    );
};

export default Modal