import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Users, Globe, BookOpen, Clock, Shield, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Educational Publishing",
      description: "Custom textbook and educational material publishing services tailored to your curriculum needs.",
      features: [
        "Curriculum-aligned content development",
        "Expert editorial and design services",
        "Digital and print format options",
        "Collaborative content creation process"
      ]
    },
    {
      icon: Truck,
      title: "Distribution Network",
      description: "Nationwide distribution network ensuring timely delivery to schools across all 50 states.",
      features: [
        "Fast, reliable shipping nationwide",
        "Bulk order handling and fulfillment",
        "Flexible delivery scheduling",
        "Real-time order tracking"
      ]
    },
    {
      icon: Users,
      title: "School Partnerships",
      description: "Long-term partnership programs designed to support your school's educational goals.",
      features: [
        "Dedicated account management",
        "Volume pricing for bulk orders",
        "Educational consultation services",
        "Ongoing support and resources"
      ]
    },
    {
      icon: Globe,
      title: "Multi-Publisher Distribution",
      description: "We distribute educational materials from multiple trusted publishers through our network.",
      features: [
        "Access to 50+ educational publishers",
        "Comprehensive catalog management",
        "Single-point ordering system",
        "Consolidated shipping and billing"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick order processing and delivery to minimize classroom disruption."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All materials undergo rigorous quality checks before distribution."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account managers for schools with ongoing needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Distribution Services
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive publishing and distribution solutions designed 
              specifically for educational institutions nationwide.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From publishing to distribution, we provide end-to-end solutions 
                for your educational material needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <service.icon className="h-8 w-8 text-primary" />
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <ArrowRight className="h-4 w-4 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-education-bg py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We understand the unique challenges schools face and have built 
                our services to address them effectively.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join thousands of schools nationwide who trust EduBooks Publishing 
                  for their educational material needs. Get started with a simple 
                  order or learn more about our partnership programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <a href="/catalog">Browse Catalog</a>
                  </Button>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <a href="/order">Place Order</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/contact">Contact Sales</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Distribution Coverage */}
        <section className="bg-education-bg py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Nationwide Coverage</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our distribution network serves schools in all 50 states, 
              ensuring reliable delivery wherever your institution is located.
            </p>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50</div>
                <div className="text-muted-foreground">States Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-muted-foreground">Average Processing Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">On-Time Delivery Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;