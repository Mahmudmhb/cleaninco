import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" my-10 w-5/6 mx-auto  ">
      <div className="">
        <form className="flex max-w-md mx-auto flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              required
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              name="password"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
          <div>
            <h1>
              Are you New?
              <Link to="/signup">
                {" "}
                <span>Sign Up</span>
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
