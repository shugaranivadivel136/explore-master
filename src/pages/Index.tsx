import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, BarChart3, MapPin, Calendar, Package } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Tourism Management Platform</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive admin dashboard for managing tourist destinations, events, and native products
          </p>
          <Link to="/admin">
            <Button size="lg" className="gap-2">
              <Settings className="h-5 w-5" />
              Access Admin Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Places Management</CardTitle>
              <CardDescription>Manage tourist destinations and locations</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Events Management</CardTitle>
              <CardDescription>Schedule and manage tourism events</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Package className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Native Products</CardTitle>
              <CardDescription>Manage local and native products</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Track performance and insights</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>Everything you need to manage your tourism platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Complete CRUD operations for all data entities</li>
                <li>• Responsive design that works on all devices</li>
                <li>• Real-time data synchronization with Supabase</li>
                <li>• Professional admin interface with clean UI</li>
                <li>• Comprehensive data management tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
