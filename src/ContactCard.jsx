import { useState } from "react";

const ContactCard = ({ title, number, email, address, name, click }) => {
  return (
    <div className="contact" >
      <div className="contactIcon" onClick={click}>
        <i class="bi bi-telephone"></i>
        <p>{title}</p>
      </div>
      {name && <p> {name}</p>}
      <p>{number}</p>
      <p>{email}</p>
      <p>{address}</p>
    </div>
  );
};
export default ContactCard;
