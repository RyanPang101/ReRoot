import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Heart, MapPin, User, Award } from "lucide-react";
import plantMonstera from "@/assets/plant-monstera.jpg";
import plantFiddle from "@/assets/plant-fiddle.jpg";
import plantSnake from "@/assets/plant-snake.jpg";

const Browse = () => {
  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      image: plantMonstera,
      seller: "Sarah Chen",
      location: "Portland, OR",
      price: "Free",
      sustainabilityScore: 95,
      size: "Large",
      lightNeeds: "Bright indirect",
      careLevel: "Easy",
      description: "Beautiful, mature Monstera with fenestrated leaves. Has been with me for 3 years, very healthy and low-maintenance.",
      tags: ["Air Purifying", "Large Leaves", "Fast Growing"],
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      image: plantFiddle,
      seller: "Marcus Rodriguez",
      location: "Seattle, WA",
      price: "Free",
      sustainabilityScore: 88,
      size: "Medium",
      lightNeeds: "Bright indirect",
      careLevel: "Moderate",
      description: "Stunning fiddle leaf fig that's outgrown my apartment. Perfect for offices or larger spaces with good natural light.",
      tags: ["Statement Plant", "Office Friendly", "Air Purifying"],
    },
    {
      id: 3,
      name: "Snake Plant",
      image: plantSnake,
      seller: "Emma Thompson",
      location: "Vancouver, BC",
      price: "Free",
      sustainabilityScore: 92,
      size: "Small",
      lightNeeds: "Low to bright",
      careLevel: "Very Easy",
      description: "Perfect starter plant! Extremely low maintenance, tolerates neglect, and looks great in any space.",
      tags: ["Low Light", "Low Maintenance", "Beginner Friendly"],
    },
  ];

  const filters = {
    plantType: ["All Types", "Monstera", "Fiddle Leaf", "Snake Plant", "Pothos", "Philodendron"],
    size: ["All Sizes", "Small", "Medium", "Large"],
    lightNeeds: ["All Light Levels", "Low", "Medium", "Bright indirect", "Direct sun"],
    careLevel: ["All Levels", "Very Easy", "Easy", "Moderate", "Advanced"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Browse Plants
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover preloved plants ready for their next home
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl p-6 shadow-nature-soft mb-8">
          <div className="grid md:grid-cols-6 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search plants..."
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Plant Type" />
              </SelectTrigger>
              <SelectContent>
                {filters.plantType.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {filters.size.map((size) => (
                  <SelectItem key={size} value={size.toLowerCase()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Light Needs" />
              </SelectTrigger>
              <SelectContent>
                {filters.lightNeeds.map((light) => (
                  <SelectItem key={light} value={light.toLowerCase()}>
                    {light}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Care Level" />
              </SelectTrigger>
              <SelectContent>
                {filters.careLevel.map((level) => (
                  <SelectItem key={level} value={level.toLowerCase()}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-muted-foreground">
            Showing {plants.length} plants available for rehoming
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Plant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-card rounded-2xl overflow-hidden shadow-nature-soft hover:shadow-nature-medium transition-nature plant-card"
            >
              {/* Plant Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Plant Passport Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Plant Passport
                  </Badge>
                </div>

                {/* Sustainability Score */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs font-medium text-foreground">
                      {plant.sustainabilityScore}
                    </span>
                  </div>
                </div>

                {/* Heart Icon */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-nature">
                  <Heart className="h-5 w-5 text-muted-foreground hover:text-destructive" />
                </button>
              </div>

              {/* Plant Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {plant.name}
                  </h3>
                  <span className="text-lg font-bold text-success">
                    {plant.price}
                  </span>
                </div>

                {/* Seller Info */}
                <div className="flex items-center space-x-2 mb-4 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{plant.seller}</span>
                  <span className="text-xs">•</span>
                  <MapPin className="h-3 w-3" />
                  <span className="text-sm">{plant.location}</span>
                </div>

                {/* Plant Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-secondary/30 rounded-lg">
                    <div className="text-xs text-muted-foreground">Size</div>
                    <div className="text-sm font-medium text-foreground">{plant.size}</div>
                  </div>
                  <div className="text-center p-2 bg-secondary/30 rounded-lg">
                    <div className="text-xs text-muted-foreground">Light</div>
                    <div className="text-sm font-medium text-foreground">{plant.lightNeeds}</div>
                  </div>
                  <div className="text-center p-2 bg-secondary/30 rounded-lg">
                    <div className="text-xs text-muted-foreground">Care</div>
                    <div className="text-sm font-medium text-foreground">{plant.careLevel}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {plant.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {plant.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                  Adopt This Plant
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Plants
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;