import catnadian_tshirt from "../../assets/products/catnadian_tshirt.jpg";
import leader_mug from "../../assets/products/leader_mug.jpg"; // Assuming a similar path structure for consistency
import freedom_flag from "../../assets/products/freedom_flag.jpg"; // Adjusting path to follow provided structure
import politics_pillow from "../../assets/products/politics_pillow.jpg"; // Direct path given in the object
import stickers_set from "../../assets/products/stickers_set.jpg"; // Direct path given in the object
import whisker_notebook from "../../assets/products/whisker_notebook.jpg"; // Direct path given in the object
import coalition_cap from "../../assets/products/coalition_cap.jpg"; // Direct path given in the object
import party_pennant from "../../assets/products/party_pennant.jpg"; // Direct path given in the object
import caucus_keychain from "../../assets/products/caucus_keychain.jpg"; // Assuming a similar path structure for consistency
import manifesto_poster from "../../assets/products/manifesto_poster.jpg"; // Assuming a similar path structure for consistency

const catnadianPartyProducts = [
  {
    id: 1,
    name: "Catnadian Party T-Shirt",
    price: "$19.99",
    image: catnadian_tshirt,
    description:
      "Show your support for the Catnadian party with this stylish and comfortable t-shirt, made from 100% organic cotton for breathability and comfort. Pre-shrunk to maintain size and fit over time. Available in sizes S to XXL.",
    material: "100% organic cotton",
    sizes: "S, M, L, XL, XXL",
    colors: ["Party Purple", "Whisker White", "Meow Mint"],
  },
  {
    id: 2,
    name: "Purr-litical Leader Mug",
    price: "$12.99",
    image: leader_mug,
    description:
      "Start your day right with this ceramic mug (15 oz capacity) representing leadership and charisma, all with a feline twist. Dishwasher and microwave safe.",
    material: "Ceramic",
    capacity: "15 oz",
    features: ["Dishwasher safe", "Microwave safe"],
  },
  {
    id: 3,
    name: "Feline Freedom Flag",
    price: "$9.99",
    image: freedom_flag,
    description:
      "Wave your support high with this durable polyester Feline Freedom Flag (3x5 ft), a symbol of independence and cat pride. Features reinforced grommets for easy hanging.",
    material: "Polyester",
    dimensions: "3 x 5 ft",
    features: ["Reinforced grommets"],
  },
  {
    id: 4,
    name: "Pawsitive Politics Pillow",
    price: "$24.99",
    image: politics_pillow,
    description:
      "Rest your head on this 18x18 inch comfy pillow, featuring a removable, machine-washable cover for easy care. Emblazoned with pawsitive political messages.",
    material: "Polyester (cover), 100% polyester insert",
    dimensions: "18 x 18 inches",
    features: ["Machine-washable cover", "Removable cover"],
  },
  {
    id: 5,
    name: "Catnadian Party Stickers Set",
    price: "$4.99",
    image: stickers_set,
    description:
      "Decorate your belongings with these water-resistant vinyl stickers. Set includes 10 unique designs, each celebrating the Catnadian Party's spirit.",
    material: "Vinyl",
    quantity: "10 stickers",
    features: ["Water-resistant", "Variety of designs"],
  },
  {
    id: 6,
    name: "Whisker Wisdom Notebook",
    price: "$7.99",
    image: whisker_notebook,
    description:
      "This 100-page lined notebook features a durable, soft-touch cover with whisker wisdom quotes on each page. Perfect for jotting down thoughts and strategies.",
    material: "Paper, soft-touch cover",
    pages: "100 lined pages",
    dimensions: "8.5 x 11 inches",
  },
  {
    id: 7,
    name: "Catnip Coalition Cap",
    price: "$14.99",
    image: coalition_cap,
    description:
      "This adjustable snapback cap, made from 100% cotton, keeps the sun at bay while showing your allegiance. Embroidered logo adds a touch of quality.",
    material: "100% cotton",
    features: ["Adjustable snapback", "Embroidered logo"],
    colors: ["Coalition Crimson", "Ballot Blue"],
  },
  {
    id: 8,
    name: "Paw-print Party Pennant",
    price: "$5.99",
    image: party_pennant,
    description:
      "Celebrate your party spirit with this vibrant, felt paw-print pennant (12x30 inches). A perfect accessory for rallies, parties, or home decor.",
    material: "Felt",
    dimensions: "12 x 30 inches",
    colors: ["Victory Violet", "Election Emerald"],
  },
  {
    id: 9,
    name: "Kitten Caucus Keychain",
    price: "$3.99",
    image: caucus_keychain,
    description:
      "Keep your keys organized with this durable metal keychain, adorned with a kitten caucus charm. A compact, yet significant symbol of your political passion.",
    material: "Metal",
    features: ["Durable construction", "Charm included"],
  },
  {
    id: 10,
    name: "Manifesto of Meows Poster",
    price: "$8.99",
    image: manifesto_poster,
    description:
      "Inspire your walls with the Manifesto of Meows Poster, encapsulating the Catnadian Party's vision. Printed on high-quality, glossy paper for a vibrant display. Ideal for offices, living spaces, or as a gift for the politically savvy cat lover.",
    material: "Glossy paper",
    dimensions: "24 x 36 inches",
    features: ["High-quality print", "Vibrant colors"],
  },
];

export default catnadianPartyProducts;
