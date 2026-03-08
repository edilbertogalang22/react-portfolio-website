import ServicesData from "../data/ServicesData";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 px-4 max-w-5xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My <span className="text-primary"> Services </span>
      </h2>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ServicesData.map((service, index) => (
          <div
            key={index}
            className={`bg-card shadow-md rounded-lg p-6 card-hover h-full flex flex-col animate-[var(--animate-fade-in-delay-${index})]`}
          >
            {/* Service Title */}
            <h3 className="text-xl font-semibold mb-2 text-glow">
              {service.s_name}
            </h3>
            {/* Service Description */}
            <p className="text-foreground flex-grow">{service.s_desc}</p>

            {/* Optional Button */}
          </div>
        ))}
      </div>
    </section>
  );
};
