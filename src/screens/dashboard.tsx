import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import navigationData from "../data/navigation";
import useNavigation from "../hooks/useNavigation";
import { DefaultTable } from "../components/UserTable";
import { UserDetails } from "../data/tableData";
import { tableHeadData } from "../data/tableHead";
import Header from "../components/Header";
const Dashboard = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <div className="bg-gray-200 h-screen ">
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
      <div className="flex flex-col p-5">
        <Header UserDetails={UserDetails} />
        <div className="w-full">
          <DefaultTable
            UserDetails={UserDetails}
            tableHeadData={tableHeadData}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
