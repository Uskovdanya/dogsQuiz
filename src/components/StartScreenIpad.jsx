function StartScreenIpad({ children, status }) {
  const scale = status === "active" ? "xl:scale-125" : null;
  return (
    <div
      className={`relative z-10 m-auto rounded-[40px] border-[25px] border-black pt-4 shadow-border lg:h-[550px] lg:w-[900px] xl:mt-12 ${scale} mt-1 h-[560px] w-[360px] 
        bg-red-50 transition-all duration-200 ease-out md:h-[500px] md:w-[700px] `}
    >
      {children}
    </div>
  );
}

export default StartScreenIpad;
