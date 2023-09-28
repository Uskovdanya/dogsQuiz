function StartScreenCircle({ width }) {
  return (
    <img
      src="./circle.svg"
      alt=""
      className={`absolute top-0 z-0 ${width}  w-[200px] rounded-tl-[15px] `}
    />
  );
}

export default StartScreenCircle;
