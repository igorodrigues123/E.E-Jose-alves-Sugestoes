import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Users, FileText, MessageSquare, Eye, TrendingUp } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Canal de Sugestão Escolar
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              E.E. José Alves de Cerqueira Cesar
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Um espaço seguro e anônimo para denúncias e sugestões. 
              Juntos, construímos uma escola melhor para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/auth">
                  Entrar ou Criar Conta
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/info">
                  Saiba Mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Informativos Principais */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Por que usar o Canal de Sugestões?
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>100% Anônimo</CardTitle>
                  <CardDescription>
                    As denúncias são completamente anônimas. Sua identidade é protegida.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Somente coordenadores têm acesso às denúncias, mas não saberão quem as enviou.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <Clock className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Resposta Rápida</CardTitle>
                  <CardDescription>
                    Coordenadores respondem suas denúncias rapidamente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sistema disponível 24/7 para você enviar denúncias quando precisar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Confidencial</CardTitle>
                  <CardDescription>
                    Seu relato é tratado com máxima confidencialidade.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Garantimos sigilo absoluto em todas as denúncias e sugestões recebidas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Como Funciona?
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle className="text-lg">Crie sua Conta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Registre-se informando se você é aluno, professor ou coordenador. Também é possível entrar com Google.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <CardTitle className="text-lg">Relatar Problemas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Alunos e professores podem enviar denúncias ou problemas que encontrarem, com opção de anexar arquivos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle className="text-lg">Acompanhar Denúncias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Somente o coordenador vê as denúncias enviadas e pode responder diretamente no sistema.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-secondary">4</span>
                  </div>
                  <CardTitle className="text-lg">Melhorar Juntos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Todos podem colaborar para tornar a escola um lugar melhor através de feedback construtivo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos do Sistema */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Recursos do Sistema
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Envio de Denúncias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Escreva sua denúncia ou sugestão de forma detalhada e clara.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Anexar Arquivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Adicione fotos, documentos ou outros arquivos para complementar sua denúncia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Painel do Coordenador</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Coordenadores têm acesso a todas as denúncias e podem gerenciá-las.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Proteção de Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sistema seguro com criptografia e proteção de informações sensíveis.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>3 Níveis de Acesso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sistema diferenciado para alunos, professores e coordenadores.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Melhoria Contínua</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identificação e resolução rápida de problemas para melhorar a escola.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para fazer a diferença?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sua voz é importante. Ajude a construir uma escola melhor para todos.
            </p>
            <Button size="lg" asChild className="text-lg px-10">
              <Link to="/auth">
                Começar Agora
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 E.E. José Alves de Cerqueira Cesar - Canal de Sugestão Escolar</p>
          <p className="mt-2">Sistema seguro e confidencial para toda a comunidade escolar</p>
        </div>
      </footer>
    </div>
  );
}
