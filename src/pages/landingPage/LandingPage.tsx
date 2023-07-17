import { Logo, Title } from "../../components";
import { LandingPageStyles } from "./landingPage.styles";
import { useState, useEffect } from "react";
import { Loader } from "../../components/loader/Loader";
import {  useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    // Simulating a loading state for 3 second when the component mounts.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login")
    }, 3000);

  }, []);

  return (
    <>
      {loading ? (
        <LandingPageStyles>
        <Logo />
        <Loader />
        <Title />
      </LandingPageStyles>
        
      ) : (
        <LandingPageStyles>
          <Logo />
          <Title />
        </LandingPageStyles>
      )}
    </>
  );
};
