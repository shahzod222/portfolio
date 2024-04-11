const CustomContainer = ({ children, name }) => {
  return (
    <div
      name={name}
      className="flex flex-col justify-center items-center w-full min-h-screen h-full"
    >
      {children}
    </div>
  );
};

export default CustomContainer;
