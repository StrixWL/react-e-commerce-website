import { TextField } from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-scree">
      <div className="md:w-[40%] w-full max-w-1/2 z-0">
        <form className="rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-5xl text-center font-bold mb-8">Login</h1>
          <div className="mb-4">
            <TextField
              id="outlined-basic"
              label="Email"
              className="w-full"
              variant="outlined"
              fullWidth
              sx={{
                input: { borderRadius: "20px", borderColor: "black" },
                fieldset: { borderRadius: "40px", borderColor: "black" },
              }}
            />
          </div>
          <div className="mb-6">
            <TextField
              id="outlined-basic"
              label="Password"
              className="w-full"
              variant="outlined"
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
              type="button"
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
  );
};

export default LoginPage;
