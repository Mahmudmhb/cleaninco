import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import Auth from "../../Hook/Auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const SignUp = () => {
  const { handleSignUp, handleUpdateUser } = useContext(AuthContext);
  //   console.log(handleSignUp);

  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const photoUrl = from.photoUrl.value;
    const email = from.email.value;
    const password = from.password.value;
    // const newUser = { name, photoUrl, email, password };
    // console.log(newUser);
    handleSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        alert("successfuly signup");
        console.log(result.user);
        handleUpdateUser(name, photoUrl).then().catch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-10">
      <div>
        <form
          onSubmit={handleRegister}
          className="flex max-w-md mx-auto flex-col gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Name"
              required
              name="name"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoUrl" value="Your photoUrl" />
            </div>
            <TextInput
              id="photoUrl"
              type="text"
              placeholder="Your photoUrl"
              required
              name="text"
            />
          </div>
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
              Have Acount ?
              <Link to="/login">
                {" "}
                <span>Login</span>
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
