-- Permitir que coordenadores deletem denúncias
CREATE POLICY "Coordinators can delete complaints"
ON public.complaints FOR DELETE
TO authenticated
USING (
  has_role(auth.uid(), 'coordenador'::user_role)
);