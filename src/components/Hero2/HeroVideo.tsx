const HeroVideo = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 z-[1]" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/2025 welcoming.mp4" type="video/mp4" />
      </video>
      {/* <iframe
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/PaPN51Mm5qQ?autoplay=1&mute=1&loop=1&playlist=PaPN51Mm5qQ"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Hero Video"
      ></iframe> */}
    </>
  );
};

export default HeroVideo;
