import Embed, { defaultProviders } from "react-tiny-oembed";
import { Video } from "../../../types/types";

type VideoProps = Video;

const TikTokProvider = {
  provider_name: "TikTok",
  provider_url: "http://www.tiktok.com/",
  endpoints: [
    {
      schemes: ["https://www.tiktok.com/*", "https://www.tiktok.com/*/video/*"],
      url: "https://www.tiktok.com/oembed",
    },
  ],
};

const LoadingVideo: React.FC = () => (
  <div className="grid place-items-center">
    <span className="loading loading-ring loading-lg"></span>;
  </div>
);

const VideoWrapper: React.FC<VideoProps> = ({ embed_link }) => {
  return (
    <Embed
      url={embed_link}
      providers={[...defaultProviders, TikTokProvider]}
      LoadingFallbackElement={<LoadingVideo />}
    />
  );
};

export default VideoWrapper;
