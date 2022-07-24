import { Theme } from "@mui/material";
import React from "react";

interface BaseComponentProps {
  theme: Theme;
}

const BaseComponent: React.FC<BaseComponentProps> = ({ theme }) => {
  return (
    <>
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <link rel="preload" href="/fonts/Inter-SemiBold.ttf" as="font" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/Inter-Regular.ttf" as="font" crossOrigin="anonymous" />
      <link
        rel="preload"
        as="style"
        type="text/css"
        crossOrigin="true"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="preload"
        type="text/css"
        as="style"
        crossOrigin="true"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link
        rel="preload"
        as="font"
        crossOrigin="true"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="preload"
        as="font"
        crossOrigin="true"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
      ></link>

    </>
  );
};

export default BaseComponent;
