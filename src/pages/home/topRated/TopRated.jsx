import { useState } from "react";
import {useFetch} from "../../../hooks/useFetch";
import { ContentWrapper } from "../../../components/contentWrapper/ContentWrapper"
import { SwitchTabs } from "../../../components/switchTabs/SwitchTabs"
import { Carousel } from "../../../components/carousel/Carousel";

export const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Top rated</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data= {data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  )
}
