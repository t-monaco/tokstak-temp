import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import VideoGrid from "./components/VideoGrid";
import { ResponseData } from "./types/types";

function App() {
  const [data, setData] = useState<ResponseData>();

  useEffect(() => {
    axios.get("/api/v1/tiktok-videos").then(({ data }) => setData(data.data));
  }, []);

  return (
    <>
      <Hero />
      <VideoGrid videos={data?.videos} />
    </>
  );
}

export default App;
