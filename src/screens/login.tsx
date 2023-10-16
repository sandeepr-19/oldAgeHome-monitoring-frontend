import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] = useState({
    email: "",
  });

  const validateForm = () => {
    let errors: any = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email address";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const loginUser = async () => {
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:3005/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("emp.accessToken", data.access_token);
          localStorage.setItem("emp.userId", data.userId);
          alert("Login successful");
          navigate("/dashboard");
        } else {
          alert("oops! Invalid credentials");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex  justify-center">
      <div
        className="flex flex-col justify-center mt-10"
        style={containerStyle}
      >
        <div className="flex flex-col p-10">
          <p className="font-bold text-xl mb-5">Sign In</p>
          <div className=" flex flex-col gap-3 items-center w-full">
            <div className="flex flex-col">
              <input
                type="text"
                className="rounded-md border-2 p-2 max-w-xl"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="text-red-500 text-xs">
                {validationErrors.email}
              </span>
            </div>
            <input
              type="text"
              className="rounded-md border-2 p-2 max-w-xl"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div>
              <p>New User?</p>
              <a href="/signup" className="text-sm text-blue-500">
                Signup
              </a>
            </div>
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
