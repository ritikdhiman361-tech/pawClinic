import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const petTypeOptions = ["Dog", "Cat", "Rabbit", "Bird", "Other"];

function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // "login" | "signup"

  // ----- Login form state -----
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Hardcoded demo admin, plus anyone who has signed up below.
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]",
    );
    const matchedUser = registeredUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if ((email === "admin@gmail.com" && password === "1234") || matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUserEmail", email);
      navigate("/", { replace: true });
    } else {
      alert("Invalid Credentials");
    }
  };

  // ----- Sign up form state -----
  const [signupForm, setSignupForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    petName: "",
    petType: "",
    petBreed: "",
  });

  const handleSignupChange = (field) => (e) =>
    setSignupForm({ ...signupForm, [field]: e.target.value });

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      mobile,
      email: signupEmail,
      password: signupPassword,
      confirmPassword,
      petName,
      petType,
      petBreed,
    } = signupForm;

    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (signupPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]",
    );

    if (registeredUsers.some((u) => u.email === signupEmail)) {
      alert("An account with this email already exists.");
      return;
    }

    const newUser = {
      name,
      mobile,
      email: signupEmail,
      password: signupPassword,
      petName,
      petType,
      petBreed,
    };

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify([...registeredUsers, newUser]),
    );

    // Auto-login right after signup.
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUserEmail", signupEmail);
    navigate("/", { replace: true });
  };

  const inputClass =
    "w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  // If the user is already logged in, send them away instead of
  // showing the login/signup page at all. This check runs after all
  // hooks above are declared, so it doesn't violate the rules of hooks.
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-900 text-center mb-2">
          {mode === "login" ? "Login" : "Sign Up"}
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          {mode === "login"
            ? "Welcome back! Please log in to continue."
            : "Create an account for you and your pet."}
        </p>

        {mode === "login" ? (
          <form
            onSubmit={handleLoginSubmit}
            className="space-y-4 animate-[fadeSlideUp_0.3s_ease-out_both]"
          >
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-900 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-150 hover:scale-[1.02] active:scale-95"
            >
              Login
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSignupSubmit}
            className="space-y-4 animate-[fadeSlideUp_0.3s_ease-out_both]"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={signupForm.name}
              onChange={handleSignupChange("name")}
              className={inputClass}
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={signupForm.mobile}
              onChange={handleSignupChange("mobile")}
              className={inputClass}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={signupForm.email}
              onChange={handleSignupChange("email")}
              className={inputClass}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="password"
                placeholder="New Password"
                value={signupForm.password}
                onChange={handleSignupChange("password")}
                className={inputClass}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange("confirmPassword")}
                className={inputClass}
                required
              />
            </div>

            <div className="border-t border-gray-200 pt-4 mt-2">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                Pet details
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Pet's Name"
                  value={signupForm.petName}
                  onChange={handleSignupChange("petName")}
                  className={inputClass}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={signupForm.petType}
                    onChange={handleSignupChange("petType")}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled>
                      Pet's Type
                    </option>
                    {petTypeOptions.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Pet's Breed"
                    value={signupForm.petBreed}
                    onChange={handleSignupChange("petBreed")}
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-900 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-150 hover:scale-[1.02] active:scale-95"
            >
              Create Account
            </button>
          </form>
        )}

        <p className="text-center text-sm text-gray-600 mt-6">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-blue-600 font-medium hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-blue-600 font-medium hover:underline"
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Login;
