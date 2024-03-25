import { TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "../../components/productsDetails/popUp/Modal";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // valider l'email
  const validateEmail = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    if (!email || !re.test(String(email).toLowerCase())) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  // valider le mot de passe
  const validatePassword = () => {
    if (!password || password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      setIsModalVisible(true);
      setTimeout(() => setIsModalVisible(false), 3000);
      setPassword('')
      setEmail('')
    }
  };

  return (
    <>
      <div className="flex w-full justify-center items-center min-h-screen">
      <Modal
        isModalVisible={isModalVisible}
        message={"Logged in successfully."}
        action={"Check Your Profile"}
      />
        <div className="md:w-[40%] w-full max-w-1/2 z-0">
          <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h1 className="text-5xl text-center font-bold mb-8">Login</h1>
            <div className="mb-4">
              <TextField
                error={!!emailError}
                helperText={emailError}
                id="email"
                label="Email"
                className="w-full"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                fullWidth
                sx={{
                  input: { borderRadius: "20px", borderColor: "black" },
                  fieldset: { borderRadius: "40px", borderColor: "black" },
                }}
              />
            </div>
            <div className="mb-6">
              <TextField
                error={!!passwordError}
                helperText={passwordError}
                id="password"
                label="Password"
                className="w-full"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                fullWidth
                sx={{
                  input: { borderRadius: "20px", borderColor: "black" },
                  fieldset: { borderRadius: "40px", borderColor: "black" },
                }}
              />

              <p className="text-[16px] underline mt-2 text-left">
                Forgot your password?
              </p>
            </div>
            <div className="flex items-center w-1/3 m-auto justify-between">
              <button
                className="bg-black text-white rounded-full py-3 px-4 w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="inline-block align-baseline font-normal text-lg underline text-black leading-3 tracking-wide">
                Create account
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
