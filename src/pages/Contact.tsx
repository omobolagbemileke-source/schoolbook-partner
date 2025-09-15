import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 8AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      content: "orders@edubooks.com",
      description: "24/7 response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Education Avenue",
      description: "Learning City, LC 12345"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      description: "8:00 AM - 6:00 PM EST"
    }
  ];

  const departments = [
    {
      title: "Sales & Orders",
      email: "orders@edubooks.com",
      description: "Book orders, pricing, and bulk purchasing inquiries"
    },
    {
      title: "Customer Service",
      email: "support@edubooks.com",
      description: "General questions, order status, and account support"
    },
    {
      title: "Partnership Inquiries",
      email: "partnerships@edubooks.com",
      description: "Distribution partnerships and collaboration opportunities"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <MessageSquare className="h-16 w-16 mx-auto mb-4" />
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to partner with us? Have questions about our services? 
              We're here to help your school succeed.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-education-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to reach us - choose what works best for you.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6">
                    <info.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Departments */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@school.edu"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us how we can help your school..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Department Information */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Contact Departments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {departments.map((dept, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg">{dept.title}</h3>
                        <p className="text-accent font-medium mb-2">{dept.email}</p>
                        <p className="text-sm text-muted-foreground">{dept.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-gradient-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Need Immediate Help?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      For urgent order questions or delivery issues, call us directly 
                      during business hours for immediate assistance.
                    </p>
                    <Button className="w-full" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Call +1 (555) 123-4567
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="bg-education-bg py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Quick answers to common questions about our services and ordering process.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="shadow-card text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How do I place a bulk order?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use our online order form or contact our sales team directly 
                    for assistance with large volume orders.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/order">Place Order</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="shadow-card text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What are your delivery times?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Standard delivery is 5-7 business days. Express shipping 
                    options are available for urgent orders.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/services">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;