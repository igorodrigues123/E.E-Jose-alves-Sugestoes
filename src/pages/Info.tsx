import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Users, FileText } from "lucide-react";

export default function Info() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Informações</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Saiba mais sobre o Canal de Sugestões Escolar
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>100% Anônimo e Seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sua identidade é mantida em total sigilo. Apenas coordenadores terão acesso às denúncias,
                  mas não saberão quem as enviou. Denuncie sem medo!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Disponível 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O sistema está disponível 24 horas por dia, 7 dias por semana. Envie suas denúncias
                  a qualquer momento e os coordenadores responderão o mais breve possível.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>3 Níveis de Acesso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Alunos e professores podem enviar denúncias e sugestões. Coordenadores têm acesso
                  especial para visualizar, gerenciar e responder todas as denúncias.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Anexe Evidências</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você pode anexar fotos, documentos e outros arquivos para apoiar sua denúncia.
                  Isso ajuda os coordenadores a entenderem melhor a situação.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Como Funciona?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Crie sua conta ou faça login</h3>
                <p className="text-muted-foreground">
                  Crie uma conta informando se você é aluno, professor ou coordenador. Você também
                  pode entrar com sua conta do Google para facilitar.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">2. Envie sua denúncia</h3>
                <p className="text-muted-foreground">
                  Alunos e professores podem escrever denúncias ou sugestões de forma anônima.
                  Descreva o problema e, se desejar, anexe arquivos como fotos.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">3. Coordenadores respondem</h3>
                <p className="text-muted-foreground">
                  Os coordenadores recebem as denúncias e podem respondê-las diretamente no sistema.
                  Eles veem quem enviou (aluno ou professor) mas não a identidade específica.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">4. Melhore a escola juntos</h3>
                <p className="text-muted-foreground">
                  Com esse canal de comunicação, todos podem colaborar para tornar nossa escola
                  um lugar melhor para estudar e trabalhar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
