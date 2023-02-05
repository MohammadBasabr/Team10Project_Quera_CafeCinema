import React from "react";

interface ImageProps extends React.PropsWithChildren {
  srcImage: string;
  altImage: string;
  variant?: "slider" | "cover" | "smallSlider";
}

const ImageComponent: React.FunctionComponent<ImageProps> = (props) => {
  switch (props.variant) {
    case "slider":
      return (
        <img
          className="absolute h-full w-full object-cover object-center opacity-60"
          src={props.srcImage}
          alt={props.altImage}
        />
      );
    case "cover":
      return (
        <img
          className="h-full w-full"
          src={props.srcImage}
          alt={props.altImage}
        />
      );
    case "smallSlider":
      return (
        <img
          className="shadow-black/40 h-full w-full rounded-xl object-cover shadow-xl"
          src={props.srcImage}
          alt={props.altImage}
        />
      );
    default:
      return (
        <img
          className="absolute h-full w-full object-cover object-center opacity-70"
          src={props.srcImage}
          alt={props.altImage}
        />
      );
  }
};

export default ImageComponent;
