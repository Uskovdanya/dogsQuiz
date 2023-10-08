function FinishScreen({ children, points, highscore }) {
  return (
    <>
      <p className="mx-auto my-auto font-Pacifico text-2xl font-normal leading-10 text-h1Color md:text-5xl xl:text-6xl">
        End
      </p>
      <p className="mx-auto my-auto mb-2 mt-2 font-Pacifico text-lg font-normal leading-10 text-h1Color md:text-3xl lg:mb-6 lg:mt-6 xl:mb-12 xl:mt-12 xl:text-6xl">
        highscore: <strong>{highscore}</strong>
      </p>

      <p className="mx-auto my-auto mb-2 mt-2 font-Pacifico text-lg font-normal leading-10 text-h1Color md:text-3xl lg:mb-6 lg:mt-6 xl:mb-12 xl:mt-12 xl:text-6xl">
        Your score: <strong>{points}</strong>
      </p>
      {children}
    </>
  );
}

export default FinishScreen;
