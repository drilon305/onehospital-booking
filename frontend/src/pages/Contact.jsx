const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae totam
          quaerat dolorem dolore quos expedita.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              className="form__input mt-1"
              placeholder="example@gmail.com"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              className="form__input mt-1"
              placeholder="Let us know how we can help you"
              id="subject"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              type="text"
              rows="6"
              className="form__input mt-1"
              placeholder="Leave a message..."
              id="message"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
