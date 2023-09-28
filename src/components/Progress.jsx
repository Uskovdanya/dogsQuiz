function Progress({ index, numQuestions, answer, points }) {
  return (
    <div className="absolute right-[45px] top-[35px]">
      <div className=" grid w-[200px] overflow-hidden rounded-2xl bg-arrowColor">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
          className=" h-[15px] w-full rounded-2xl"
        />
      </div>
      <p className="absolute left-0 mt-1 font-Sniglet text-[18px] text-arrowColor">
        {points}
      </p>
      <p className="absolute right-0 mt-1 font-Sniglet text-[18px] text-arrowColor">
        Question {index + 1}/{numQuestions}
      </p>
    </div>
  );
}

export default Progress;
