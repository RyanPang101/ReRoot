import { useEffect, useState } from "react";

const ImpactCounter = () => {
  const [counts, setCounts] = useState({
    plantsRehomed: 0,
    carbonSaved: 0,
    wasteDiverted: 0,
  });

  const finalCounts = {
    plantsRehomed: 2847,
    carbonSaved: 1.2, // in tons
    wasteDiverted: 89, // in percentage
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    const timers = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / steps;

      const timer = setInterval(() => {
        setCounts((prev) => {
          const newValue = prev[key as keyof typeof prev] + increment;
          if (newValue >= finalValue) {
            clearInterval(timer);
            return { ...prev, [key]: finalValue };
          }
          return { ...prev, [key]: newValue };
        });
      }, stepTime);

      return timer;
    });

    // Cleanup
    return () => {
      timers.forEach(clearInterval);
    };
  }, []);

  const stats = [
    {
      value: Math.floor(counts.plantsRehomed).toLocaleString(),
      label: "Plants Rehomed",
      suffix: "+",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      value: counts.carbonSaved.toFixed(1),
      label: "Tons CO₂ Saved",
      suffix: "",
      color: "text-nature-forest",
      bgColor: "bg-nature-forest/10",
    },
    {
      value: Math.floor(counts.wasteDiverted),
      label: "Waste Diverted",
      suffix: "%",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-forest text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-nature-mint rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Growing Impact
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Together, we're creating a more sustainable future, one plant at a time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-24 h-24 ${stat.bgColor} rounded-2xl mb-6 transition-bounce group-hover:scale-110 shadow-nature-medium`}>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {String(stat.value).charAt(0)}
                </div>
              </div>
              
              <div className="animate-counter">
                <div className="text-5xl sm:text-6xl font-bold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xl opacity-80 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card/10 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-nature-strong">
            <span className="text-lg font-medium">
              Join thousands making a difference
            </span>
            <a
              href="/browse"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-nature shadow-nature-soft"
            >
              Start Your Impact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;