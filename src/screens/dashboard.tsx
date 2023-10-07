import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import { FaDev } from "react-icons/fa";
import navigationData from "../data/navigation"
import useNavigation from "../hooks/useNavigation";
const Dashboard = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <div className='bg-gray-200 h-screen '>
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className='flex items-center justify-center text-5xl text-gray-300 h-5/6'>
        <FaDev />
      </div>
    </div>
  );
};

export default Dashboard;
