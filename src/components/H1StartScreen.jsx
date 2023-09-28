function H1StartScreen() {
  return (
    <>
      <div className="z-10 pt-[50px]">
        <div className="sm-[350px]  relative w-[350px] sm:w-[600px] xl:w-[700px]">
          <img
            src="./bird.svg"
            alt="bird"
            className="absolute  hidden w-[30px] sm:-top-[5px] sm:left-[67.9%] sm:block sm:w-[32px] md:left-[74.3%] md:w-[36px] lg:left-[76.4] xl:-top-[2px] xl:left-[76.5%] xl:w-[40px]"
          />
          <h1 className="mx-0 my-auto mb-6 text-center font-Pacifico text-4xl font-normal text-h1Color md:text-5xl xl:mb-14 xl:text-6xl">
            Interactive Kids Dogs Quiz
          </h1>
        </div>
      </div>
    </>
  );
}

export default H1StartScreen;
