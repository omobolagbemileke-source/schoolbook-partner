import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, BookOpen } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Publishing",
      description: "Over 25 years of experience in educational publishing with a focus on curriculum-aligned content."
    },
    {
      icon: Users,
      title: "School Partnerships",
      description: "Trusted by over 5,000 schools nationwide for reliable educational materials and distribution."
    },
    {
      icon: Target,
      title: "Targeted Learning",
      description: "Specialized content for every grade level from Kindergarten through High School."
    },
    {
      icon: Award,
      title: "Award-Winning Content",
      description: "Our textbooks and storybooks have received multiple educational excellence awards."
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
              About EduBooks Publishing
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Empowering education through quality publishing and reliable distribution 
              services for schools across the nation.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1998, EduBooks Publishing began as a small educational 
                    publisher with a big dream: to make quality educational materials 
                    accessible to every school in America.
                  </p>
                  <p>
                    Today, we're proud to serve over 5,000 schools nationwide, 
                    providing everything from engaging storybooks for early learners 
                    to comprehensive textbooks for high school students.
                  </p>
                  <p>
                    Our commitment to educational excellence has earned us the trust 
                    of educators, administrators, and students alike.
                  </p>
                </div>
              </div>
              <div>
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To support educational excellence by providing schools with 
                      high-quality, curriculum-aligned textbooks and storybooks, 
                      backed by reliable distribution services and exceptional 
                      customer support.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-education-bg py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Schools Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine decades of publishing expertise with modern distribution 
                capabilities to serve schools efficiently and effectively.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Schools Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Educational Titles</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;