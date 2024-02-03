import SliderButtonNext from "./SliderButtonNext/SliderButtonNext";
import SliderButtonPrev from "./SliderButtonPrev/SliderButtonPrev";
import SliderImage from "./SliderImage/SliderImage";
import ImageDescription from "./ImageDescription/ImageDescription";
import ImagesData from "./ImagesData/ImagesData";
import { useState } from "react";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <SliderButtonPrev
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
        ImagesData={ImagesData}
      />
      <SliderImage src={ImagesData[currentImageIndex].src} />
      <ImageDescription>{ImagesData[currentImageIndex].desc}</ImageDescription>
      <SliderButtonNext
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
        ImagesData={ImagesData}
      />
    </>
  );
};

export default Slider;

// import SliderButtonNext from "./SliderButtonNext/SliderButtonNext";
// import SliderButtonPrev from "./SliderButtonPrev/SliderButtonPrev";
// import SliderImage from "./SliderImage/SliderImage";
// import ImageDescription from "./ImageDescription/ImageDescription";
// import { useState } from "react";

// const Slider = () => {
//   const images = [
//     {
//         src: "",       desc: "Image 1",
//     },

//     {
//         src: "",      desc: "image 2",
//     },

//     {
//         src: "",      desc: "Image 3",
//     },

//     {
//         src: "",      desc: "Image 4",
//     },

//     {
//       src: "",
//       desc: "Image 5",
//     },
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const prevImage = () => {
//     setCurrentImageIndex(images[currentImageIndex - 1])
//   };

//   const nextImage = () => {
//     setCurrentImageIndex(images[currentImageIndex + 1])
//   };
//   return (
//     <>
//       <SliderButtonPrev onClick={prevImage} />
//       <SliderImage src={images[currentImageIndex].src} />
//       <ImageDescription desc={images[currentImageIndex].description} />
//       <SliderButtonNext onClick={nextImage} />
//     </>
//   );
// };

// export default Slider;
