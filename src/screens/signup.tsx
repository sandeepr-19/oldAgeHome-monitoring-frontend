import { useState } from "react";

function SignupScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  function isStrongPassword(password: string) {
    if (password.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[a-z]/.test(password)) {
      return false;
    }
    if (!/\d/.test(password)) {
      return false;
    }
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      return false;
    }
    return true;
  }

  const validateForm = () => {
    let errors: any = {};

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!isStrongPassword(password)) {
      errors.password =
        "Password must have at least 8 characters, one uppercase, one lowercase, one number, and one symbol";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const createUser = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://senior-guard-api.vercel.app/users/createUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              password,
            }),
          }
        );

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
    }
  };

  return (
    <div className="flex flex-col gap-3 py-5 justify-items-center items-center ">
      <p className="font-bold text-xl">Create Account</p>
      <div className="flex flex-col gap-2 max-w-xs">
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
        <div className="flex flex-col">
          <input
            type="text"
            className="rounded-md border-2 p-1 max-w-xs"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-red-500 text-xs">{validationErrors.email}</span>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="rounded-md border-2 p-1 max-w-xs"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="text-red-500 text-xs">
          {validationErrors.password}
        </span>
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
