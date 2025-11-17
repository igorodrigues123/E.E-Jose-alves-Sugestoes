-- Criar bucket de anexos se não existir
INSERT INTO storage.buckets (id, name, public)
VALUES ('complaint-attachments', 'complaint-attachments', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Remover políticas antigas se existirem
DROP POLICY IF EXISTS "Coordenadores podem ver anexos" ON storage.objects;
DROP POLICY IF EXISTS "Usuários autenticados podem fazer upload" ON storage.objects;
DROP POLICY IF EXISTS "Usuários podem fazer upload de anexos" ON storage.objects;
DROP POLICY IF EXISTS "Usuários podem atualizar seus anexos" ON storage.objects;

-- Permitir que usuários autenticados façam upload de arquivos
CREATE POLICY "Usuários autenticados podem fazer upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'complaint-attachments');

-- Permitir que coordenadores vejam todos os arquivos
CREATE POLICY "Coordenadores podem ver anexos"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'complaint-attachments' AND
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid() AND profiles.role = 'coordenador'
  )
);

-- Permitir que todos vejam arquivos (já que o bucket é público)
CREATE POLICY "Anexos são publicamente acessíveis"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'complaint-attachments');