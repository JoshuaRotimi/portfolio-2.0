import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:olorunnipajoshua@gmail.com?subject=${formData.subject}&body=Hi, 
    my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div
      className={
        "h-[110vh] flex relative flex-col text-center md:text-left" +
        " md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      }
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Contact
      </h3>

      <div className={"flex flex-col space-y-5 my-4"}>
        <h4 className={"md:text-2xl font-semibold"}>
          I have got just what you need{" "}
          <span className={"underline decoration-amber-200"}>Let's talk</span>{" "}
        </h4>

        <div className={"space-y-8"}>
          <div className={"flex items-center space-x-5 justify-center"}>
            <PhoneIcon className={"text-[#f7ab0a] h-7 w-7 animate-pulse"} />
            <p className={"md:text-xl"}>+123456789</p>
          </div>

          <div className={"flex items-center space-x-5 justify-center"}>
            <EnvelopeIcon className={"text-[#f7ab0a] h-7 w-7 animate-pulse"} />
            <p className={"md:text-xl"}>olorunnipajoshua@gmail.com</p>
          </div>

          <div className={"flex items-center space-x-5 justify-center"}>
            <MapPinIcon className={"text-[#f7ab0a] h-7 w-7 animate-pulse"} />
            <p className={"md:text-xl"}>Lagos, Nigeria</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"flex flex-col space-y-2 w-[80%] md:w-fit mx-auto"}
        >
          <div
            className={
              "flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2"
            }
          >
            <input
              {...register("name")}
              placeholder={"Name"}
              className={"contactInput"}
              type="text"
            />
            <input
              {...register("email")}
              placeholder={"Email"}
              className={"contactInput"}
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder={"Subject"}
            className={"contactInput"}
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder={"Message"}
            className={"contactInput"}
          />
          <button
            type={"submit"}
            className={
              "bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold"
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
