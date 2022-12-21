import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://tour-travel-booking.onrender.com/travelservices", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Data upload successfully");
          reset();
        }
      });
  };

  return (
    <div className="py-5 add-service-form">
      <h1 className="main-title text-center pb-5">Add your Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter your Service name" {...register("name")} />
        <input
          placeholder="Enter your service price"
          {...register("pricing")}
        />
        <input placeholder="Enter your service img url" {...register("img")} />
        <textarea
          placeholder="Enter your service description"
          {...register("description")}
          cols="10"
          rows="5"
        ></textarea>
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
