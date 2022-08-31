import dynamic from "next/dynamic";

const Header = dynamic(() => import("./layout/Header"));
const Home = dynamic(() => import("./Home/Home"));
const Rooms = dynamic(() => import("./rooms/Rooms"));

const Footer = dynamic(() => import("./layout/Footer"));
export { Header, Home, Rooms, Footer };
