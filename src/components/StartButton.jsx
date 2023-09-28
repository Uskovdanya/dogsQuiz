function StartButton({ dispatch, onClick, children }) {
  return (
    <>
      <button
        className="mx-auto my-auto flex h-16 w-48 items-center justify-start gap-4 rounded-lg bg-green-800 pl-8 pr-6 text-center font-Pacifico text-2xl font-normal leading-10 text-white  transition-all duration-100 ease-in hover:bg-buttonHover active:bg-buttonActive active:outline-none md:h-20 md:w-64 md:gap-6 md:py-4 md:pl-10 md:pr-8 md:text-4xl lg:h-24 lg:w-72 lg:gap-8 lg:py-6 lg:pl-10 lg:pr-14"
        onClick={onClick}
      >
        <img
          src="./buttonBird.svg"
          alt="bird Icon"
          className="w-[38px] md:w-[45px] xl:w-[55px]"
        />
        {children}
      </button>
    </>
  );
}

export default StartButton;
