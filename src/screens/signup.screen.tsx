import { useState } from "react";

function SignupScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    console.log("o");
    try {
      const response = await fetch("http://localhost:3005/users/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("User created successfully!");
        window.location.href = "/login";
      } else {
        alert("Failed to create user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 py-5 justify-items-center items-center">
      <p className="font-bold text-xl">Create Account</p>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="rounded-md border-2 p-1 max-w-xs"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="rounded-md border-2 p-1 max-w-xs"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          className="rounded-md border-2 p-1 max-w-xs"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
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
          <p>Already registered?</p>
          <a href="/login" className="text-sm text-blue-500">
            Login
          </a>
        </div>
      </div>
      <div className="flex">
        <input
          type="button"
          value="Create Account"
          className="rounded-xl border-2 p-2 shadow"
          onClick={createUser}
        />
      </div>
    </div>
  );
}
export default SignupScreen;
