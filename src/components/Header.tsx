import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import dentistProfile from "@/assets/dentist-profile.jpg";

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center space-y-6">
          <Avatar className="w-32 h-32 border-4 border-primary-foreground shadow-elegant">
            <AvatarImage src={dentistProfile} alt="Dra. Marina Silva" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Dra. Marina Silva
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light">
              Cirurgiã-Dentista • CRO 12345
            </p>
            <p className="text-lg mt-2 opacity-80">
              "Cuidando do seu sorriso com carinho e profissionalismo"
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;