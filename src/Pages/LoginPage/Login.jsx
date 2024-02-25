import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    // const userLogin = { email, password };
    handleLogin(email, password)
      .then((result) => {
        alert("user login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(userLogin);
  };
  return (
    <div className=" my-10 w-5/6 mx-auto  ">
      <div className="">
        <form
          onSubmit={handleSignIn}
          className="flex max-w-md mx-auto flex-col gap-4"
        >
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
