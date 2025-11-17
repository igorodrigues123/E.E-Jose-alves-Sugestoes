import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { FileText, User, Calendar, Image as ImageIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { z } from "zod";

export default function Coordenador() {
  const [user, setUser] = useState<any>(null);
  const [complaints, setComplaints] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [respondingTo, setRespondingTo] = useState<string | null>(null);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (profileData?.role !== "coordenador") {
      navigate("/dashboard");
      return;
    }

    setUser(session.user);
    loadComplaints();
  };

  const loadComplaints = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("complaints")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Erro ao carregar denúncias",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setComplaints(data || []);
    }
    setLoading(false);
  };

  const responseSchema = z.string()
    .min(10, "A resposta deve ter pelo menos 10 caracteres")
    .max(1000, "A resposta deve ter no máximo 1000 caracteres")
    .trim();

  const handleRespond = async (complaintId: string) => {
    // Validate response
    try {
      responseSchema.parse(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Erro de validação",
          description: error.errors[0].message,
        });
        return;
      }
    }

    const { error } = await supabase
      .from("complaints")
      .update({
        coordinator_response: response.trim(),
        status: "respondido",
      })
      .eq("id", complaintId);

    if (error) {
      toast({
        title: "Erro ao responder",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Resposta enviada!",
        description: "A resposta foi registrada com sucesso.",
      });
      setResponse("");
      setRespondingTo(null);
      loadComplaints();
    }
  };

  const handleDelete = async (complaintId: string) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar esta denúncia? Esta ação não pode ser desfeita.");
    
    if (!confirmed) return;

    const { error } = await supabase
      .from("complaints")
      .delete()
      .eq("id", complaintId);

    if (error) {
      toast({
        title: "Erro ao deletar",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Denúncia deletada!",
        description: "A denúncia foi removida com sucesso.",
      });
      loadComplaints();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pendente":
        return "bg-yellow-500";
      case "respondido":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "aluno":
        return "Aluno";
      case "professor":
        return "Professor";
      case "coordenador":
        return "Coordenador";
      default:
        return role;
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Painel do Coordenador</h1>
          <p className="text-muted-foreground">Gerencie denúncias e sugestões da comunidade escolar</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total de Denúncias</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{complaints.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Pendentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600">
                {complaints.filter(c => c.status === "pendente").length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Respondidas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">
                {complaints.filter(c => c.status === "respondido").length}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {complaints.map((complaint) => (
            <Card key={complaint.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle>{complaint.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {getRoleLabel(complaint.author_role)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(complaint.created_at), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(complaint.status)}>
                    {complaint.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Descrição:</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {complaint.description}
                  </p>
                </div>

                {complaint.attachment_url && (
                  <div>
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      Anexo:
                    </p>
                    <a
                      href={complaint.attachment_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Ver arquivo anexado
                    </a>
                  </div>
                )}

                {complaint.coordinator_response && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Resposta do Coordenador:</p>
                    <p className="text-sm whitespace-pre-wrap">{complaint.coordinator_response}</p>
                  </div>
                )}

                {respondingTo === complaint.id ? (
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Escreva sua resposta..."
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      rows={4}
                    />
                    <div className="flex gap-2">
                      <Button onClick={() => handleRespond(complaint.id)}>
                        Enviar Resposta
                      </Button>
                      <Button variant="outline" onClick={() => {
                        setRespondingTo(null);
                        setResponse("");
                      }}>
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    {complaint.status === "pendente" && (
                      <Button onClick={() => setRespondingTo(complaint.id)}>
                        Responder
                      </Button>
                    )}
                    {complaint.status === "respondido" && (
                      <Button 
                        variant="destructive" 
                        onClick={() => handleDelete(complaint.id)}
                      >
                        Deletar Denúncia
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {complaints.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Nenhuma denúncia registrada ainda.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
