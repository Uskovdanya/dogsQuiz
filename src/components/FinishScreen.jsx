function FinishScreen({ children, points, highscore }) {
  return (
    <>
      <p className="mx-auto my-auto font-Pacifico text-6xl font-normal leading-10 text-h1Color">
        End
      </p>
      <p className="mx-auto my-auto mb-12 mt-12 font-Pacifico text-6xl font-normal leading-10 text-h1Color">
        highscore: <strong>{highscore}</strong>
      </p>

      <p className="mx-auto my-auto mb-12 mt-12 font-Pacifico text-6xl font-normal leading-10 text-h1Color">
        Your score: <strong>{points}</strong>
      </p>
      {children}
    </>
  );
}

export default FinishScreen;
