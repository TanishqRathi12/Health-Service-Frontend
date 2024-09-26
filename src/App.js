import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");

  let [healths, setHealths] = useState(() => {
    const save = localStorage.getItem("healths");
    return save ? JSON.parse(save) : [];
  });

  let [isEditing, setIsEditing] = useState(false);
  let [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("healths", JSON.stringify(healths));
  }, [healths]);

  const handleAddOrUpdate = () => {
    if (isEditing) {
      setHealths(
        healths.map((health) =>
          health.id === editId
            ? { ...health, name, description, price }
            : health
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setHealths([
        ...healths,
        { name, description, price, completed: false, id: Date.now() },
      ]);
    }
    setName("");
    setDescription("");
    setPrice("");
  };

  const handleEdit = (id) => {
    const healthToEdit = healths.find((health) => health.id === id);
    setName(healthToEdit.name);
    setDescription(healthToEdit.description);
    setPrice(healthToEdit.price);
    setEditId(id);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setHealths(healths.filter((health) => health.id !== id));
  };

  return (
    <>
      <Navbar />
      <main className="py-10 px-5 sm:px-20">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {isEditing ? "Update Service" : "Add New Service"}
          </h1>

          <div className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Service Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Enter Service Name"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                id="description"
                className="mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Enter Service Description"
                rows="3"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"
                id="price"
                className="mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                placeholder="Enter Service Price"
              />
            </div>

            <button
              onClick={handleAddOrUpdate}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            >
              {isEditing ? "Update Service" : "Add Service"}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">Your Services</h2>
          <div className="space-y-4">
            {healths.map((health, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-gray-100 p-4 rounded-lg shadow-lg flex items-center justify-between"
                >
                  <div className="text-lg w-full">
                    <div
                      className={`${
                        health.completed ? "line-through" : ""
                      } font-semibold break-words truncate`}
                      style={{ maxWidth: "200px" }} 
                    >
                      {health.name}
                    </div>

                    <div
                      className="text-gray-500 break-words truncate"
                      style={{ maxWidth: "300px" }}
                    >
                      {health.description}
                    </div>

                    <div className="text-blue-600 font-bold">
                      ${health.price}
                    </div>
                  </div>

                  <div className="space-x-2 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(health.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(health.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
