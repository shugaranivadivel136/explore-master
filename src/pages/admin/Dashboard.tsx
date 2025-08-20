import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, Package, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function Dashboard() {
  const { data: placesCount } = useQuery({
    queryKey: ['places-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('place')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    }
  });

  const { data: eventsCount } = useQuery({
    queryKey: ['events-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('events')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    }
  });

  const { data: productsCount } = useQuery({
    queryKey: ['products-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('native_products')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    }
  });

  const stats = [
    {
      title: "Total Places",
      value: placesCount,
      description: "Tourist destinations",
      icon: Building2,
      color: "text-primary"
    },
    {
      title: "Total Events",
      value: eventsCount,
      description: "Scheduled events",
      icon: Calendar,
      color: "text-secondary-foreground"
    },
    {
      title: "Native Products",
      value: productsCount,
      description: "Local products",
      icon: Package,
      color: "text-accent-foreground"
    },
    {
      title: "Growth",
      value: "12%",
      description: "This month",
      icon: TrendingUp,
      color: "text-muted-foreground"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Manage your tourism platform data</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common management tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Add Place</span>
                </div>
              </Card>
              <Card className="p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Add Event</span>
                </div>
              </Card>
              <Card className="p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Add Product</span>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates in your system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">System initialized</p>
                  <p className="text-xs text-muted-foreground">Ready to manage your tourism data</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}