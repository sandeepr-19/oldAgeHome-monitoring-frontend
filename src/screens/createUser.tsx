import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import navigationData from "../data/navigation";
import useNavigation from "../hooks/useNavigation";
import { useState } from "react";

function CreateUser() {
  const [userDetails, setUserDetails]: any = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    mobileNumber: "",
    guardianName: "",
    guardianContactNumber: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    mobileNumber: "",
    guardianName: "",
    guardianContactNumber: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  function validateField(field: string, value: any, error: any) {
    if (["firstName", "lastName", "guardianName"].includes(field)) {
      if (value.trim() == "") {
        error[field] = field + " is required";
      }
    }
    if (field === "age") {
      if (!isNaN(value) && value <= 0) {
        error[field] = field + " is invalid";
      }
    }
    if (["mobileNumber", "guardianContactNumber"].includes(field)) {
      if (value.trim() === "") {
        error[field] = field + " is required";
      }
      if (!value.match(/^[\d-+() ]*$/)) {
        error[field] = field + " is invalid";
      }
    }
    if (field === "gender") {
      if (!["Male", "Female", "Other"].includes(value)) {
        error[field] = field + " is invalid";
      }
    }
  }

  const { currentRoute, setCurrentRoute } = useNavigation("Create");

  const addNew = async () => {
    const userId = localStorage.getItem("emp.userId") as string;
    const authorization = localStorage.getItem("emp.accessToken") as string;
    let errors: any = {};
    Object.keys(userDetails).forEach((key: string) => {
      validateField(key, userDetails[key], errors);
    });
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      try {
        const response = await fetch(
          "https://senior-guard-api.vercel.app/elders/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              userId,
              authorization,
            },
            body: JSON.stringify(userDetails),
          }
        );
        if (response.ok) {
          alert("data added successfully");
        } else {
          alert("error occurred, data not stored");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
        <div className="flex flex-col mx-5 gap-5">
          <p className="text-4xl font-sans font-semibold text-left leading-none pt-8">
            Add New Elder
          </p>
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col">
              <input
                type="text"
                name="firstName"
                className="rounded-md border-2 p-2 w-[300px]"
                placeholder="First Name"
                onChange={handleInputChange}
                value={userDetails.firstName}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.firstName}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="lastName"
                className="rounded-md border-2 p-2 w-[300px]"
                placeholder="Last Name"
                onChange={handleInputChange}
                value={userDetails.lastName}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.lastName}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                name="age"
                className="rounded-md border-2 p-2 w-[300px]"
                placeholder="Age"
                onChange={handleInputChange}
                value={userDetails.age}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.age}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="gender"
                className="rounded-md border-2 p-2 w-[300px]"
                placeholder="Gender"
                onChange={handleInputChange}
                value={userDetails.gender}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.gender}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="mobileNumber"
                className="rounded-md border-2 p-2 w-[300px]"
                placeholder="Mobile Number"
                onChange={handleInputChange}
                value={userDetails.mobileNumber}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.mobileNumber}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="guardianName"
                className="rounded-md border-2 p-2 w-[300px]"
                placeholder="Guardian Name"
                onChange={handleInputChange}
                value={userDetails.guardianName}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.guardianName}
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="guardianContactNumber"
                className="rounded-md border-2 p-2 w-[300px]"
                placeholder="Guardian Contact Number"
                onChange={handleInputChange}
                value={userDetails.guardianContactNumber}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.guardianContactNumber}
              </span>
            </div>
          </div>
          <input
            type="button"
            value="Add New"
            className="rounded-xl border-2 p-2 shadow items-center w-[200px] self-center border-black"
            onClick={addNew}
          />
        </div>
      </div>
    </>
  );
}
export default CreateUser;
