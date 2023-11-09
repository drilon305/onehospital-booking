import signupImg from '../assets/images/signup.gif'

const Signup = () => {
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className='text-headingColor leading-9 text-[22px] font-bold mb-10'>Create an <span className='text-primaryColor'>account</span></h3>

            <form>
            <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value=''
              className="w-full py-3 pr-4  border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[16px] leading-7 text-textColor placeholder:text-textColor
                 cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value=''
              className="w-full py-3 pr-4  border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[16px] leading-7 text-textColor placeholder:text-textColor
                 cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value=''
              className="w-full py-3 pr-4  border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[16px] leading-7 text-textColor placeholder:text-textColor
                 cursor-pointer"
              required
            />
          </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;