-- Enable Row Level Security on all tables
ALTER TABLE public.place ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.native_products ENABLE ROW LEVEL SECURITY;

-- Create policies to allow all operations for now (admin access)
-- You can restrict these later based on user roles
CREATE POLICY "Allow all operations on place" ON public.place FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on events" ON public.events FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on native_products" ON public.native_products FOR ALL USING (true) WITH CHECK (true);