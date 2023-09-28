function PhotosItem({ item, index, dispatch, title, answer }) {
  const hasAnswered = answer !== null;
  return (
    <img
      src={item.image.url}
      alt={item.name}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
      className={`h-full w-full cursor-pointer rounded-lg  object-cover ${
        index === answer ? "sepia " : ""
      } ${
        hasAnswered
          ? index === title
            ? "border-4 border-arrowColor sepia-0"
            : "grayscale"
          : ""
      }`}
    />
  );
}

export default PhotosItem;
