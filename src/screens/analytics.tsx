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
    units: {
      _id: string;
      date: string;
      time: string;
      currentUnits: number;
      measuredUnits: number;
      tariff:number;
      __v: number;
    }[];highestUnits:number;lowestUnits:number;averageUnits:number;highestTariff:number;lowestTariff:number;averageTariff:number;
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
    timeTakenEntities:0,
    units:[],highestUnits:0,lowestUnits:0,averageUnits:0,highestTariff:0,lowestTariff:0,averageTariff:0
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
  const unitsTimeArray: string[] = [];
  const unitsArray: number[] = [];
  const tariffArray: number[] = [];
  data.bottleCount.forEach(({ date, time, count }) => {
    dateTimeArray.push(`${date} ${time}`);
    countArray.push(count);
  });

  data.units.forEach(({ date, tariff, currentUnits }) => {
    unitsTimeArray.push(date);
    unitsArray.push(currentUnits);
    tariffArray.push(tariff);
  });

  const processedData = [
    {key: 'Least time taken to fill single bottle',data: data.leastTimeTaken },
    {key: 'Most time taken to fill single bottle',data: data.mostTimeTaken },
    {key: 'Average time taken to fill single bottle',data:  Math.round(data.averageTimeTaken) },
    {key: 'Least no of bottles filled in a minute',data: data.leastSpeed },
    {key: 'Most no of bottles filled in a minute',data: data.mostSpeed },
    {key: 'Average no of bottles filled in a minute',data:  Math.round(data.averageSpeed) },
    {key: 'No of bottles filled',data: data.bottleCount.length },
    { key: 'Highest Units recorded so far', data: data.highestUnits },
    { key: 'Lowest Units recorded so far', data: data.lowestUnits },
    { key: 'Average Units recorded so far', data:  Math.round(data.averageUnits) },
    { key: 'Highest Tariff recorded so far', data: data.highestTariff },
    { key: 'Lowest Tariff recorded so far', data: data.lowestTariff },
    { key: 'Average Tariff recorded so far', data:  Math.round(data.averageTariff) },
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
            <div className="flex flex-wrap justify-around my-5">
            <div className="w-1/2">
                <div className="font-semibold text-base">Bottles Filled</div>
                <BarChart label={dateTimeArray} xData={countArray} title={"Bottles filled"} bg={'rgba(53, 162, 235, 0.5)'}/>
            </div>
            <div>
            <div className="font-semibold text-base">Time Taken For Bottles To Fill</div>
            <Doughnut  labels={["Least Time Taken","Average Time Taken","Most Time Taken"]} data={[data.leastTimeTaken, Math.round(data.averageTimeTaken),data.mostTimeTaken]}/>
            </div>
            <div className="w-1/2">
                <div className="font-semibold text-base">Units Accumulated</div>
                <BarChart label={unitsTimeArray} xData={unitsArray} title={"Units"}bg={'rgba(118, 120, 237, 1)'}/>
            </div>
            <div>
            <div className="font-semibold text-base">Tariff</div>
            <Doughnut  labels={["Lowest Tariff","Average Tariff","Highest Tariff"]} data={[data.lowestTariff, Math.round(data.averageTariff),data.highestTariff]}/>
            </div>
            <div className="w-1/2">
                <div className="font-semibold text-base">Tariff Calculated</div>
                <BarChart label={unitsTimeArray} xData={tariffArray} title={"Tariff"} bg={'rgba(214, 40, 40, 1)'}/>
            </div>
            
            </div>
            
           <div className="my-7">
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
