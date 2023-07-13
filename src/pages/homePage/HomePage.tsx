import { GetData } from "../../api/GetData";
import { Footer, GridContainer, HomeMainContainerStyles, SideBar } from "../../components";
import { HomePageStyles } from "./homePage.style";

export const HomePage = () => {
  GetData();
  return (
    <HomeMainContainerStyles>
      <SideBar />
      <Footer />
      {/* <HomeMainContainerStyles /> */}
    </HomeMainContainerStyles>
  );
};
