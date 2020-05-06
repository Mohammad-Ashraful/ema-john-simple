import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  const auth = useAuth();


  return (
    <form class="ship-form" onSubmit={handleSubmit(onSubmit)}>

      <input
        name="name" 
        defaultValue={auth.user.name} 
        ref={register({ required: true })} placeholder="Your Name"/>
      {
          errors.name && <span class="error">Name is required</span>
      }

      <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email"/>
      {
          errors.email && <span class="error">Email is required</span>
      }

      <input name="addressLine1" ref={register({ required: true })} placeholder="Address Line One"/>
      {
          errors.addressLine1 && <span class="error">Address is required</span>
      }

      <input name="addressLine2" ref={register} placeholder="Address Line Two (Optional)"/>

      <input name="city" ref={register({ required: true })} placeholder="City"/>
      {
          errors.city && <span class="error">City is required</span>
      }

      <input name="country" ref={register({ required: true })} placeholder="Country"/>
      {
          errors.country && <span class="error">Country is required</span>
      }

      <input name="zipcode" ref={register({ required: true })} placeholder="Zip Code" />
      {
          errors.zipcode && <span class="error">Zip Code is required</span>
      }

      <input type="submit" />
    </form>
  );
};

export default Shipment;