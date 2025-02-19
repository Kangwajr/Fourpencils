const HeroVideo = () => {
  return (
    <>
      <div className="absolute inset-0 z-[1]" />      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source src="/videos/4p log.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default HeroVideo;
