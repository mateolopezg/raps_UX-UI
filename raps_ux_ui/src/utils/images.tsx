import image1 from "../assets/planters1.jpg";
import image2 from "../assets/planters2.jpg";
import image3 from "../assets/planters3.jpg";
import image4 from "../assets/planters4.jpg";
import image5 from "../assets/planters5.jpg";
import image6 from "../assets/planters6.jpg";

interface ImageData {
  id: number;
  urls: string;
  alt_description: string;
}

export const images: ImageData[] = [
  {
    id: 0,
    urls: image1,
    alt_description: "description general planters 1",
  },
  {
    id: 1,
    urls: image2,
    alt_description: "description general planters 2",
  },
  {
    id: 2,
    urls: image3,
    alt_description: "description general planters 3",
  },
  {
    id: 3,
    urls: image4,
    alt_description: "description general planters 4",
  },
  {
    id: 4,
    urls: image5,
    alt_description: "description general planters 5",
  },
  {
    id: 5,
    urls: image6,
    alt_description: "description general planters 6",
  },
];
