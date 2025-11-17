import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contato() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Entre em contato com a E.E. José Alves de Cerqueira Cesar
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Para dúvidas gerais:
                </p>

                <a href="mailto:E005915A@EDUCACAO.SP.GOV.BR" className="text-primary hover:underline">
                  E005915A@EDUCACAO.SP.GOV.BR
                </a>
                <p className="text-muted-foreground mt-4 mb-2">
                </p>
=======
                <a href="mailto:contato@eejacesar.sp.gov.br" className="text-primary hover:underline">
                  contato@eejacesar.sp.gov.br
                </a>
                <p className="text-muted-foreground mt-4 mb-2">
                  Para questões administrativas:
                </p>
                <a href="mailto:diretoria@eejacesar.sp.gov.br" className="text-primary hover:underline">
                  diretoria@eejacesar.sp.gov.br
                </a>
>>>>>>> d771c4919d90770e49a3137c934972fff2d60711
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Secretaria:
                </p>
<<<<<<< HEAD
                <a href="tel:+551124550166" className="text-primary hover:underline block mb-4">
                  (11) 2455-0166
                </a>
                <p className="text-muted-foreground mb-2">

=======
                <a href="tel:+5511999999999" className="text-primary hover:underline block mb-4">
                  (11) 99999-9999
                </a>
                <p className="text-muted-foreground mb-2">
                  Coordenação:
                </p>
                <a href="tel:+5511888888888" className="text-primary hover:underline">
                  (11) 88888-8888
                </a>
>>>>>>> d771c4919d90770e49a3137c934972fff2d60711
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
<<<<<<< HEAD
                  Av. São Luiz, 484<br />
                  Vila Rosalia<br />
                  Guarulhos - SP<br />
                  CEP: 07072-000
=======
                  Rua Exemplo, 123<br />
                  Bairro Centro<br />
                  São Paulo - SP<br />
                  CEP: 00000-000
>>>>>>> d771c4919d90770e49a3137c934972fff2d60711
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Horário de Funcionamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Segunda a Sexta:</strong><br />
<<<<<<< HEAD
                  7h00 às 21h00
=======
                  7h00 às 17h00
>>>>>>> d771c4919d90770e49a3137c934972fff2d60711
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Sábados, Domingos e Feriados:</strong><br />
                  Fechado
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sobre o Canal de Sugestões</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                O Canal de Sugestões Escolar é uma plataforma online disponível 24 horas por dia,
                7 dias por semana. Para denúncias e sugestões anônimas, utilize o sistema através
                do seu login.
              </p>
              <p className="text-muted-foreground">
                Para questões administrativas, dúvidas sobre o sistema ou outros assuntos que não
                sejam denúncias, utilize os contatos acima durante o horário de funcionamento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
