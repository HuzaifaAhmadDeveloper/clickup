import Image from "next/image";
import IconComponent from "./components/IconComponent/IconComponent";
import BannerContent from "./components/BannerContent/BannerContent";
import SaveTime from "./components/SaveTime/SaveTime";
import ImproveCollaboration from "./components/ImproveCollaboration/ImproveCollaboration";
import ClickUpBrain from "./components/ClickUpBrain/ClickUpBrain";
export default function Home() {
  return (
    <>
      <h1>Huzaifa</h1>  
      <BannerContent/>
      <IconComponent/>
      <SaveTime/>
      <ImproveCollaboration/>
      <ClickUpBrain/>
    </>
   
  );
    
}
