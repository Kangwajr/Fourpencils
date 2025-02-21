import { Paintbrush2, Box, Film, PenTool, Palette } from "lucide-react";

export const galleryItems = [
  {
    id: 0,
    title: "2D Animation",
    type: "image",
    icon: Paintbrush2,
    url: "/projects/2d-art.jpeg",
    galleryUrl: "/gallery",
  },
  {
    id: 1,
    title: "3D Animation",
    type: "image",
    icon: Box, // Using Box instead of Cube
    url: "/4pencil-utils/SuperDad.png",
    galleryUrl: "/gallery",
  },
  {
    id: 5,
    title: "Illustration/Story books",
    type: "image",
    icon: Palette,
    url: "/projects/illustration1.jpeg",
    galleryUrl: "/gallery",
  },
  {
    id: 2,
    title: "Character Design",
    type: "video",
    icon: Film,
    url: "/4pencil-utils/Super Boobs.png",
    galleryUrl: "/Gallery",
  },
  {
    id: 3,
    title: "Comics",
    type: "image",
    icon: PenTool,
    url: "4pencil-utils/page 4.jpg",
    galleryUrl: "/Gallery",
  },
];