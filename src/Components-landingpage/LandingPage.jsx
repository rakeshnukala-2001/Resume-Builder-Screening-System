import MainSection from "../Components-landingpage/MainSection";
import TrustedCompanies from "../Components-landingpage/TrustedCompanies";
import FeatuersGrid from "../Components-landingpage/FeatuersGrid"
import CallToAction from "../Components-landingpage/CallToAction";
import Header from "../Components-landingpage/Header";
 
const LandingPage = () => {
  return (
    <>
      <Header/>
      <MainSection/>
      <TrustedCompanies />
      <FeatuersGrid />
      <CallToAction />
    </>
  );
}
export default LandingPage;
 