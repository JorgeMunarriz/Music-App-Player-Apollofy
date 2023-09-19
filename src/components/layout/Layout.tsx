import { Outlet } from "react-router-dom";
import { SideBar } from "..";
import { Footer } from "..";
import { GlobalPrivatePageStyles} from "../../global";



const Layout = () => {
;

  
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
