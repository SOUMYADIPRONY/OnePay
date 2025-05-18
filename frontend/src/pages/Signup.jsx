import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl p-8 space-y-6">
          <div className="text-center">
            <Heading label="Create your account" />
            <SubHeading label="Signup on OnePay for seamless transactions!" />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <InputBox
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                label="First Name"
                type="text"
              />
              <InputBox
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                label="Last Name"
                type="text"
              />
            </div>

            <InputBox
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe@example.com"
              label="Email"
              type="email"
            />

            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              label="Password"
              type="password"
            />
          </div>

          <div className="pt-2">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  { username, firstName, lastName, password }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label="Sign up"
              fullWidth
            />
          </div>

          <BottomWarning
            label="Already have an account?"
            buttonText="Sign in"
            to="/signin"
          />
        </div>
      </div>
    </div>
  );
};