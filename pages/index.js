import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Home/Footer";
import Hearder from "../Components/Home/Hearder";
import MySkills from "../Components/Home/MySkills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Hearder />
      <MySkills />
      <Footer />
    </div>
  );
}
