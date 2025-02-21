
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const TravelerTips = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Tips data
//   const tips = [
//     { id: 1, title: "Safety in Dhaka", category: "Safety", description: "Always keep your belongings secure. Use a money belt or hidden pouch for valuables, and avoid displaying expensive items in crowded areas." },
//     { id: 2, title: "Packing for the Monsoon", category: "Packing", description: "Pack waterproof clothing, an umbrella, and quick-dry clothes. Also, carry a portable power bank, as rain may cause power outages." },
//     { id: 3, title: "Local Customs in Bangladesh", category: "Culture", description: "Respect local customs and traditions. Always greet with a 'Salam' and dress modestly, especially in rural areas. Avoid public displays of affection." },
//     { id: 4, title: "Transportation in Bangladesh", category: "Transportation", description: "Public transport can be crowded and chaotic. Opt for ridesharing apps like Uber or Pathao for safer and more reliable transportation." },
//     { id: 5, title: "Dealing with Street Vendors", category: "Shopping", description: "Bargaining is common in markets. Be polite but firm while negotiating prices. Ensure you agree on a price before making a purchase." },
//     { id: 6, title: "Cultural Etiquette for Dining", category: "Culture", description: "When dining with locals, always accept food with the right hand, as the left hand is considered impolite for eating. It’s customary to share meals." },
//     { id: 7, title: "Avoiding Mosquito Bites", category: "Health", description: "Bangladesh has a high risk of mosquito-borne diseases. Use mosquito repellent, wear long sleeves, and sleep under a mosquito net to stay protected." },
//     { id: 8, title: "Language Tips", category: "Language", description: "While Bengali (Bangla) is the national language, many people speak English, especially in urban areas. Learning a few basic phrases in Bengali will help you connect with locals." },
//     { id: 9, title: "Health Precautions for Travelers", category: "Health", description: "Ensure you are up-to-date on vaccinations such as Hepatitis A and Typhoid. Drink bottled water and avoid consuming raw or undercooked food." },
//     { id: 10, title: "Best Time to Visit Bangladesh", category: "Travel Planning", description: "The best time to visit is during the winter months (November to February) when the weather is cooler and more comfortable for travel." },
//     { id: 11, title: "Staying Connected", category: "Communication", description: "Buy a local SIM card for affordable internet and calling. Most major cities have good network coverage, and Wi-Fi is widely available in hotels and cafes." },
//     { id: 12, title: "Respecting Religious Sites", category: "Culture", description: "When visiting religious sites, dress modestly, and remove your shoes before entering temples or mosques. Be respectful during prayer times." },
//     { id: 13, title: "Exploring Rural Areas", category: "Travel Tips", description: "If you’re traveling to rural areas, be prepared for limited facilities. Carry essentials like snacks, water, and medications, as stores may be scarce." },
//     { id: 14, title: "Managing Currency", category: "Money", description: "ATMs are available in major cities, but it’s a good idea to carry cash when traveling to rural areas. Exchange money at authorized exchange centers to avoid scams." },
//     { id: 15, title: "Safety During Festivals", category: "Safety", description: "Festivals can get crowded, especially in Dhaka. Stay aware of your surroundings, avoid large crowds if possible, and keep your valuables close." },
//   ];

  
//   const filteredTips = tips.filter(tip => tip.title.toLowerCase().includes(searchQuery.toLowerCase()));

//   return (
//     <section className="p-6 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-4">Traveler's Tips</h2>

     
//       <motion.div
//         className="mb-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <input
//           type="text"
//           placeholder="Search tips..."
//           className="w-full p-2 border border-gray-300 rounded"
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </motion.div>

      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredTips.map(tip => (
//           <motion.div
//             key={tip.id}
//             className="p-4 bg-white rounded-lg shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-xl font-semibold">{tip.title}</h3>
//             <p className="text-gray-600">{tip.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TravelerTips;



import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TravelerTips = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Tips data
  const tips = [
        { id: 1, title: "Safety in Dhaka", category: "Safety", description: "Always keep your belongings secure. Use a money belt or hidden pouch for valuables, and avoid displaying expensive items in crowded areas." },
        { id: 2, title: "Packing for the Monsoon", category: "Packing", description: "Pack waterproof clothing, an umbrella, and quick-dry clothes. Also, carry a portable power bank, as rain may cause power outages." },
        { id: 3, title: "Local Customs in Bangladesh", category: "Culture", description: "Respect local customs and traditions. Always greet with a 'Salam' and dress modestly, especially in rural areas. Avoid public displays of affection." },
        { id: 4, title: "Transportation in Bangladesh", category: "Transportation", description: "Public transport can be crowded and chaotic. Opt for ridesharing apps like Uber or Pathao for safer and more reliable transportation." },
        { id: 5, title: "Dealing with Street Vendors", category: "Shopping", description: "Bargaining is common in markets. Be polite but firm while negotiating prices. Ensure you agree on a price before making a purchase." },
        { id: 6, title: "Cultural Etiquette for Dining", category: "Culture", description: "When dining with locals, always accept food with the right hand, as the left hand is considered impolite for eating. It’s customary to share meals." },
        { id: 7, title: "Avoiding Mosquito Bites", category: "Health", description: "Bangladesh has a high risk of mosquito-borne diseases. Use mosquito repellent, wear long sleeves, and sleep under a mosquito net to stay protected." },
        { id: 8, title: "Language Tips", category: "Language", description: "While Bengali (Bangla) is the national language, many people speak English, especially in urban areas. Learning a few basic phrases in Bengali will help you connect with locals." },
        { id: 9, title: "Health Precautions for Travelers", category: "Health", description: "Ensure you are up-to-date on vaccinations such as Hepatitis A and Typhoid. Drink bottled water and avoid consuming raw or undercooked food." },
        { id: 10, title: "Best Time to Visit Bangladesh", category: "Travel Planning", description: "The best time to visit is during the winter months (November to February) when the weather is cooler and more comfortable for travel." },
        { id: 11, title: "Staying Connected", category: "Communication", description: "Buy a local SIM card for affordable internet and calling. Most major cities have good network coverage, and Wi-Fi is widely available in hotels and cafes." },
        { id: 12, title: "Respecting Religious Sites", category: "Culture", description: "When visiting religious sites, dress modestly, and remove your shoes before entering temples or mosques. Be respectful during prayer times." },
        { id: 13, title: "Exploring Rural Areas", category: "Travel Tips", description: "If you’re traveling to rural areas, be prepared for limited facilities. Carry essentials like snacks, water, and medications, as stores may be scarce." },
        { id: 14, title: "Managing Currency", category: "Money", description: "ATMs are available in major cities, but it’s a good idea to carry cash when traveling to rural areas. Exchange money at authorized exchange centers to avoid scams." },
        { id: 15, title: "Safety During Festivals", category: "Safety", description: "Festivals can get crowded, especially in Dhaka. Stay aware of your surroundings, avoid large crowds if possible, and keep your valuables close." },
      ];

  const filteredTips = tips.filter(tip => tip.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section className={`p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h2 className="text-3xl font-bold text-center mb-4">Traveler's Tips</h2>

      {/* Search input */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          placeholder="Search tips..."
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      {/* Tips display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map(tip => (
          <motion.div
            key={tip.id}
            className={`p-4 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelerTips;


