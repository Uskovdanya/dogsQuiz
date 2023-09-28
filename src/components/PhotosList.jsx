function PhotosList({ children }) {
  return (
    <div className="grid-cols-section2 grid-rows-section2  mt-4 grid place-content-center gap-6 md:mt-0 lg:grid-cols-section1 lg:grid-rows-section1">
      {children}
    </div>
  );
}

export default PhotosList;
