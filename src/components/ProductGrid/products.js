import catnadian_tshirt from "../../assets/products/catnadian_tshirt.jpg";
import leader_mug from "../../assets/products/leader_mug.jpg";
import freedom_flag from "../../assets/products/freedom_flag.jpg";
import politics_pillow from "../../assets/products/politics_pillow.jpg";
import stickers_set from "../../assets/products/stickers_set.jpg";
import whisker_notebook from "../../assets/products/whisker_notebook.jpg";
import coalition_cap from "../../assets/products/coalition_cap.jpg";
import party_pennant from "../../assets/products/party_pennant.jpg";
import caucus_keychain from "../../assets/products/caucus_keychain.jpg";
import manifesto_poster from "../../assets/products/manifesto_poster.jpg";

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
    reviews: [
      { rating: 5, comment: "Very comfortable and stylish!" },
      { rating: 4, comment: "Good quality but a bit pricey." },
      { rating: 5, comment: "Fits perfectly, and the colors are vibrant." },
      { rating: 3, comment: "Material is nice but the sizing is a bit off." },
      { rating: 4, comment: "Great shirt for casual wear." }
    ],
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
    reviews: [
      { rating: 5, comment: "Perfect for my morning coffee!" },
      { rating: 4, comment: "Great design, holds heat well." },
      { rating: 5, comment: "Love the design and the size is just right." },
      { rating: 3, comment: "Good mug but the handle could be more comfortable." },
      { rating: 5, comment: "Excellent quality, highly recommend." }
    ],
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
    reviews: [
      { rating: 4, comment: "Looks great in my room!" },
      { rating: 5, comment: "High quality and vibrant colors." },
      { rating: 4, comment: "Nice flag but wish it was a bit bigger." },
      { rating: 5, comment: "Perfect for rallies and events." },
      { rating: 3, comment: "Good flag but the material feels a bit thin." }
    ],
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
    reviews: [
      { rating: 5, comment: "Very comfy and easy to clean." },
      { rating: 4, comment: "Nice design, a bit smaller than expected." },
      { rating: 5, comment: "Perfect addition to my living room." },
      { rating: 3, comment: "Good pillow but the cover could be softer." },
      { rating: 4, comment: "Great pillow for the price." }
    ],
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
    reviews: [
      { rating: 5, comment: "Fun and durable stickers!" },
      { rating: 4, comment: "Great variety and quality." },
      { rating: 5, comment: "Perfect for decorating my laptop." },
      { rating: 3, comment: "Some stickers were smaller than expected." },
      { rating: 4, comment: "Nice designs, but a bit pricey for stickers." }
    ],
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
    reviews: [
      { rating: 4, comment: "Nice feel and good quality paper." },
      { rating: 5, comment: "Love the quotes on each page!" },
      { rating: 5, comment: "Perfect for journaling and note-taking." },
      { rating: 3, comment: "Good notebook but the cover could be sturdier." },
      { rating: 4, comment: "Great notebook, very inspiring." }
    ],
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
    reviews: [
      { rating: 5, comment: "Fits perfectly and looks great!" },
      { rating: 4, comment: "Good quality, but wish it came in more colors." },
      { rating: 5, comment: "Excellent cap, very comfortable." },
      { rating: 3, comment: "Decent cap but the logo could be bigger." },
      { rating: 4, comment: "Nice cap for daily use." }
    ],
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
    reviews: [
      { rating: 5, comment: "Bright and eye-catching!" },
      { rating: 4, comment: "Great for parties, wish it was bigger." },
      { rating: 5, comment: "Perfect for decorating my room." },
      { rating: 3, comment: "Good pennant but a bit flimsy." },
      { rating: 4, comment: "Nice addition to my party decor." }
    ],
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
    reviews: [
      { rating: 4, comment: "Cute and sturdy keychain." },
      { rating: 5, comment: "Love the charm, very durable." },
      { rating: 5, comment: "Perfect for my keys, and very cute." },
      { rating: 3, comment: "Good keychain but the charm could be bigger." },
      { rating: 4, comment: "Nice keychain, great quality." }
    ],
  },
  {
    id: 10,
    name: "Meownifesto of Meows",
    price: "$8.99",
    image: manifesto_poster,
    description:
      "Inspire your walls with the Meownifesto of Meows, encapsulating the Catnadian Party's vision. Printed on high-quality, glossy paper for a vibrant display. Ideal for offices, living spaces, or as a gift for the politically savvy cat lover.",
    material: "Glossy paper",
    dimensions: "24 x 36 inches",
    features: ["High-quality print", "Vibrant colors"],
    reviews: [
      { rating: 5, comment: "Looks great on my wall!" },
      { rating: 4, comment: "Good quality, but a bit expensive." },
      { rating: 5, comment: "Beautiful poster, very inspiring." },
      { rating: 3, comment: "Nice poster but the print could be sharper." },
      { rating: 4, comment: "Great addition to my office." }
    ],
  },
];

export default catnadianPartyProducts;
