function StartScreenQuiz({ title, fourDogs }) {
  return (
    <>
      <div className=" mt-24 text-center font-normal md:mt-2">
        <h4 className="font-Pacifico  text-xl leading-10 text-whereIsText">
          Where's the ...?
        </h4>
        <h3 className="z-[1000] font-Sniglet text-[24px] text-arrowColor md:text-[36px] xl:text-[48px]">
          {fourDogs[title].name}
        </h3>
      </div>
    </>
  );
}

export default StartScreenQuiz;
