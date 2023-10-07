import { useState } from "react";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
    console.log("lg");
    try {
      const response = await fetch("http://localhost:3005/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("username", data.username);
        alert("Login successful");
      } else {
        alert("oops! Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex  justify-center">
      <div className="flex flex-col justify-center mt-10" style={containerStyle}>
        <div className="flex flex-col p-10" >
          <p className="font-bold text-xl mb-10">Sign In</p>
          <div className=" flex flex-col gap-5 items-center w-full">
            <input
              type="text"
              className="rounded-md border-2 p-2 max-w-xl"
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              className="rounded-md border-2 p-2 max-w-xl"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>New User?</p>
            <a href="/signup" className="text-sm text-blue-500">
              Signup
            </a>
            <input
              type="button"
              value="Login"
              className="rounded-xl border-2 p-2 shadow items-center"
              onClick={loginUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const containerStyle = {
  background:
    " linear-gradient(109deg, rgba(201, 201, 201, 0.80) 1.57%, rgba(196, 196, 196, 0.10) 100%)",
  border: "1px solid rgba(255, 255, 255, 0.80);",
  borderRadius: 20,
};
export default LoginScreen;
