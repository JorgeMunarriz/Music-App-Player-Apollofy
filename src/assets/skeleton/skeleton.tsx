
import ContentLoader from "react-content-loader"

const LoaderPlaylist = (props) => (
  <ContentLoader 

    speed={2}
    width={2000}
    height={700}
    viewBox="0  0 900 1000"
    backgroundColor="#e8590f"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="50" y="13" rx="100" ry="50" width="800" height="700" /> 
    
   
    
    
  </ContentLoader>
)

export default LoaderPlaylist
