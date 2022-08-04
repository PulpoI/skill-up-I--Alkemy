const Carousel = ({ imgSource }) => {
  console.log(imgSource);
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {imgSource.map((oneImg, idx) => {
          return (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              data-bs-interval="4000"
              key={oneImg.id}
            >
              <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/w500/${oneImg.backdrop_path}`}
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h4 className="text-start">{oneImg.title}</h4>
                <p className="text-start">
                  {oneImg.overview.substring(0, 150)}...
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
