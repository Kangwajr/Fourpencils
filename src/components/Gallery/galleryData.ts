import { Paintbrush2, Box, Film, BookOpen, PenTool, Palette } from "lucide-react";

export const galleryItems = [
  {
    id: 0,
    title: "2D Animation",
    type: "image",
    icon: Paintbrush2,
    url: "/projects/2d-art.jpeg",
    galleryUrl: "/projects/2d-art.jpeg",
  },
  {
    id: 1,
    title: "3D Animation",
    type: "image",
    icon: Box, // Using Box instead of Cube
    url: "/4pencil-utils/SuperDad.png",
    galleryUrl: "https://unsplash.com/s/photos/3d-art",
  },
  {
    id: 5,
    title: "Illustration/Story books",
    type: "image",
    icon: Palette,
    url: "/illustration1.jpeg",
    galleryUrl: "https://unsplash.com/s/photos/illustration",
  },
  {
    id: 2,
    title: "Character Design",
    type: "video",
    icon: Film,
    url: "/4pencil-utils/Super Boobs.png",
    galleryUrl: "https://unsplash.com/s/photos/animation",
  },
  {
    id: 3,
    title: "Comics",
    type: "image",
    icon: PenTool,
    url: "4pencil-utils/page 4.jpg",
    galleryUrl: "https://unsplash.com/s/photos/comics",
  },
];