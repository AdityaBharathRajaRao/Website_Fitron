import { founders } from "@/data/content";

// import founder images
import founder1 from "@/assets/team-founders1.jpg";
import founder2 from "@/assets/team-founders2.jpg";
import founder3 from "@/assets/team-founders3.jpg";

export default function About() {
  // Attach images to founders
  const foundersWithImages = founders.map((f, idx) => {
    if (idx === 0) return { ...f, image: founder1 };
    if (idx === 1) return { ...f, image: founder2 };
    if (idx === 2) return { ...f, image: founder3 };
    return f;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {foundersWithImages.map((founder, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            {/* Founder Image */}
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-48 object-contain rounded-md bg-gray-50 mb-4"
            />

            {/* Founder Details */}
            <h2 className="text-xl font-semibold">{founder.name}</h2>
            <p className="text-sm text-gray-600 mb-3">{founder.role}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{founder.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
