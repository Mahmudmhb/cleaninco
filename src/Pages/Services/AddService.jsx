import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const ProviderImage = user?.photoURL;
  const handleAddService = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const photoUrl = from.photoUrl.value;
    const email = from.email.value;
    const price = from.price.value;
    const description = from.description.value;
    const area = from.serviceArea.value;
    const serviceName = from.serviceName.value;

    // const AddServices = {
    //   name,
    //   photoUrl,
    //   email,
    //   price,
    //   description,
    //   area,
    //   serviceName,
    // };
    // // console.log(AddServices);

    useEffect(() => {
      axios
        .post("http://localhost:5000/newservices", {
          name,
          photoUrl,
          email,
          price,
          description,
          area,
          serviceName,
          ProviderImage,
        })
        .then((res) => {
          // console.log(res);
          // console.log(res.data);
          alert("post service");
        })
        .catch((data) => {
          // console.log(data.data);
        });
    }, []);
  };

  return (
    <div className="my-10">
      <div>
        <form
          onSubmit={handleAddService}
          className="flex max-w-md mx-auto flex-col gap-4"
        >
          <div className="flex justify-between gap-2">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Name"
                required
                value={user?.displayName}
                name="name"
              />
            </div>

            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@gmail.com"
                required
                value={user?.email}
                name="email"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="serviceName" value="Service Name" />
            </div>
            <TextInput
              id="serviceName"
              type="text"
              placeholder="Your Service Name"
              required
              name="serviceName"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoUrl" value="Service Photo Url" />
            </div>
            <TextInput
              id="photoUrl"
              type="text"
              placeholder="Service Photo Url"
              required
              name="photoUrl"
            />
          </div>

          <div className="flex justify-between gap-2">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price" />
              </div>
              <TextInput
                id="price"
                type="number"
                placeholder="Service Price"
                required
                name="price"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="serviceArea" value="Service Area" />
              </div>
              <TextInput
                id="serviceArea"
                type="text"
                placeholder="Service Area"
                required
                name="serviceArea"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea
              id="description"
              type="text"
              placeholder="description"
              required
              name="description"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>

          <Button type="submit">Add Service</Button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
