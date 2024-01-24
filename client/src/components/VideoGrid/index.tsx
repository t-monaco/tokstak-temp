import { Video } from "../../types/types";
import VideoWrapper from "./VideoWrapper";

type VideoGridProps = { videos?: Video[] };

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return videos?.length ? (
    <div className="grid grid-cols-3 gap-8" id="video-grid">
      {videos.map((video) => (
        <VideoWrapper {...video} />
      ))}
    </div>
  ) : (
    <>No Videos</>
  );
};

export default VideoGrid;
