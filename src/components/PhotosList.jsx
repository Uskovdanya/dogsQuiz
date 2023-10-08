function PhotosList({ children }) {
  return (
    <div className="grid-cols-section3 grid-rows-section5  mt-4 grid place-content-center gap-6 md:mt-0 md:grid-cols-section2 md:grid-rows-section2 lg:grid-cols-section1 lg:grid-rows-section1">
      {children}
    </div>
  );
}

export default PhotosList;
