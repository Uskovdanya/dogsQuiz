function StartScreen({ children }) {
  return (
    <>
      <div className="z-50 flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}

export default StartScreen;
