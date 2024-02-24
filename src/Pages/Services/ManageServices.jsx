import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Card } from "flowbite-react";
import Swal from "sweetalert2";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [userServices, setUserServices] = useState([]);
  const [upadte, setUpdate] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/manageService?email=${user?.email}`)
      .then((res) => {
        setUserServices(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user?.email]);
  //   console.log(userServices);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to Delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:5000/manageService/${id}`)
            .then((res) => {
              console.log(res.data);
              if (res.data.deletedCount > 0) {
                console.log("detelte done");
              }
            })
            .then((error) => {
              console.log(error);
            });

          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your Service has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Service file is safe :)",
            icon: "error",
          });
        }
      });

    console.log("delete", id);
  };
  const [openModal, setOpenModal] = useState(false);
  //   const [email, setEmail] = useState("");
  function onCloseModal() {
    setOpenModal(false);
    // setEmail("");
  }
  const ProviderImage = user?.photoURL;
  const handleUpdateService = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    // const date = from.date.value;
    const photoUrl = from.photoUrl.value;
    const email = from.email.value;
    const price = from.price.value;
    const description = from.description.value;
    const area = from.serviceArea.value;
    const serviceName = from.serviceName.value;

    const updateService = {
      name,
      photoUrl,
      email,
      price,
      description,
      area,
      serviceName,
      ProviderImage,
      //   date,
    };
    console.log(updateService);

    fetch(`http://localhost:5000/manageService/${upadte._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  //
  const handleUpdate = (id) => {
    const find = userServices.find((service) => service._id === id);
    setUpdate(find);
  };
  //   console.log(upadte);
  return (
    <div className="w-5/6 mx-auto ">
      <div className="grid md:grid-cols-2 gap-6">
        {userServices.map((service) => (
          <Card
            key={service._id}
            className="max-w-sm"
            imgSrc={service.photoUrl}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {service.serviceName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>{service.description.slice(0, 100)}</p>
              <div className="flex justify-start gap-3">
                <button
                  onClick={() => handleDelete(service._id)}
                  className="badge badge-secondary p-4 text-xl my-5 hover:badge-warning "
                >
                  Delete
                </button>

                {/* model trogol */}

                <div>
                  <Button
                    className="badge badge-ghost p-4 text-xl my-5 hover:badge-accent "
                    onClick={() => {
                      setOpenModal(true), handleUpdate(service._id);
                    }}
                  >
                    Edit
                  </Button>
                  <Modal
                    show={openModal}
                    size="md"
                    onClose={onCloseModal}
                    popup
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div>
                        <form
                          onSubmit={handleUpdateService}
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
                              <Label
                                htmlFor="serviceName"
                                value="Service Name"
                              />
                            </div>
                            <TextInput
                              id="serviceName"
                              type="text"
                              placeholder="Your Service Name"
                              required
                              defaultValue={upadte?.serviceName}
                              name="serviceName"
                            />
                          </div>

                          <div>
                            <div className="mb-2 block">
                              <Label
                                htmlFor="photoUrl"
                                value="Service Photo Url"
                              />
                            </div>
                            <TextInput
                              id="photoUrl"
                              type="text"
                              placeholder="Service Photo Url"
                              required
                              defaultValue={upadte.photoUrl}
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
                                defaultValue={upadte.price}
                                name="price"
                              />
                            </div>
                            <div className="w-full">
                              <div className="mb-2 block">
                                <Label
                                  htmlFor="serviceArea"
                                  value="Service Area"
                                />
                              </div>
                              <TextInput
                                id="serviceArea"
                                type="text"
                                placeholder="Service Area"
                                required
                                defaultValue={upadte.area}
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
                              defaultValue={upadte.description}
                            />
                          </div>
                          <Button type="submit">Update NOW</Button>
                        </form>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
