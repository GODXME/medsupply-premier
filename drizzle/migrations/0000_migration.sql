CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  product text,
  quantity text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit enquiries" ON public.enquiries FOR INSERT TO anon, authenticated
WITH CHECK (char_length(full_name) BETWEEN 1 AND 120 AND char_length(company) BETWEEN 1 AND 160 AND char_length(email) BETWEEN 3 AND 255 AND coalesce(char_length(message),0) <= 2000);