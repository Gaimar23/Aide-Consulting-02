import React, { useRef } from "react";
import "./Contact.scss";
import about01 from "../../assets/images/about1.jpg";
import team3 from "../../assets/images/team5.jpg";
import team4 from "../../assets/images/team3.jpg";
import { RiWhatsappFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const serviceId = import.meta.env.VITE_MY_SERVICE_ID;
  const templateId = import.meta.env.VITE_MY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_MY_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    // return toast.success("Message envoyé", {
    //   position: "top-right",
    // });
    emailjs
      .sendForm(
        // `${JSON.stringify(import.meta.env.MY_SERVICE_ID)}`,
        // `${JSON.stringify(import.meta.env.MY_TEMPLATE_ID)}`,
        serviceId,
        templateId,
        form.current,
        {
          // publicKey: `${JSON.stringify(import.meta.env.MY_PUBLIC_KEY)}`,
          publicKey: publicKey,
        }
      )
      .then(
        () => {
          toast.success("Message envoyé", {
            position: "top-right",
          });
          e.target[0].value = "";
          e.target[1].value = "";
          e.target[2].value = "";
          e.target[3].value = "";
        },
        (error) => {
          toast.error("Erreur rencontrée");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="sub-contact">
        <div className="contact-head">
          <div className="slash">
            <span className="first"></span>
            <span className="second"></span>
          </div>
          <div className="title">Contact</div>
          <h1 className="sub-title" id="contact-us">
            Envoyez nous un message
          </h1>
        </div>
        <div className="contact">
          <div className="left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="nom">
                <label>Nom</label>
                <input type="text" name="user_name" required />
              </div>
              <div className="email">
                <label>Email</label>
                <input type="email" name="user_email" required />
              </div>
              <div className="phone">
                <label>Phone</label>
                <input type="text" name="user_phone" required />
              </div>
              <div className="message">
                <label>Message</label>
                <textarea rows={5} name="message" required></textarea>
              </div>
              <div className="button-container">
                <button type="submit">Envoyer</button>
                <a href="https://wa.me/237696429766">
                  <RiWhatsappFill className="icon" />
                </a>
              </div>
            </form>
          </div>
          <div className="right">
            <div className="image-container">
              <img src={team4} alt="" className="first" />
              <img src={team3} alt="" className="second" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
