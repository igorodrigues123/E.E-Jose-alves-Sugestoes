-- Enable RLS on complaints table
ALTER TABLE public.complaints ENABLE ROW LEVEL SECURITY;

-- Policy: Students and teachers can create complaints
CREATE POLICY "Users can create complaints"
ON public.complaints
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role IN ('aluno', 'professor')
  )
);

-- Policy: Only coordinators can view all complaints
CREATE POLICY "Coordinators can view all complaints"
ON public.complaints
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'coordenador'
  )
);

-- Policy: Coordinators can update complaints (add responses)
CREATE POLICY "Coordinators can update complaints"
ON public.complaints
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'coordenador'
  )
);

-- Create storage bucket for complaint attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('complaint-attachments', 'complaint-attachments', false)
ON CONFLICT (id) DO NOTHING;

-- Policy: Authenticated users can upload to their own folder
CREATE POLICY "Users can upload complaint attachments"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'complaint-attachments' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Policy: Coordinators can view all attachments
CREATE POLICY "Coordinators can view all attachments"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'complaint-attachments' AND
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'coordenador'
  )
);

-- Add trigger to update updated_at on complaints
CREATE TRIGGER update_complaints_updated_at
BEFORE UPDATE ON public.complaints
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();