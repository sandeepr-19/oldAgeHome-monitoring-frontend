import { useState } from "react";

function CaretakerDashboard() {
  const fetchData = async () => {
    try {
      setSelectedFilterData(selectedFilterData);
      setSearchData(searchData);
      console.log(searchData);
      let reqBody = {
        filter: selectedFilterData,
        sort: sortData,
        searchQuery: searchData,
        pageSize: 10,
        page: pageNo,
      };
      const response = await fetch(
        "https://job-search-api-six.vercel.app/positions-filter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reqBody),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setPositionsData(data.positions);
          if (data.filterFileds) {
            setFilterFiledsData(data.filterFileds);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.error(error);
    }
  };
}
export default CaretakerDashboard;
