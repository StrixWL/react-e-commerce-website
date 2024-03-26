import { TextField } from "@mui/material";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-scree">
      <div className="md:w-[50%] w-full max-w-1/2 z-0">
        <form className="rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-5xl text-left font-bold mb-8">Contact</h1>
          <div className="mb-4 flex items-center justify-between space-x-3">
            <TextField
              id="outlined-basic"
              label="Name"
              className="w-full"
              variant="outlined"
              fullWidth
              sx={{
                input: { borderRadius: "20px", borderColor: "black"  },
                fieldset: { borderRadius: "40px", borderColor: "black"  },
              }} 
            />
            <TextField
              id="outlined-basic"
              label="Email"
              className="w-full"
              variant="outlined"
              fullWidth
              required
              sx={{
                input: { borderRadius: "20px", borderColor: "black"  },
                fieldset: { borderRadius: "40px", borderColor: "black"  },
              }} 
            />
          </div>
          <div className="mb-6 space-y-4">
            <TextField
              id="outlined-basic"
              label="Phone Number"
              className="w-full mb-6"
              variant="outlined"
              fullWidth
              sx={{
                input: { borderRadius: "20px", borderColor: "black"  },
                fieldset: { borderRadius: "40px", borderColor: "black"  },
              }} 
            />
            <TextField
              id="outlined-basic"
              label="Comment"
              className="w-full"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{
                input: { borderRadius: "20px", borderColor: "black" },
                fieldset: { borderRadius: "30px", borderColor: "black"  },
              }} 
            />

           
          </div>
          <div className="flex slef-start w-1/4 mt-6 justify-between">
            <button
              className="bg-black text-white rounded-full py-3 px-4 w-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
