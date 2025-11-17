import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Heart, Users } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="h-16 w-16 mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-xl text-muted-foreground">
              E.E. José Alves de Cerqueira Cesar
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-muted-foreground mb-4">
                O Canal de Sugestões Escolar foi criado para proporcionar um espaço seguro e anônimo
                onde alunos e professores possam relatar problemas, fazer sugestões e contribuir
                ativamente para a melhoria contínua de nossa escola.
              </p>
              <p className="text-muted-foreground">
                Acreditamos que a comunicação aberta e transparente é fundamental para criar um
                ambiente escolar saudável, acolhedor e propício ao aprendizado.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Nosso Objetivo</h3>
                <p className="text-sm text-muted-foreground">
                  Criar um ambiente escolar melhor através da escuta ativa e resolução de problemas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Heart className="h-12 w-12 mx-auto text-secondary mb-4" />
                <h3 className="font-bold mb-2">Nossos Valores</h3>
                <p className="text-sm text-muted-foreground">
                  Respeito, empatia, transparência e comprometimento com toda a comunidade escolar
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Nossa Comunidade</h3>
                <p className="text-sm text-muted-foreground">
                  Alunos, professores e coordenadores trabalhando juntos por uma escola melhor
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="py-8">
              <h2 className="text-2xl font-bold mb-4">Por que criamos este canal?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sabemos que às vezes é difícil relatar problemas ou fazer sugestões pessoalmente.
                  Por isso, criamos este canal 100% anônimo onde todos podem se expressar livremente.
                </p>
                <p>
                  Nossa escola valoriza a voz de cada membro da comunidade escolar. Este sistema
                  permite que problemas sejam identificados e resolvidos rapidamente, contribuindo
                  para um ambiente mais harmonioso e produtivo.
                </p>
                <p>
                  Com o Canal de Sugestões Escolar, garantimos que:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Toda denúncia seja tratada com seriedade e confidencialidade</li>
                  <li>Coordenadores possam responder e agir rapidamente</li>
                  <li>A comunidade escolar participe ativamente da melhoria contínua</li>
                  <li>Problemas sejam identificados e resolvidos antes de se agravarem</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
