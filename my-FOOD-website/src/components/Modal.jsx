// import Image from "next/image";
const Modal = ({ title, description, onClose, children }) => {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
        onClick={onClose}
      >
        <div
          className="relative bg-white w-1/3 p-6 rounded shadow-lg items-center"
          onClick={(e) => e.stopPropagation()}
        >
        
          <button onClick={onClose} className="text-gray-500 absolute top-1 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
          </button>
          <div className="flex flex-col justify-between items-center my-4 ">
            <h2 className="text-3xl text-orange-600 font-extrabold">{title}</h2>
           <p className="mb-4 text-slate-600">{description}</p>
          </div>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;