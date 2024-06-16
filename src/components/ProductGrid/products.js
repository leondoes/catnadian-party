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
  {
    id: 11,
    name: "Whisker Whisperer Hoodie",
    price: "$29.99",
    image: catnadian_tshirt,
    description:
      "Stay cozy and stylish with this hooded sweatshirt featuring the Whisker Whisperer design. Made from a blend of cotton and polyester for warmth and comfort.",
    material: "Cotton-polyester blend",
    sizes: "S, M, L, XL",
    colors: ["Feline Gray", "Mewsterious Black"],
    reviews: [
      { rating: 5, comment: "Super comfy and love the design!" },
      { rating: 4, comment: "Great for chilly evenings." },
      { rating: 5, comment: "Fits perfectly and feels great." },
      { rating: 3, comment: "Nice hoodie but runs a bit small." },
      { rating: 4, comment: "Good quality, would recommend." }
    ],
  },
  {
    id: 12,
    name: "Purr-fectionist Mug Set",
    price: "$24.99",
    image: leader_mug,
    description:
      "Set of two ceramic mugs featuring the Purr-fectionist design. Each mug holds 12 oz and is microwave and dishwasher safe.",
    material: "Ceramic",
    capacity: "12 oz each",
    features: ["Microwave safe", "Dishwasher safe"],
    reviews: [
      { rating: 5, comment: "Love these mugs, great size!" },
      { rating: 4, comment: "Beautiful design, holds up well." },
      { rating: 5, comment: "Perfect for morning coffee with my partner." },
      { rating: 3, comment: "Handle is a bit small for my liking." },
      { rating: 4, comment: "Good value for a set of two mugs." }
    ],
  },
  {
    id: 13,
    name: "Freedom Feline Bandana",
    price: "$6.99",
    image: freedom_flag,
    description:
      "Dress up your furry friend with this adorable bandana featuring the Freedom Feline pattern. Made from soft, breathable fabric for comfort.",
    material: "Polyester",
    dimensions: "One size fits most",
    features: ["Soft and breathable"],
    reviews: [
      { rating: 4, comment: "Cute bandana, fits well." },
      { rating: 5, comment: "Great for photoshoots!" },
      { rating: 4, comment: "Nice quality fabric." },
      { rating: 5, comment: "Perfect for my cat, doesn't bother her at all." },
      { rating: 3, comment: "Wish it came in more colors." }
    ],
  },
  {
    id: 14,
    name: "Paw-sitive Vibes Pillow",
    price: "$19.99",
    image: politics_pillow,
    description:
      "Add a touch of positivity to your space with this 16x16 inch throw pillow. Features a removable cover for easy cleaning and a soft, plush insert.",
    material: "Polyester (cover), plush insert",
    dimensions: "16 x 16 inches",
    features: ["Removable cover", "Soft and plush"],
    reviews: [
      { rating: 5, comment: "So soft and comfy!" },
      { rating: 4, comment: "Nice addition to my couch." },
      { rating: 5, comment: "Love the design, brightens up the room." },
      { rating: 3, comment: "Cover material could be softer." },
      { rating: 4, comment: "Good quality pillow for the price." }
    ],
  },
  {
    id: 15,
    name: "Catnadian Party Laptop Decals",
    price: "$3.99",
    image: stickers_set,
    description:
      "Personalize your laptop with these durable vinyl decals featuring various Catnadian Party designs. Water-resistant and easy to apply.",
    material: "Vinyl",
    quantity: "5 decals",
    features: ["Water-resistant", "Easy to apply"],
    reviews: [
      { rating: 5, comment: "Perfect size and quality!" },
      { rating: 4, comment: "Love these decals, very durable." },
      { rating: 5, comment: "Adds a fun touch to my laptop." },
      { rating: 3, comment: "Some decals were smaller than expected." },
      { rating: 4, comment: "Great value for 5 decals." }
    ],
  },
  {
    id: 16,
    name: "Whisker Wisdom Planner",
    price: "$12.99",
    image: whisker_notebook,
    description:
      "Stay organized with this Whisker Wisdom planner featuring weekly and monthly layouts. Hardcover with a soft-touch finish for durability.",
    material: "Paper, soft-touch cover",
    pages: "100 pages",
    dimensions: "6 x 9 inches",
    reviews: [
      { rating: 4, comment: "Love the layout and quality!" },
      { rating: 5, comment: "Perfect size for my needs." },
      { rating: 5, comment: "Helps me stay on track with my schedule." },
      { rating: 3, comment: "Cover could be a bit sturdier." },
      { rating: 4, comment: "Great planner, very functional." }
    ],
  },
  {
    id: 17,
    name: "Coalition Canvas Tote",
    price: "$16.99",
    image: coalition_cap,
    description:
      "Carry your essentials in style with this durable canvas tote bag featuring the Coalition design. Ideal for shopping, books, or everyday use.",
    material: "Canvas",
    dimensions: "14 x 16 inches",
    features: ["Durable and spacious"],
    reviews: [
      { rating: 5, comment: "Love this tote, very sturdy!" },
      { rating: 4, comment: "Great design and quality material." },
      { rating: 5, comment: "Perfect for groceries and books." },
      { rating: 3, comment: "Could use an inner pocket for small items." },
      { rating: 4, comment: "Nice tote bag for the price." }
    ],
  },
  {
    id: 18,
    name: "Party Paw-ty Balloons",
    price: "$7.99",
    image: party_pennant,
    description:
      "Decorate your next party with these festive Party Paw-ty balloons. Pack includes 12 latex balloons in assorted colors.",
    material: "Latex",
    quantity: "12 balloons",
    features: ["Assorted colors"],
    reviews: [
      { rating: 5, comment: "Bright and colorful balloons!" },
      { rating: 4, comment: "Good quality, held up well." },
      { rating: 5, comment: "Perfect for my cat's birthday party." },
      { rating: 3, comment: "One balloon had a small leak." },
      { rating: 4, comment: "Great addition to the party decorations." }
    ],
  },
  {
    id: 19,
    name: "Caucus Cat Key Holder",
    price: "$9.99",
    image: caucus_keychain,
    description:
      "Organize your keys with this Caucus Cat key holder. Made from durable metal with a secure ring to keep your keys safe.",
    material: "Metal",
    features: ["Durable construction", "Secure key ring"],
    reviews: [
      { rating: 4, comment: "Cute and practical key holder." },
      { rating: 5, comment: "Love the design, very sturdy." },
      { rating: 5, comment: "Perfect for cat lovers like me." },
      { rating: 3, comment: "Wish it came in more colors." },
      { rating: 4, comment: "Nice key holder, good quality." }
    ],
  },
  {
    id: 20,
    name: "Meow-nifesto Booklet",
    price: "$4.99",
    image: manifesto_poster,
    description:
      "Explore the Meow-nifesto principles in this handy booklet. Pocket-sized with glossy pages for easy reading and sharing.",
    material: "Glossy paper",
    dimensions: "4 x 6 inches",
    features: ["Pocket-sized", "Easy to read"],
    reviews: [
      { rating: 5, comment: "Informative and concise!" },
      { rating: 4, comment: "Great summary of key principles." },
      { rating: 5, comment: "Love the design and format." },
      { rating: 3, comment: "Wish it included more illustrations." },
      { rating: 4, comment: "Handy booklet for quick reference." }
    ],
  },
  {
    id: 21,
    name: "Catnadian Party Bandana",
    price: "$5.99",
    image: freedom_flag,
    description:
      "Show your support everywhere you go with this Catnadian Party bandana. Made from lightweight, breathable fabric for comfort.",
    material: "Polyester",
    dimensions: "One size fits most",
    features: ["Lightweight and breathable"],
    reviews: [
      { rating: 4, comment: "Great bandana, love the design!" },
      { rating: 5, comment: "Perfect for my cat's outings." },
      { rating: 4, comment: "Nice quality fabric." },
      { rating: 5, comment: "Great for rallies and events." },
      { rating: 3, comment: "Wish it came in more colors." }
    ],
  },
  {
    id: 22,
    name: "Political Paw Print Pillow",
    price: "$29.99",
    image: politics_pillow,
    description:
      "Make a statement with this oversized Political Paw Print Pillow. Features a plush insert and durable, machine-washable cover for easy care.",
    material: "Polyester (cover), plush insert",
    dimensions: "20 x 20 inches",
    features: ["Machine-washable cover", "Soft and plush"],
    reviews: [
      { rating: 5, comment: "Super soft and comfy!" },
      { rating: 4, comment: "Love the design, great quality." },
      { rating: 5, comment: "Perfect for lounging on the couch." },
      { rating: 3, comment: "Cover material could be softer." },
      { rating: 4, comment: "Nice pillow, worth the price." }
    ],
  },
  {
    id: 23,
    name: "Catnadian Party Laptop Sleeve",
    price: "$17.99",
    image: stickers_set,
    description:
      "Protect your laptop with this Catnadian Party laptop sleeve. Made from water-resistant neoprene with a vibrant, printed design.",
    material: "Neoprene",
    sizes: "13-inch, 15-inch",
    features: ["Water-resistant", "Zippered closure"],
    reviews: [
      { rating: 5, comment: "Fits my laptop perfectly!" },
      { rating: 4, comment: "Love the design, very sturdy." },
      { rating: 5, comment: "Keeps my laptop safe and dry." },
      { rating: 3, comment: "Could use more padding." },
      { rating: 4, comment: "Good quality sleeve." }
    ],
  },
  {
    id: 24,
    name: "Whisker Wisdom Journal",
    price: "$9.99",
    image: whisker_notebook,
    description:
      "Capture your thoughts and ideas in this Whisker Wisdom journal. Hardcover with lined pages and a ribbon bookmark for easy organization.",
    material: "Paper, hardcover",
    pages: "120 lined pages",
    dimensions: "5 x 7 inches",
    reviews: [
      { rating: 4, comment: "Nice journal, good quality paper." },
      { rating: 5, comment: "Perfect size for carrying around." },
      { rating: 5, comment: "Love the cover design!" },
      { rating: 3, comment: "Pages could be thicker." },
      { rating: 4, comment: "Great journal for the price." }
    ],
  },
  {
    id: 25,
    name: "Coalition Cat Cap",
    price: "$12.99",
    image: coalition_cap,
    description:
      "Stay cool and stylish with the Coalition Cat cap. Made from breathable cotton with an adjustable strap for a comfortable fit.",
    material: "100% cotton",
    features: ["Adjustable strap", "Embroidered design"],
    colors: ["Paw Print Pink", "Purr-ple"],
    reviews: [
      { rating: 5, comment: "Love this hat, fits perfectly!" },
      { rating: 4, comment: "Nice embroidery, good quality." },
      { rating: 5, comment: "Comfortable to wear all day." },
      { rating: 3, comment: "Could use more ventilation." },
      { rating: 4, comment: "Good cap, would recommend." }
    ],
  },
  {
    id: 26,
    name: "Paw-some Party Banner",
    price: "$8.99",
    image: party_pennant,
    description:
      "Decorate your space with this Paw-some Party Banner. Features colorful paw prints and is perfect for birthdays, rallies, and celebrations.",
    material: "Paper",
    dimensions: "10 feet length",
    features: ["Colorful design", "Easy to hang"],
    reviews: [
      { rating: 5, comment: "Bright and festive banner!" },
      { rating: 4, comment: "Good quality paper, held up well." },
      { rating: 5, comment: "Perfect for my cat's adoption party." },
      { rating: 3, comment: "Wish it was longer." },
      { rating: 4, comment: "Nice addition to the decorations." }
    ],
  },
  {
    id: 27,
    name: "Catnip Caucus Coin Purse",
    price: "$6.99",
    image: caucus_keychain,
    description:
      "Store your coins and small essentials in this Catnip Caucus coin purse. Compact design with a secure zipper closure.",
    material: "Polyester",
    features: ["Compact and lightweight", "Zipper closure"],
    reviews: [
      { rating: 4, comment: "Cute and functional coin purse." },
      { rating: 5, comment: "Love the design, fits in my pocket." },
      { rating: 5, comment: "Perfect for carrying spare change." },
      { rating: 3, comment: "Could be a bit bigger." },
      { rating: 4, comment: "Good quality for the price." }
    ],
  },
  {
    id: 28,
    name: "Meow-nificant Mousepad",
    price: "$10.99",
    image: manifesto_poster,
    description:
      "Enhance your workspace with this Meow-nificant mousepad. Features a smooth surface for precise mouse control and a non-slip rubber base.",
    material: "Rubber, fabric surface",
    dimensions: "8.5 x 10 inches",
    features: ["Smooth surface", "Non-slip base"],
    reviews: [
      { rating: 5, comment: "Great mousepad, love the design!" },
      { rating: 4, comment: "Works well with my mouse." },
      { rating: 5, comment: "Adds a fun touch to my desk." },
      { rating: 3, comment: "Could be a bit thicker." },
      { rating: 4, comment: "Nice mousepad, good quality." }
    ],
  },
  {
    id: 29,
    name: "Feline Freedom Phone Case",
    price: "$14.99",
    image: freedom_flag,
    description:
      "Protect your phone with the Feline Freedom phone case. Lightweight and durable, with a scratch-resistant surface and vibrant print.",
    material: "Plastic",
    compatible: "iPhone and Android models",
    features: ["Scratch-resistant", "Vibrant print"],
    reviews: [
      { rating: 5, comment: "Love this phone case, fits perfectly!" },
      { rating: 4, comment: "Nice design, protects well." },
      { rating: 5, comment: "Adds a stylish look to my phone." },
      { rating: 3, comment: "Could offer more grip." },
      { rating: 4, comment: "Good case for the price." }
    ],
  },
  {
    id: 30,
    name: "Catnip Coalition Coasters",
    price: "$9.99",
    image: coalition_cap,
    description:
      "Protect your furniture with these Catnip Coalition coasters. Set of 4 coasters with a cork backing to prevent slipping.",
    material: "Cork, paperboard",
    quantity: "Set of 4",
    features: ["Cork backing", "Absorbent surface"],
    reviews: [
      { rating: 5, comment: "Great coasters, stylish and functional!" },
      { rating: 4, comment: "Nice design, keeps my table dry." },
      { rating: 5, comment: "Perfect for coffee mugs and glasses." },
      { rating: 3, comment: "Wish they were a bit larger." },
      { rating: 4, comment: "Good quality coasters." }
    ],
  },
];

export default catnadianPartyProducts;
