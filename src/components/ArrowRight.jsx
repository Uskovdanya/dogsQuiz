function ArrowRight({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <div
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="ouline-none absolute bottom-[33px] right-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-arrowColor transition-all duration-100 ease-in hover:bg-buttonHover hover:outline-none active:bg-buttonActive md:bottom-12 md:right-16 lg:bottom-14 lg:right-24 xl:bottom-10 xl:right-20 xl:h-[50px] xl:w-[50px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="221"
          height="220"
          viewBox="0 0 221 220"
          fill="none"
          className="h-16 w-16"
        >
          <path
            d="M85.7926 145.477L121.282 109.988L85.7926 74.4984C82.2254 70.9311 82.2254 65.1687 85.7926 61.6015C89.3598 58.0342 95.1223 58.0342 98.6895 61.6015L140.673 103.585C144.24 107.152 144.24 112.915 140.673 116.482L98.6895 158.466C95.1223 162.033 89.3598 162.033 85.7926 158.466C82.3168 154.898 82.2254 149.044 85.7926 145.477Z"
            fill="white"
          />
        </svg>
      </div>
    );
  if (index === numQuestions - 1)
    return (
      <div
        onClick={() => dispatch({ type: "finish" })}
        className="ouline-none absolute bottom-[33px] right-4 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-arrowColor text-sm text-white transition-all duration-100 ease-in hover:bg-buttonHover hover:outline-none active:bg-buttonActive md:bottom-12 md:right-16 lg:bottom-14 lg:right-24 xl:bottom-10 xl:right-20  xl:h-[50px] xl:w-[50px]"
      >
        Done
      </div>
    );
}

export default ArrowRight;
