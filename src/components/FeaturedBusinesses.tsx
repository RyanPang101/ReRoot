import { Quote, Star } from "lucide-react";

const FeaturedBusinesses = () => {
  const businesses = [
    {
      name: "Brew & Bloom Café",
      type: "Coffee Shop",
      quote: "ReRoot helped us create a living, breathing atmosphere that our customers absolutely love. Our plants have stories, and that makes all the difference.",
      rating: 5,
      impact: "35 plants adopted",
      sustainability: "Reduced décor costs by 60%",
    },
    {
      name: "GreenSpace Offices",
      type: "Coworking Space",
      quote: "The quality and diversity of plants through ReRoot has transformed our workspace. Our team productivity has noticeably improved.",
      rating: 5,
      impact: "127 plants adopted",
      sustainability: "Improved air quality by 40%",
    },
    {
      name: "Eco Events Co.",
      type: "Event Planning",
      quote: "For sustainable events, ReRoot is our go-to. Beautiful plants with meaningful stories that align perfectly with our eco-conscious clients.",
      rating: 5,
      impact: "89 plants adopted",
      sustainability: "Zero waste event décor",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Trusted by Forward-Thinking Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how companies are transforming their spaces while supporting sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-nature-soft hover:shadow-nature-medium transition-nature group"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-primary/60" />
                <div className="flex items-center space-x-1">
                  {[...Array(business.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed italic">
                "{business.quote}"
              </blockquote>

              {/* Business Info */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-foreground">
                  {business.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {business.type}
                </p>
              </div>

              {/* Impact Metrics */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <span className="text-sm font-medium text-success">
                    Impact
                  </span>
                  <span className="text-sm text-foreground">
                    {business.impact}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <span className="text-sm font-medium text-accent-foreground">
                    Benefit
                  </span>
                  <span className="text-sm text-foreground">
                    {business.sustainability}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Businesses */}
        <div className="text-center mt-16">
          <div className="bg-gradient-earth rounded-2xl p-8 shadow-nature-medium">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Transform Your Space
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join hundreds of businesses creating sustainable, inspiring environments with ReRoot
            </p>
            <a
              href="/businesses"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-nature shadow-nature-soft"
            >
              Partner with ReRoot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;