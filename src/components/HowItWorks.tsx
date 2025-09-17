import { Upload, Users, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload your plant",
      description: "Share photos and details of your preloved plant, including care instructions and sustainability story.",
      color: "text-nature-forest",
      bgColor: "bg-nature-mint/20",
    },
    {
      icon: Users,
      title: "Match with a business",
      description: "Our algorithm connects you with local cafés, offices, and event planners looking for your plant type.",
      color: "text-earth-terracotta",
      bgColor: "bg-accent/20",
    },
    {
      icon: TrendingUp,
      title: "Track your impact",
      description: "Monitor your plant's new journey and see the environmental impact of your sustainable choice.",
      color: "text-primary",
      bgColor: "bg-secondary/40",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to give your plants a new purpose while building a sustainable future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-border/0 transform translate-x-4" />
              )}

              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-nature-soft">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 ${step.bgColor} rounded-2xl mb-6 transition-bounce group-hover:scale-110 shadow-nature-soft`}>
                <step.icon className={`h-10 w-10 ${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-card rounded-lg p-1 shadow-nature-soft">
            <span className="px-4 py-2 text-sm text-muted-foreground">
              Ready to start?
            </span>
            <div className="h-6 w-px bg-border mx-2" />
            <a
              href="/browse"
              className="px-6 py-2 text-sm font-medium text-primary hover:text-primary-hover transition-nature"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;