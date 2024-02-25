import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Card } from "flowbite-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const MySchedules = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [myPanding, setPanding] = useState([]);
  const { user } = useContext(AuthContext);
  const [status, setStatus] = useState("panding");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/addbook?ProviderEmail=${user.email}`)
      .then((res) => {
        setPanding(res.data);
      })
      .then((error) => {
        console.log(error.data);
      });
  }, [user]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/addbook?userEmail=${user.email}`)
      .then((res) => {
        setMyBooking(res.data);
      })
      .then((error) => {
        console.log(error.data);
      });
  }, [user.email]);
  //   console.log(myBooking);

  const handleStatusChange = async (id, newStatus) => {
    // const newStatus = event.target.value;
    console.log(id, newStatus);
    try {
      //   Update the service status in the backend
      await axios.put(`http://localhost:5000/addbook/${id}`, {
        status: newStatus,
      });
      //   Update the local state
      setStatus(newStatus);
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };
  console.log(status);
  return (
    <div className=" mx-auto my-20 flex gap-4">
      <div>
        <h1 className="text-5xl text-[#052944] py-10 uppercase text-center">
          my book: {myBooking.length}
        </h1>
        <div className="grid gap-4">
          {myBooking.map((book) => (
            <Card
              key={book._id}
              className="max-w-sm"
              imgSrc={book.photoUrl}
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.serviceName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-5xl text-[#052944] py-10 uppercase text-center">
            My Pending works ::{myPanding.length}{" "}
          </h1>
          <div>
            <div className="overflow-x-auto">
              <Table hoverable>
                <TableHead>
                  <TableHeadCell>Service name</TableHeadCell>
                  <TableHeadCell>Orderd name</TableHeadCell>
                  <TableHeadCell>Date</TableHeadCell>
                  <TableHeadCell>Price</TableHeadCell>
                  <TableHeadCell>Action</TableHeadCell>
                  {/* <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell> */}
                </TableHead>
                <TableBody>
                  {myPanding.map((panding) => (
                    <TableRow
                      key={panding._id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {panding.serviceName}
                      </TableCell>
                      <TableCell>{panding.userName}</TableCell>
                      <TableCell>{panding.date}</TableCell>
                      <TableCell>${panding.price}</TableCell>
                      <TableCell>
                        {panding?.status ? (
                          <>
                            <p>{panding?.status}</p>
                          </>
                        ) : (
                          <select
                            value={status}
                            onChange={(event) =>
                              handleStatusChange(
                                panding._id,
                                event.target.value
                              )
                            }
                          >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
