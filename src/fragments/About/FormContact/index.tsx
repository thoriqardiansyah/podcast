import ButtonBlack from "../../../components/Button/ButtonBlack";

const FormContact = () => {
  return (
    <div className="mx-[300px] pt-10 mt-100 border-t border-black">
      <form className="flex flex-col gap-y-10">
        <div className="flex gap-x-5">
          <div className="flex flex-1 flex-col gap-y-4">
            <label
              htmlFor=""
              className="font-bold text-sm after:content-['*'] after:relative after:text-secondary after:left-2"
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="p-5 focus:outline-none  border-[1.5px] border-black  focus:border-secondary active:border-secondary rounded-lg text-base font-bold placeholder:font-medium placeholder:text-semiblack"
            />
          </div>
          <div className="flex flex-1 flex-col gap-y-4">
            <label
              htmlFor=""
              className="font-bold text-sm after:content-['*'] after:text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="p-5 focus:outline-none  border-[1.5px] border-black  focus:border-secondary rounded-lg text-base font-bold placeholder:font-medium placeholder:text-semiblack"
            />
          </div>
        </div>
        <div className="flex gap-x-5">
          <div className="flex flex-1 flex-col gap-y-4">
            <label
              htmlFor=""
              className="font-bold text-sm after:content-['*'] after:relative after:text-secondary after:left-2"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="p-5 focus:outline-none  border-[1.5px] border-black  focus:border-secondary active:border-secondary rounded-lg text-base font-bold placeholder:font-medium placeholder:text-semiblack"
            />
          </div>
          <div className="flex flex-1 flex-col gap-y-4">
            <label
              htmlFor=""
              className="font-bold text-sm after:content-['*'] after:text-secondary"
            >
              Subject
            </label>
            <input
              type="email"
              placeholder="Subject..."
              className="p-5 focus:outline-none  border-[1.5px] border-black  focus:border-secondary rounded-lg text-base font-bold placeholder:font-medium placeholder:text-semiblack"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <label
            htmlFor=""
            className="font-bold text-sm after:content-['*'] after:text-secondary"
          >
            Message
          </label>
          <textarea
            name=""
            id=""
            rows={5}
            className="p-5 focus:outline-none  border-[1.5px] border-black  focus:border-secondary rounded-lg text-base font-bold placeholder:font-medium placeholder:text-semiblack"
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium text-sm mr-15 before:content-['*'] before:text-secondary">
            required
          </p>
          <ButtonBlack>Send message</ButtonBlack>
          <p className="font-medium text-sm w-[176px]]">
            Viverra at port <br /> accumsan.{" "}
            <u className="text-secondary">Orci non</u>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
