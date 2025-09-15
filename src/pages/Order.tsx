import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { School, Package, CheckCircle } from "lucide-react";

// Mock data for available books
const availableBooks = [
  { id: 1, title: "First Steps to Reading", grade: "Kindergarten", subject: "Language Arts" },
  { id: 2, title: "Numbers & Counting Fun", grade: "Nursery", subject: "Mathematics" },
  { id: 3, title: "Science Explorers", grade: "Primary", subject: "Science" },
  { id: 4, title: "World History Chronicles", grade: "High School", subject: "Social Studies" },
  { id: 5, title: "Creative Writing Workshop", grade: "High School", subject: "Language Arts" },
  { id: 6, title: "Environmental Science Today", grade: "High School", subject: "Science" }
];

const Order = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    phone: "",
    email: "",
    deliveryAddress: "",
    specialRequests: ""
  });
  const [selectedBooks, setSelectedBooks] = useState<{[key: number]: number}>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookSelection = (bookId: number, checked: boolean) => {
    if (checked) {
      setSelectedBooks(prev => ({ ...prev, [bookId]: 1 }));
    } else {
      setSelectedBooks(prev => {
        const newSelection = { ...prev };
        delete newSelection[bookId];
        return newSelection;
      });
    }
  };

  const handleQuantityChange = (bookId: number, quantity: string) => {
    const qty = parseInt(quantity) || 0;
    if (qty > 0) {
      setSelectedBooks(prev => ({ ...prev, [bookId]: qty }));
    } else {
      setSelectedBooks(prev => {
        const newSelection = { ...prev };
        delete newSelection[bookId];
        return newSelection;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.schoolName || !formData.contactPerson || !formData.email || Object.keys(selectedBooks).length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select at least one book.",
        variant: "destructive"
      });
      return;
    }

    // Simulate order submission
    toast({
      title: "Order Request Submitted Successfully!",
      description: "Our sales team will contact you within 24 hours to process your order.",
    });

    // Reset form
    setFormData({
      schoolName: "",
      contactPerson: "",
      phone: "",
      email: "",
      deliveryAddress: "",
      specialRequests: ""
    });
    setSelectedBooks({});
  };

  const totalBooks = Object.values(selectedBooks).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <School className="h-16 w-16 mx-auto mb-4" />
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Place Your School Order
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Submit a bulk order request for your school. Our sales team will 
              contact you to finalize pricing and delivery details.
            </p>
          </div>
        </section>

        {/* Order Form */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* School Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <School className="h-5 w-5" />
                    <span>School Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="schoolName">School Name *</Label>
                      <Input
                        id="schoolName"
                        value={formData.schoolName}
                        onChange={(e) => handleInputChange("schoolName", e.target.value)}
                        placeholder="Enter your school name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                        placeholder="Full name of contact person"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="contact@school.edu"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="deliveryAddress">Delivery Address</Label>
                    <Textarea
                      id="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={(e) => handleInputChange("deliveryAddress", e.target.value)}
                      placeholder="Enter complete delivery address"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Book Selection */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Package className="h-5 w-5" />
                      <span>Select Books</span>
                    </div>
                    {totalBooks > 0 && (
                      <span className="text-sm text-accent font-medium">
                        {totalBooks} books selected
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableBooks.map((book) => (
                      <div key={book.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <Checkbox
                          id={`book-${book.id}`}
                          checked={book.id in selectedBooks}
                          onCheckedChange={(checked) => handleBookSelection(book.id, !!checked)}
                        />
                        <div className="flex-1">
                          <Label htmlFor={`book-${book.id}`} className="cursor-pointer">
                            <div className="font-medium">{book.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {book.grade} • {book.subject}
                            </div>
                          </Label>
                        </div>
                        {book.id in selectedBooks && (
                          <div className="flex items-center space-x-2">
                            <Label htmlFor={`qty-${book.id}`} className="text-sm">Qty:</Label>
                            <Input
                              id={`qty-${book.id}`}
                              type="number"
                              min="1"
                              max="1000"
                              value={selectedBooks[book.id]}
                              onChange={(e) => handleQuantityChange(book.id, e.target.value)}
                              className="w-20"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Special Requests */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="specialRequests">Special Requests or Notes</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special delivery instructions, preferred contact times, or other requests..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 px-12"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Submit Order Request
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Our sales team will contact you within 24 hours to process your order.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Order;