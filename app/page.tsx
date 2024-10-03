import IconComponent from "./components/IconComponent/IconComponent";
import BannerContent from "./components/BannerContent/BannerContent";
import SaveTime from "./components/SaveTime/SaveTime";
import ImproveCollaboration from "./components/ImproveCollaboration/ImproveCollaboration";
import ClickUpBrain from "./components/ClickUpBrain/ClickUpBrain";
import Navbar from "./components/Navbar/Navbar";


export default function Home() {
  return (
    <>
      <Navbar/>
      <BannerContent/>
      <IconComponent/>
      <SaveTime/>
      <ImproveCollaboration/>
      <ClickUpBrain/>
    </>
   
  );
    
}
