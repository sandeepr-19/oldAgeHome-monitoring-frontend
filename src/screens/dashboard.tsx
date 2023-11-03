import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import navigationData from "../data/navigation";
import useNavigation from "../hooks/useNavigation";
import Header from "../components/Header";
import { DefaultTable } from "../components/UserTable";
import { tableHeadData } from "../data/tableHead";
import { useEffect, useState } from "react";

function Dashboard() {
  const { currentRoute, setCurrentRoute } = useNavigation("Dashboard");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUserList() {
      try {
        const userId = localStorage.getItem("emp.userId") as string;
        const authorization = localStorage.getItem("emp.accessToken") as string;

        const response = await fetch(
          "https://senior-guard-api.vercel.app/elders",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              userId,
              authorization,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUserList(data);
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error while fetching user data:", error);
      }
    }
    fetchUserList();
  }, []);

  return (
    <>
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
        <div className="mx-5">
          <Header UserDetails={userList} />
          <div className="">
            <DefaultTable
              UserDetails={userList}
              tableHeadData={tableHeadData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
