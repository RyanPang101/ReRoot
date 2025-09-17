import { Heart, MessageCircle, Share, Calendar, MapPin } from "lucide-react";
import plantMonstera from "@/assets/plant-monstera.jpg";
import plantFiddle from "@/assets/plant-fiddle.jpg";
import plantSnake from "@/assets/plant-snake.jpg";

const CommunityFeed = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "SC",
        location: "Portland, OR",
      },
      type: "success_story",
      image: plantMonstera,
      content: "My Monstera found the perfect home at Bloom Café! Seeing customers enjoy coffee next to my plant baby makes my heart full. 🌱☕",
      likes: 47,
      comments: 12,
      timestamp: "2 hours ago",
      tags: ["#PlantParent", "#SustainableLiving"],
    },
    {
      id: 2,
      user: {
        name: "Green Tips Daily",
        avatar: "GT",
        location: "Community",
      },
      type: "tip",
      image: plantFiddle,
      content: "Pro tip: When preparing your plant for rehoming, include a 'plant passport' with care instructions, watering schedule, and any quirks! New plant parents will appreciate the guidance. 📋",
      likes: 89,
      comments: 23,
      timestamp: "4 hours ago",
      tags: ["#PlantTips", "#CaringCommunity"],
    },
    {
      id: 3,
      user: {
        name: "EcoSpace Office",
        avatar: "EO",
        location: "Seattle, WA",
      },
      type: "business_update",
      image: plantSnake,
      content: "Update from our office: The snake plants from ReRoot have thrived! Air quality improved 30% and team morale is through the roof. Thank you to all the plant donors! 🏢",
      likes: 156,
      comments: 34,
      timestamp: "1 day ago",
      tags: ["#OfficeLife", "#CleanAir"],
    },
  ];

  const events = [
    {
      title: "Plant Swap Saturday",
      date: "Dec 16",
      location: "Pioneer Square",
      attendees: 89,
    },
    {
      title: "Business Sustainability Workshop",
      date: "Dec 20",
      location: "Online",
      attendees: 156,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Community Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from plant lovers and businesses making a difference together
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-card rounded-2xl p-6 shadow-nature-soft hover:shadow-nature-medium transition-nature"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {post.user.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {post.user.name}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {post.user.location}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {post.timestamp}
                  </span>
                </div>

                {/* Post Image */}
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt="Plant story"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Post Content */}
                <p className="text-foreground mb-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-destructive transition-nature">
                      <Heart className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-nature">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground transition-nature">
                    <Share className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-secondary/30 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-lg hover:shadow-nature-soft transition-nature cursor-pointer"
                  >
                    <div className="font-medium text-foreground mb-2">
                      {event.title}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {event.date}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {event.location}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      {event.attendees} attending
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-earth rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Community Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Members</span>
                  <span className="font-semibold text-foreground">12,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Plants Shared</span>
                  <span className="font-semibold text-foreground">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Businesses</span>
                  <span className="font-semibold text-foreground">342</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeed;