import React from "react";
import ReactPlayer from "react-player";
import video from "../../../../public/terrorbass.mp4";
import poster from "../../../../public/image2.png";

const Hero = () => {
  return (
    <div className="flex justify-between text-white">
      {/* photo  */}
      <div className="w-6/12">
        <ReactPlayer
          url={video}
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          playbackRate={1.0}
          loop={true}
          muted={false}
          pip={false}
        />
      </div>
      {/* cate  */}
      <div className="w-6/12 lg:text-lg text-sm tracking-wider px-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
        consequuntur error? Fugiat temporibus esse a quisquam quibusdam fugit
        odio aspernatur tempore molestiae at in ipsam, reprehenderit culpa
        laborum. Quo, commodi. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ad quia iste vel totam dolorum assumenda accusamus
        commodi, nulla quae autem deleniti dicta illo nam pariatur quidem
        distinctio eaque et harum. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. In reprehenderit rerum adipisci magni, amet a culpa
        nobis ad maxime totam debitis pariatur molestiae officiis magnam quasi
        ipsa quae eligendi sit?
      </div>
    </div>
  );
};

export default Hero;
