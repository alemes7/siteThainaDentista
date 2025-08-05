import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    procedure: ""
  });

  const procedures = [
    "Limpeza Dental",
    "Clareamento",
    "Aparelho Ortodôntico",
    "Restauração",
    "Odontopediatria",
    "Estética Dental",
    "Consulta de Avaliação"
  ];

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.procedure) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Aqui você integraria com um backend ou sistema de agendamento
    toast({
      title: "Agendamento solicitado!",
      description: "Entraremos em contato em breve para confirmar seu agendamento.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      procedure: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato para 
            confirmar seu agendamento. Estamos aqui para cuidar do seu sorriso!
          </p>
        </div>

        <Card className="shadow-elegant border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">
              Formulário de Agendamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                    <User className="w-4 h-4" />
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                    <Phone className="w-4 h-4" />
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                    <Mail className="w-4 h-4" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 text-foreground">
                    <Calendar className="w-4 h-4" />
                    Data Preferida
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-foreground">
                    <Clock className="w-4 h-4" />
                    Horário Preferido
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="border-border focus:ring-primary">
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label className="text-foreground">
                    Tipo de Procedimento
                  </Label>
                  <Select value={formData.procedure} onValueChange={(value) => handleInputChange("procedure", value)}>
                    <SelectTrigger className="border-border focus:ring-primary">
                      <SelectValue placeholder="Selecione o procedimento desejado" />
                    </SelectTrigger>
                    <SelectContent>
                      {procedures.map((procedure) => (
                        <SelectItem key={procedure} value={procedure}>
                          {procedure}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elegant transition-all duration-300"
                >
                  Solicitar Agendamento
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentForm;