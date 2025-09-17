import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Leaf, 
  Users, 
  Calendar,
  Star,
  CheckCircle,
  MapPin,
  Clock,
  Award
} from "lucide-react";

const BusinessDashboard = () => {
  const stats = [
    {
      title: "Plants Adopted",
      value: "127",
      change: "+23%",
      icon: Leaf,
      color: "text-success",
    },
    {
      title: "Sustainability Score",
      value: "94",
      change: "+5 pts",
      icon: Award,
      color: "text-accent",
    },
    {
      title: "Team Satisfaction",
      value: "4.8",
      change: "+0.3",
      icon: Star,
      color: "text-warning",
    },
    {
      title: "Active Growers",
      value: "34",
      change: "+12",
      icon: Users,
      color: "text-primary",
    },
  ];

  const recentPlants = [
    {
      name: "Monstera Deliciosa",
      location: "Reception Area",
      health: 95,
      daysSince: 12,
      status: "Thriving",
    },
    {
      name: "Snake Plant",
      location: "Meeting Room B",
      health: 88,
      daysSince: 8,
      status: "Good",
    },
    {
      name: "Fiddle Leaf Fig",
      location: "Lobby",
      health: 92,
      daysSince: 20,
      status: "Excellent",
    },
  ];

  const upcomingEvents = [
    {
      title: "Monthly Plant Care Workshop",
      date: "Dec 18, 2024",
      time: "2:00 PM",
      attendees: 12,
    },
    {
      title: "New Plant Arrivals",
      date: "Dec 22, 2024",
      time: "10:00 AM",
      attendees: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Business Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            GreenSpace Offices - Coworking Space
          </p>
          <div className="flex items-center space-x-4">
            <Badge className="bg-success/10 text-success hover:bg-success/20">
              <CheckCircle className="h-3 w-3 mr-1" />
              Premium Partner
            </Badge>
            <Badge variant="outline">
              <MapPin className="h-3 w-3 mr-1" />
              Seattle, WA
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-nature-soft hover:shadow-nature-medium transition-nature">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sustainability Metrics */}
            <Card className="shadow-nature-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <span>Sustainability Impact</span>
                </CardTitle>
                <CardDescription>
                  Your environmental impact over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Air Quality Improvement</span>
                    <span className="font-medium text-foreground">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Team Productivity Boost</span>
                    <span className="font-medium text-foreground">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Waste Reduction</span>
                    <span className="font-medium text-foreground">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Employee Satisfaction</span>
                    <span className="font-medium text-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Plant Inventory */}
            <Card className="shadow-nature-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-nature-forest" />
                  <span>Plant Inventory</span>
                </CardTitle>
                <CardDescription>
                  Current plants in your space and their health status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPlants.map((plant, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-foreground mb-1">
                          {plant.name}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {plant.location}
                        </div>
                      </div>
                      <div className="text-right mr-4">
                        <div className="text-sm font-medium text-foreground">
                          Health: {plant.health}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {plant.daysSince} days ago
                        </div>
                      </div>
                      <Badge
                        variant={
                          plant.status === "Excellent" ? "default" :
                          plant.status === "Thriving" ? "secondary" : "outline"
                        }
                        className={
                          plant.status === "Excellent" ? "bg-success text-success-foreground" :
                          plant.status === "Thriving" ? "bg-accent/20 text-accent-foreground" : ""
                        }
                      >
                        {plant.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription Status */}
            <Card className="shadow-nature-soft">
              <CardHeader>
                <CardTitle className="text-lg">Premium Plan</CardTitle>
                <CardDescription>
                  Your current subscription status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Plants included</span>
                    <span className="font-medium text-foreground">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Care visits</span>
                    <span className="font-medium text-foreground">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Priority support</span>
                    <span className="font-medium text-success">✓ Included</span>
                  </div>
                  <Button className="w-full mt-4">
                    Manage Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="shadow-nature-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-3 border border-border rounded-lg hover:bg-secondary/20 transition-nature"
                    >
                      <div className="font-medium text-foreground mb-2">
                        {event.title}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.date}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </div>
                      <div className="text-xs text-accent">
                        {event.attendees} team members attending
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-nature-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Care Visit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Leaf className="h-4 w-4 mr-2" />
                  Browse New Plants
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Team Plant Training
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessDashboard;