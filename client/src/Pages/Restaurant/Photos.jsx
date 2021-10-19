import { useState, useCallback } from "react";
import PhotoCollection from "../../components/restaurant/PhotoCollection";
import ImageViewer from "react-simple-image-viewer";

const Photos = () => {
  const [images] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/1/52971/f79c42fd86224e5cc3abe93e94159b91.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/52971/e3b10e1e51bdf0cadd740d8466b87463.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/859/6a00e78e2f432b8146740a45077b0859_1569089649.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/65c/4de21730f3abc7d17ee9aff6f768665c_1554048824.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/fc1/4a471d3cef27d37e4975cd8ed357ffc1_1471178446.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/4f3/87c665a1c840db9876e80b77766f94f3_1515742801.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const closeViewer = () => {
    setCurrentImg(0);
    setIsMenuOpen(false);
  };
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImg}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-3">
        {images.map((image, index) => (
          <PhotoCollection
            image={image}
            openViewer={openViewer}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Photos;
