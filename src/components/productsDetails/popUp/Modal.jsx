import "./loader.css";
const Modal = ({ isModalVisible, message, action }) => {
  return (
    <div
      className={` fixed flex flex-row backdrop-blur-md	space-x-4	 justify-center self-center items-center h-[200px] w-[500px] z-50 bg-[#ffffff62] text-[25px] mt-auto text-black border shadow-lg px-6 py-4 transition duration-700 ease-in-out  ${
        isModalVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      id="six"
    >
      <span className="loader"></span>

      <div className="flex flex-col  		 justify-center self-center items-start">
        <span>
          {message ? message : "Product added successfully!"}
          {"  "}
        </span>
        <span className=" font-bold">
          {action ? action : "Check your Cart"}
        </span>
      </div>
    </div>
  );
};

export default Modal;
