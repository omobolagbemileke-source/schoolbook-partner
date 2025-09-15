import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { BookOpen, Filter } from "lucide-react";

// Mock data for books
const books = [
  {
    id: 1,
    title: "First Steps to Reading",
    subject: "Language Arts",
    grade: "Kindergarten",
    description: "Engaging storybook series designed to build early reading skills with colorful illustrations.",
    isbn: "978-0-123456-78-9",
    cover: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Numbers & Counting Fun",
    subject: "Mathematics",
    grade: "Nursery",
    description: "Interactive math workbook introducing numbers, counting, and basic arithmetic concepts.",
    isbn: "978-0-123456-79-6",
    cover: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Science Explorers",
    subject: "Science",
    grade: "Primary",
    description: "Hands-on science textbook encouraging curiosity and discovery through experiments.",
    isbn: "978-0-123456-80-2",
    cover: "/placeholder.svg"
  },
  {
    id: 4,
    title: "World History Chronicles",
    subject: "Social Studies",
    grade: "High School",
    description: "Comprehensive history textbook covering major world civilizations and events.",
    isbn: "978-0-123456-81-9",
    cover: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Creative Writing Workshop",
    subject: "Language Arts",
    grade: "High School",
    description: "Advanced writing guide developing creative expression and literary analysis skills.",
    isbn: "978-0-123456-82-6",
    cover: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Environmental Science Today",
    subject: "Science",
    grade: "High School",
    description: "Modern environmental science textbook addressing current ecological challenges.",
    isbn: "978-0-123456-83-3",
    cover: "/placeholder.svg"
  }
];

const gradeLevels = ["All Levels", "Kindergarten", "Nursery", "Primary", "High School"];

const Catalog = () => {
  const [selectedGrade, setSelectedGrade] = useState("All Levels");
  const [selectedBooks, setSelectedBooks] = useState<number[]>([]);

  const filteredBooks = selectedGrade === "All Levels" 
    ? books 
    : books.filter(book => book.grade === selectedGrade);

  const toggleBookSelection = (bookId: number) => {
    setSelectedBooks(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const getGradeBadgeColor = (grade: string) => {
    switch (grade) {
      case "Kindergarten": return "bg-pink-100 text-pink-800";
      case "Nursery": return "bg-blue-100 text-blue-800";
      case "Primary": return "bg-green-100 text-green-800";
      case "High School": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Educational Book Catalog
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Browse our comprehensive collection of textbooks and storybooks 
              for every grade level from Kindergarten through High School.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-education-bg border-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Filter by Grade Level:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {gradeLevels.map((grade) => (
                  <Button
                    key={grade}
                    variant={selectedGrade === grade ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGrade(grade)}
                    className="text-sm"
                  >
                    {grade}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {selectedGrade === "All Levels" ? "All Books" : selectedGrade} 
                ({filteredBooks.length} books)
              </h2>
              {selectedBooks.length > 0 && (
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <a href="/order" className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Add to Order ({selectedBooks.length})</span>
                  </a>
                </Button>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredBooks.map((book) => (
                <Card key={book.id} className="shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6">
                    {/* Book Cover Placeholder */}
                    <div className="bg-gradient-card rounded-lg h-48 mb-4 flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-muted-foreground" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-lg leading-tight">{book.title}</h3>
                        <Badge className={getGradeBadgeColor(book.grade)}>
                          {book.grade}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-primary font-medium">{book.subject}</p>
                      <p className="text-sm text-muted-foreground">{book.description}</p>
                      <p className="text-xs text-muted-foreground">ISBN: {book.isbn}</p>
                      
                      <Button
                        className={`w-full ${
                          selectedBooks.includes(book.id) 
                            ? 'bg-accent hover:bg-accent/90' 
                            : 'bg-primary hover:bg-primary/90'
                        }`}
                        onClick={() => toggleBookSelection(book.id)}
                      >
                        {selectedBooks.includes(book.id) 
                          ? "Added to Order ✓" 
                          : "Add to School Order"
                        }
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No books found for the selected grade level.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;