import { useAppContext } from "./AppContext";

const CustomButton = ({ type, children }) => {
  const { isDark } = useAppContext();
  const isOutlined = type === "outline";

  return (
    <button
      className={`${
        !isDark && isOutlined && "border-black "
      } hover:text-white group border-2 px-6 py-3 my-4 flex items-center ${
        !isOutlined && "border-pink-600 text-white bg-pink-600"
      } ${isOutlined && "hover:bg-pink-600 hover:border-pink-600"} btn`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
