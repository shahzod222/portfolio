import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppContext } from "../utils/AppContext";

const schema = z.object({
  name: z
    .string()
    .regex(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm)
    .min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

const telegram_bot_id = "7123567208:AAEYTUcKL_LeDRhy4jok_gWgAHfekdeNnr4";
const chat_id = 720043134;

const Contact = () => {
  const { isDark } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: `Name: ${data.name} \nEmail: ${data.email} \nMessage: ${data.message}`,
        parse_mode: "HTML",
      }),
    });

    toast.success("Message successfully sent!", {
      pauseOnHover: false,
      theme: "dark",
      autoClose: 3000,
    });

    reset({ name: "", email: "", message: "" });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen h-full flex justify-center items-center p-4"
    >
      <form
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email -
            shahzodubaydullaev2206@gmail.com
          </p>
        </div>
        <input
          className="my-2 p-2"
          style={{
            background: `${isDark ? "#ccd6f6" : "rgb(209 213 219)"}`,
            color: "black",
          }}
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && (
          <div className="text-red-500 font-bold text-md">
            {errors.name.message}
          </div>
        )}
        <input
          className="my-2 p-2"
          style={{
            background: `${isDark ? "#ccd6f6" : "rgb(209 213 219)"}`,
            color: "black",
          }}
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <div className="text-red-500 font-bold text-md">
            {errors.email.message}
          </div>
        )}
        <textarea
          className="my-2 p-2"
          style={{
            background: `${isDark ? "#ccd6f6" : "rgb(209 213 219)"}`,
            color: "black",
          }}
          rows="10"
          placeholder="Message"
          {...register("message")}
        ></textarea>
        {errors.message && (
          <div className="text-red-500 font-bold text-md">
            {errors.message.message}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            !isDark && "border-black"
          } hover:text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center`}
        >
          {!isSubmitting ? "Let's Collaborate" : "Loading..."}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
