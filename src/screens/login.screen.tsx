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
    <div className="flex flex-col gap-3 py-5 justify-items-center items-center">
      <p className="font-bold text-xl">Sign In</p>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="rounded-md border-2 p-1 max-w-xs"
          placeholder="User Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="rounded-md border-2 p-1 max-w-xs"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <p>New User?</p>
          <a href="/signup" className="text-sm text-blue-500">
            Signup
          </a>
        </div>
      </div>
      <div className="flex">
        <input
          type="button"
          value="Login"
          className="rounded-xl border-2 p-2 shadow"
          onClick={loginUser}
        />
      </div>
    </div>
  );
}
export default LoginScreen;
