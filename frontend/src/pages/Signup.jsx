import signupImg from '../assets/images/signup.gif'
import avatar from '../assets/images/doctor-img01.png'

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
            <h3 className="text-headingColor leading-9 text-[22px] font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form>
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value=""
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
                  value=""
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
                  value=""
                  className="w-full py-3 pr-4  border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[16px] leading-7 text-textColor placeholder:text-textColor
                 cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    className="text-textColor text-[15px] font-semibold
               leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="role"
                    className="text-textColor text-[15px] font-semibold
               leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid
                 border-primaryColor flex items-center justify-between"
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-full rounded-full"
                  />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex
                   items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor 
                   font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;