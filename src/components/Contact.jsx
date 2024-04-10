import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const telegram_bot_id = "7123567208:AAEYTUcKL_LeDRhy4jok_gWgAHfekdeNnr4";
const chat_id = 720043134;

const Contact = () => {
  const [u_name, setU_Name] = useState("");
  const [u_email, setU_Email] = useState("");
  const [u_message, setU_Message] = useState("");

  const sender = function (e) {
    e.preventDefault();

    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: `Name: ${u_name} \nEmail: ${u_email} \nMessage: ${u_message}`,
        parse_mode: "HTML",
      }),
    });
    toast.success("Message successfully sent!", {
      pauseOnHover: false,
      theme: "dark",
      autoClose: 3000,
    });

    setU_Name("");
    setU_Email("");
    setU_Message("");
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action=""
        onSubmit={sender}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            shahzodubaydullaev2206@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={u_name}
          onChange={(e) => setU_Name(e.target.value)}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={u_email}
          onChange={(e) => setU_Email(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={u_message}
          onChange={(e) => setU_Message(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
