import servicesData from "../data/services";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title">Services</h2>

      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div key={idx} className="service-card">
            <h3>{service.category}</h3>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services