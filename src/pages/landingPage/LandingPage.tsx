import { Logo, LoaderAudio } from "../../components";
import { LandingPageStyles } from "./landingPage.styles";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Title } from "../../global";

export const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    // Simulating a loading state for 3 second when the component mounts.
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/starting")
    }, 3000);

  }, []);

  return (
    <>
      {loading ? (
        <LandingPageStyles>
        <Logo />
        <LoaderAudio />
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
