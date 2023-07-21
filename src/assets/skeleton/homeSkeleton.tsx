import ContentLoader from "react-content-loader";

const HomeSkeleton = (props: object) => (
  <ContentLoader speed={2} width={1000} height={50} viewBox="0 0 1000 600" backgroundColor="#E85973" foregroundColor="#ecebeb" {...props}>
    <rect x="103" y="263" rx="100" ry="800" width="900" height="300" />
  </ContentLoader>
);

export default HomeSkeleton;
