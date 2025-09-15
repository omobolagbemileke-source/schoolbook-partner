import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, School, Users, Award, ArrowRight, CheckCircle, Truck } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const bookLevels = [
    {
      title: "Kindergarten",
      description: "Fun, engaging storybooks and early learning materials",
      icon: "🎨",
      count: "50+ titles"
    },
    {
      title: "Nursery", 
      description: "Interactive books for developing foundational skills",
      icon: "🧸",
      count: "75+ titles"
    },
    {
      title: "Primary",
      description: "Comprehensive textbooks across all core subjects", 
      icon: "📚",
      count: "200+ titles"
    },
    {
      title: "High School",
      description: "Advanced materials for college preparation",
      icon: "🎓", 
      count: "175+ titles"
    }
  ];

  const partnerships = [
    {
      title: "Bulk Ordering",
      description: "Volume discounts for large school orders with flexible payment terms",
      icon: Truck
    },
    {
      title: "Dedicated Support", 
      description: "Personal account managers for schools with ongoing needs",
      icon: Users
    },
    {
      title: "Quality Assurance",
      description: "All materials undergo rigorous quality checks and curriculum alignment",
      icon: Award
    }
  ];

  const stats = [
    { number: "5,000+", label: "Schools Served" },
    { number: "25", label: "Years Experience" },
    { number: "500+", label: "Educational Titles" },
    { number: "50", label: "States Covered" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                Your Trusted Partner in 
                <span className="text-accent"> School Books</span> & Distribution
              </h1>
              <p className="mb-8 text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Serving educational institutions nationwide with quality textbooks 
                and storybooks from Kindergarten through High School.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  <a href="/catalog" className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Browse Catalog</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  <a href="/order" className="flex items-center space-x-2">
                    <School className="h-5 w-5" />
                    <span>Place School Order</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-education-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Publisher Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">About EduBooks Publishing</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  For over 25 years, EduBooks Publishing has been the trusted partner 
                  for schools seeking high-quality educational materials. We combine 
                  expert publishing capabilities with nationwide distribution to serve 
                  educational institutions from coast to coast.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Curriculum-aligned educational content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Reliable nationwide distribution network</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Dedicated support for educational institutions</span>
                  </div>
                </div>
                <Button asChild className="mt-6" variant="outline">
                  <a href="/about" className="flex items-center space-x-2">
                    <span>Learn More About Us</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
                <div className="text-center">
                  <BookOpen className="h-20 w-20 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Quality Education Materials</h3>
                  <p className="text-muted-foreground">
                    From engaging storybooks that spark imagination to comprehensive 
                    textbooks that build knowledge, we provide the educational resources 
                    your school needs to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Levels Section */}
        <section className="bg-education-bg py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Books by Level</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive educational materials tailored for every grade level
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {bookLevels.map((level, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-shadow group">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{level.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{level.description}</p>
                    <Badge className="mb-4 bg-primary/10 text-primary">{level.count}</Badge>
                    <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <a href="/catalog">View Books</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Distribution Partnerships */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Distribution Partnerships</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Why schools nationwide choose EduBooks for their educational material needs
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-8 text-center">
                    <partnership.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{partnership.title}</h3>
                    <p className="text-muted-foreground">{partnership.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-hero py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of schools nationwide who trust EduBooks Publishing 
              for their educational material needs. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                <a href="/catalog" className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Browse Our Catalog</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                <a href="/contact" className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Contact Our Team</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
