import { useEffect, useState } from "react";
import "./App.css";
//import Footer from "./Components/Footer";
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

  // Check if all fields are filled
  const isFormValid = name && description && price;

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="form-container">
          <h1 className="form-title">
            {isEditing ? "Update Service" : "Add New Service"}
          </h1>

          <div className="form-group">
            <label htmlFor="name">Service Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              placeholder="Enter Service Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="description"
              placeholder="Enter Service Description"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              id="price"
              placeholder="Enter Service Price"
            />
          </div>

          <button
            onClick={handleAddOrUpdate}
            className="submit-button"
            disabled={!isFormValid} // Disable button if form is not valid
          >
            {isEditing ? "Update Service" : "Add Service"}
          </button>
        </div>

        <div className="services-list">
          <h2>Your Services</h2>
          {healths.map((health, idx) => {
            return (
              <div key={idx} className="service-item">
                <div className="service-details">
                  <div
                    className={`service-name ${
                      health.completed ? "completed" : ""
                    }`}
                  >
                    {health.name}
                  </div>
                  <div className="service-description">{health.description}</div>
                  <div className="service-price">${health.price}</div>
                </div>

                <div className="service-actions">
                  <button onClick={() => handleEdit(health.id)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(health.id)} className="delete-button">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
