-- Fix 1: Prevent users from updating their own role (privilege escalation fix)
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can update profile except role"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (
  auth.uid() = id AND 
  role = (SELECT role FROM public.profiles WHERE id = auth.uid())
);

-- Fix 2: Add RLS policies to user_roles table
CREATE POLICY "Users can view their own role"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Fix 3: Create security definer function for role checks
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role user_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Fix 4: Update RLS policies on complaints table to use security definer function
DROP POLICY IF EXISTS "Coordinators can view all complaints" ON public.complaints;
DROP POLICY IF EXISTS "Coordinators can update complaints" ON public.complaints;
DROP POLICY IF EXISTS "Users can create complaints" ON public.complaints;

CREATE POLICY "Coordinators can view all complaints"
ON public.complaints
FOR SELECT
USING (public.has_role(auth.uid(), 'coordenador'));

CREATE POLICY "Coordinators can update complaints"
ON public.complaints
FOR UPDATE
USING (public.has_role(auth.uid(), 'coordenador'));

CREATE POLICY "Users can create complaints"
ON public.complaints
FOR INSERT
WITH CHECK (
  public.has_role(auth.uid(), 'aluno') OR 
  public.has_role(auth.uid(), 'professor')
);

-- Fix 5: Add database constraints for input lengths
ALTER TABLE public.complaints 
ADD CONSTRAINT title_length CHECK (char_length(title) >= 5 AND char_length(title) <= 100);

ALTER TABLE public.complaints 
ADD CONSTRAINT description_length CHECK (char_length(description) >= 10 AND char_length(description) <= 2000);

ALTER TABLE public.complaints 
ADD CONSTRAINT response_length CHECK (coordinator_response IS NULL OR char_length(coordinator_response) <= 1000);