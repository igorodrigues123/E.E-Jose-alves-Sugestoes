import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Home, Info, Users, MessageSquare, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Erro ao sair",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate("/");
      toast({
        title: "Logout realizado",
        description: "Você saiu da sua conta com sucesso.",
      });
    }
  };

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-foreground">Canal de Sugestões</span>
              <span className="text-xs text-muted-foreground">E.E. José Alves de Cerqueira Cesar</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/info">
                <Info className="h-4 w-4 mr-2" />
                Info
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/sobre">
                <Users className="h-4 w-4 mr-2" />
                Sobre Nós
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contato">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contato
              </Link>
            </Button>
            
            {user ? (
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            ) : (
              <Button size="sm" asChild>
                <Link to="/auth">Entrar</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
