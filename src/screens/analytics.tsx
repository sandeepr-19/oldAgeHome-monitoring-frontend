import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import navigationData from "../data/navigation";
import useNavigation from "../hooks/useNavigation";
import { useEffect, useState } from "react";
import BarChart from "../components/charts/bar";
import { Doughnut } from "../components/charts/doughnut";
import { AnalyticsTable } from "../components/AnalyticsTable";


interface AnalyticsData {
    leastSpeed: number;
    mostSpeed: number;
    averageSpeed: number;
    leastTimeTaken: number;
    mostTimeTaken: number;
    averageTimeTaken: number;
    timeTakenEntities:number,
    bottleCount: {
      _id: string;
      date: string;
      time: string;
      count: number;
      __v: number;
    }[];
  }

function Analytics() {
  const { currentRoute, setCurrentRoute } = useNavigation("Analytics");
 const [data, setData] = useState<AnalyticsData>({
    leastSpeed: 0,
    mostSpeed: 0,
    averageSpeed: 0,
    leastTimeTaken: 0,
    mostTimeTaken: 0,
    averageTimeTaken: 0,
    bottleCount: [],
    timeTakenEntities:0
  });


  useEffect(() => {
    async function fetchAnalyticsData() {
      try {
        const response = await fetch(
          "https://senior-guard-api.vercel.app/analytics",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const reponseData = await response.json();
          setData(reponseData)
          console.log(reponseData);
        } else {
          console.error("Failed to fetch analytics data.");
        }
      } catch (error) {
        console.error("Error while fetching analytics data:", error);
      }
    }
    fetchAnalyticsData();
  }, []);

  const dateTimeArray: string[] = [];
  const countArray: number[] = [];

  data.bottleCount.forEach(({ date, time, count }) => {
    dateTimeArray.push(`${date} ${time}`);
    countArray.push(count);
  });

  const processedData = [
    {key: 'Least time taken to fill single bottle',data: data.leastTimeTaken },
    {key: 'Most time taken to fill single bottle',data: data.mostTimeTaken },
    {key: 'Average time taken to fill single bottle',data:  Math.round(data.averageTimeTaken) },
    {key: 'Least no of bottles filled in a minute',data: data.leastSpeed },
    {key: 'Most no of bottles filled in a minute',data: data.mostSpeed },
    {key: 'Average no of bottles filled in a minute',data:  Math.round(data.averageSpeed) },
    {key: 'No of bottles filled',data: data.bottleCount.length },
  ];

  return (
    <>
      <div className="bg-gray-200 h-screen overflow-y-auto">
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
        <div className="mx-5 p-3">
            <div className="flex flex-row justify-around">
            <div className="w-1/2">
                <div className="font-semibold text-base">Bottles Filled</div>
                <BarChart label={dateTimeArray} xData={countArray}/>
            </div>
            <div>
            <div className="font-semibold text-base">Time Taken For Bottles To Fill</div>
            <Doughnut  labels={["Least Time Taken","Average Time Taken","Most Time Taken"]} data={[3,data.averageTimeTaken,data.mostTimeTaken]}/>
            </div>
            </div>
            
           <div className="mt-3">
           <AnalyticsTable
              AnalyticsDetails={processedData}
              tableHeadData={['Entity','Mertics']}
            />
           </div>

        </div>
      </div>
    </>
  );
}
export default Analytics;
