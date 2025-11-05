import React from "react";

const services = [
  {
    id: 1,
    iconClass: "bi-truck-flatbed",
    title: "Free Shipping",
    description: "On order over $100",
    bgClass: "bg-blue",
  },
  {
    id: 2,
    iconClass: "bi-basket",
    title: "Always Fresh",
    description: "Product well packaged",
    bgClass: "bg-green",
  },
  {
    id: 3,
    iconClass: "bi-award",
    title: "Superior Quality",
    description: "Quality Products",
    bgClass: "bg-yellow",
  },
  {
    id: 4,
    iconClass: "bi-headset",
    title: "Support",
    description: "24/7 Support",
    bgClass: "bg-red",
  },
];

function Services() {
  return (
    <section className="services-wrapper">
      <div className="services-container">
        {services.map(({ id, iconClass, title, description, bgClass }) => (
          <div key={id} className="service-item">
            <div className={`service-icon-wrapper ${bgClass}`}>
              <i className={`bi ${iconClass} service-icon`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Services;
