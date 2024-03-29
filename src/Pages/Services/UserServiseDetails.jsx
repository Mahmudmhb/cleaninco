import { useLoaderData } from "react-router-dom";
// import ToggleModel from "../../Components/ToggleModel";
import { useContext, useState } from "react";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const UserServiseDetails = () => {
  const serviceDetails = useLoaderData();

  //   console.log(userDetails);

  //   toggol model
  const [openModal, setOpenModal] = useState(false);
  //   const [email, setEmail] = useState("");
  function onCloseModal() {
    setOpenModal(false);
    // setEmail("");
  }

  const { user } = useContext(AuthContext);
  const ProviderImage = user?.photoURL;
  const handleBookService = (event) => {
    event.preventDefault();
    const from = event.target;
    const userName = from.name.value;
    const date = from.date.value;
    const photoUrl = from.photoUrl.value;
    const userEmail = from.email.value;
    const price = from.price.value;
    const description = from.description.value;
    const area = from.serviceArea.value;
    const serviceName = from.serviceName.value;

    // const AddBooked = {
    //   name,
    //   photoUrl,
    //   email,
    //   price,
    //   description,
    //   area,
    //   serviceName,
    //   ProviderImage,
    //   date,
    // };
    // // console.log(AddBooked);

    axios
      .post("https://cleaninco-server.vercel.app/addbook", {
        userName,
        photoUrl,
        userEmail,
        price,
        description,
        area,
        serviceName,
        ProviderImage,
        date,
        ProviderEmail: serviceDetails.email,
      })
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        Swal.fire("Your Booking is Confirm");
      })
      .catch((data) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${data.data}`,
          footer: `<Link to='/login'>${data.data}</link>`,
        });
      });
  };

  return (
    <div className="w-5/6 mx-auto">
      <p className="text-4xl text-[#052944] my-12">
        {serviceDetails.serviceName}
      </p>
      <div className="my-5">
        <img src={serviceDetails.photoUrl} alt="" />
      </div>
      <div className="flex  items-center gap-2">
        <div className="flex items-center gap-2">
          <img
            src={serviceDetails.ProviderImage}
            alt=""
            className="w-16 h-16 rounded-full"
          />
          <div className="text-left">
            <h1>{serviceDetails.name}</h1>
          </div>
          <div className="badge  p-3 badge-secondary">
            Price: ${serviceDetails.price}
          </div>
        </div>
        <div>
          <p className="badge  p-3 badge-secondary">
            Area: {serviceDetails.area}
          </p>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-4xl text-[#052944] my-12">
          {serviceDetails.serviceName}
        </h1>
        <p>{serviceDetails.description}</p>
      </div>

      {/* toggol model  */}

      <div>
        <Button
          className="hover:text-white my-5 rounded-none hover:translate-x-2 border-none btn btn-warning uppercase pr-5 mr-5"
          onClick={() => setOpenModal(true)}
        >
          BOOK NOW
        </Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div>
              <form
                onSubmit={handleBookService}
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
                    value={serviceDetails.serviceName}
                    name="serviceName"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="date" value="Service date" />
                  </div>
                  <TextInput
                    id="date"
                    type="date"
                    placeholder="Your Service date"
                    required
                    name="date"
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
                    value={serviceDetails.photoUrl}
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
                      value={serviceDetails.price}
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
                      value={serviceDetails.area}
                      name="serviceArea"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="description"
                      value="Special instruction
"
                    />
                  </div>
                  <Textarea
                    id="description"
                    type="text"
                    placeholder="anything like address , area, customized service plan.
                    "
                    required
                    name="description"
                  />
                </div>
                <Button type="submit">BOOK NOW</Button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default UserServiseDetails;
