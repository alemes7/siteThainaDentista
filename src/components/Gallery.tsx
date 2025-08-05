import dentalClinic from "@/assets/dental-clinic.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import procedure1 from "@/assets/procedure-1.jpg";
import procedure2 from "@/assets/procedure-2.jpg";

const Gallery = () => {
  const images = [
    {
      src: dentalClinic,
      alt: "Clínica Odontológica Moderna",
      title: "Nossa Clínica"
    },
    {
      src: beforeAfter1,
      alt: "Resultado de Clareamento Dental",
      title: "Antes e Depois - Clareamento"
    },
    {
      src: procedure1,
      alt: "Procedimento de Limpeza Dental",
      title: "Limpeza Profissional"
    },
    {
      src: procedure2,
      alt: "Tratamento Ortodôntico",
      title: "Ortodontia"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa clínica moderna e veja alguns dos resultados 
            incríveis que alcançamos com nossos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;