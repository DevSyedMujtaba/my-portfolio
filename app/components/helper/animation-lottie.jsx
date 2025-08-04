"use client"

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div style={{ width: '95%', height: '200px', backgroundColor: '#f0f0f0' }} />
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!isClient) {
    return <div style={{ width: '95%', height: '200px', backgroundColor: '#f0f0f0' }} />;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;