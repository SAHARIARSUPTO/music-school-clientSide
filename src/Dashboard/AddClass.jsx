import React from 'react';
import { toast } from 'react-hot-toast';

const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const studentsNumber = form.studentsNumber.value;
    const image = form.image.value;
    const availableSeats = form.availableSeats.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const price = form.price.value;
    const newClassData = {
      className,
      studentsNumber,
      image,
      availableSeats,
      instructorEmail,
      instructorName,
      price,
    };
  
    fetch('https://music-school-server-sahariarsupto.vercel.app/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClassData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        toast.success("Class added Successfully");
        form.reset();
      })
      .catch(error => {
        console.error(error);
        // Handle error or display an error message
      });
  };

const AddClass = () => {
  return (
    <>
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2020/04/16/11/13/background-5050213_1280.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-3xl font-bold mb-8">Add Class</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Name"
                  className="input input-bordered h-12"
                  name="className"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number of Students</span>
                </label>
                <input
                  type="text"
                  placeholder="Number of Students"
                  className="input input-bordered h-12"
                  name="studentsNumber"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered h-12"
                  name="image"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="text"
                  placeholder="Available Seats"
                  className="input input-bordered h-12"
                  name="availableSeats"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered h-12"
                  name="price"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Instructor Name"
                  className="input input-bordered h-12"
                  name="instructorName"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Instructor Email"
                  className="input input-bordered h-12"
                  name="instructorEmail"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn btn-primary w-full h-12"
              >
                Add Class
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
