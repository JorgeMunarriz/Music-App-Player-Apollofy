import { Outlet } from "react-router-dom";
import { SideBar } from "..";
import { Footer } from "..";
import { GlobalPrivatePageStyles, urlAlbum, urlArtist, urlTrack } from "../../global";
import { getDataApi } from "../../api/request.service";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Layout = () => {
  const { getAccessTokenSilently } = useAuth0();

  
  // const fetchData = async () => {
  //   const data = await getDataApi(urlTrack);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <GlobalPrivatePageStyles>
        <SideBar />

        <Outlet />

        <Footer />
      </GlobalPrivatePageStyles>
    </>
  );
};

export default Layout;
