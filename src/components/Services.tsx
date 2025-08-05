import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Smile,
  Shield,
  Sparkles,
  Heart,
  Settings,
  Star
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Limpeza Dental",
      description: "Profilaxia completa para manter seus dentes sempre saudáveis e limpos."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Clareamento",
      description: "Clareamento dental seguro para deixar seu sorriso mais branco e radiante."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Aparelho Ortodôntico",
      description: "Correção do alinhamento dental para um sorriso perfeito e harmônico."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Restaurações",
      description: "Restaurações em resina e porcelana para devolver a função e estética."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Odontopediatria",
      description: "Cuidado especializado para a saúde bucal das crianças."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Estética Dental",
      description: "Procedimentos estéticos para um sorriso ainda mais bonito."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de tratamentos dentários com tecnologia 
            moderna e cuidado personalizado para cada paciente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-border">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;