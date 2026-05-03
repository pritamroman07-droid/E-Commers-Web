const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular voice-controlled speaker, now with a fabric design and improved speaker for richer and louder sound.',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Organic Whole Grain Pasta',
    image: '/images/pasta.jpg',
    description:
      'Healthy and delicious organic whole grain pasta. Perfect for a nutritious meal with high fiber content.',
    brand: 'Fields & Harvest',
    category: 'Grocery',
    price: 4.99,
    countInStock: 50,
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: 'Fresh Farm Eggs (12 pack)',
    image: '/images/eggs.jpg',
    description:
      'Farm fresh brown eggs from cage-free chickens. High in protein and perfect for breakfast.',
    brand: 'FarmSide',
    category: 'Grocery',
    price: 3.50,
    countInStock: 20,
    rating: 4.5,
    numReviews: 22,
  },
  {
    name: 'Extra Virgin Olive Oil',
    image: '/images/olive_oil.jpg',
    description:
      'Premium cold-pressed extra virgin olive oil. Ideal for salads, dressings, and gourmet cooking.',
    brand: 'Ophelia',
    category: 'Grocery',
    price: 18.99,
    countInStock: 15,
    rating: 4.9,
    numReviews: 18,
  },
  {
    name: 'Classic Black Leather Jacket',
    image: '/images/jacket.jpg',
    description:
      'Timeless black leather jacket made from premium grade-A leather. Durable, stylish, and perfect for any occasion.',
    brand: 'Vogue',
    category: 'Fashion',
    price: 129.99,
    countInStock: 5,
    rating: 4.7,
    numReviews: 9,
  },
  {
    name: 'Minimalist White Sneakers',
    image: '/images/sneakers.jpg',
    description:
      'Clean and minimalist white sneakers. Comfortable for all-day wear and fits perfectly with any outfit.',
    brand: 'UrbanStep',
    category: 'Fashion',
    price: 65.00,
    countInStock: 12,
    rating: 4.6,
    numReviews: 14,
  },
  {
    name: 'Floral Summer Maxi Dress',
    image: '/images/model1.jpg',
    description:
      'Beautifully crafted floral summer dress with a flowy silhouette. Perfect for garden parties or beach vacations. Made from breathable organic cotton.',
    brand: 'SweetFashion',
    category: 'Fashion',
    price: 79.99,
    countInStock: 15,
    rating: 4.9,
    numReviews: 32,
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    name: 'Elegant Red Evening Gown',
    image: '/images/model2.jpg',
    description:
      'Stunning velvet evening gown in deep ruby red. Features an off-shoulder design and a graceful train. Ideal for formal events and luxury galas.',
    brand: 'SweetFashion',
    category: 'Fashion',
    price: 249.99,
    countInStock: 5,
    rating: 5.0,
    numReviews: 18,
    sizes: ['M', 'L'],
  },
  {
    name: 'Chic Blue Cocktail Dress',
    image: '/images/model3.jpg',
    description:
      'A modern take on the classic cocktail dress. This cobalt blue piece features an asymmetrical neckline and a tailored fit. Versatile for both office and evening wear.',
    brand: 'SweetFashion',
    category: 'Fashion',
    price: 115.00,
    countInStock: 10,
    rating: 4.8,
    numReviews: 24,
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

const additionalProducts = [];

const randomRating = () => (Math.floor(Math.random() * 20) + 30) / 10;
const randomPrice = (min, max) => Number((Math.random() * (max - min) + min).toFixed(2));
const randomStock = () => Math.floor(Math.random() * 50) + 1;

// Image Lists
const mensImages = ['/images/mens_fashion.png', '/images/mens_fashion_1.png', '/images/mens_fashion_2.png', '/images/mens_fashion_3.png', '/images/jacket.jpg'];
const womensImages = ['/images/womens_fashion.png', '/images/womens_fashion_1.png', '/images/womens_fashion_2.png', '/images/womens_fashion_3.png', '/images/model1.jpg', '/images/model2.jpg', '/images/model3.jpg'];
const androidImages = ['/images/android_phone.png', '/images/android_phone_1.png', '/images/android_phone_2.png', '/images/android_phone_3.png', '/images/phone.jpg'];
const appleImages = ['/images/apple_phone.png', '/images/apple_phone_1.png', '/images/apple_phone_2.png', '/images/airpods.jpg'];
const gymImages = ['/images/gym_equipment.png']; 
const foodImages = ['/images/packaged_food.png', '/images/pasta.jpg', '/images/eggs.jpg', '/images/olive_oil.jpg'];

const mensItems = ['Oxford Shirt', 'Chino Pants', 'Denim Jacket', 'Polo Shirt', 'Leather Belt', 'Casual Blazer', 'V-Neck Sweater', 'Cargo Shorts', 'Trench Coat', 'Bomber Jacket'];
const womensItems = ['Silk Blouse', 'Pleated Skirt', 'Cashmere Sweater', 'High Heels', 'Handbag', 'Evening Dress', 'Summer Romper', 'Wool Coat', 'Leather Leggings', 'Maxi Skirt'];
const androidBrands = ['NovaTech', 'PixelPro', 'GalaxyEdge', 'Xenon', 'Alpha'];
const appleModels = ['15 Pro Max', '14 Plus', '13 Mini', 'SE Special Edition', '15 Pro', '12 Pro', 'XR Classic'];
const gymItems = ['Adjustable Dumbbell', 'Kettlebell Set', 'Resistance Bands', 'Yoga Mat', 'Foam Roller', 'Weight Bench', 'Treadmill', 'Elliptical', 'Pull-up Bar'];
const foodItems = ['Protein Bar', 'Fruit & Nut Mix', 'Quinoa Crackers', 'Dark Chocolate', 'Veggie Chips', 'Granola Cluster', 'Roasted Almonds', 'Organic Honey', 'Peanut Butter'];

// Men's Fashion (20)
for (let i = 1; i <= 20; i++) {
  additionalProducts.push({
    name: `Premium Men's ${mensItems[i % mensItems.length]} ${i}`,
    image: mensImages[i % mensImages.length],
    description: 'A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.',
    brand: 'UrbanVogue',
    category: 'Fashion',
    price: randomPrice(30, 200),
    countInStock: randomStock(),
    rating: randomRating(),
    numReviews: Math.floor(Math.random() * 50) + 5,
    sizes: ['M', 'L', 'XL']
  });
}

// Women's Fashion (20)
for (let i = 1; i <= 20; i++) {
  additionalProducts.push({
    name: `Elegant Women's ${womensItems[i % womensItems.length]} ${i}`,
    image: womensImages[i % womensImages.length],
    description: 'Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.',
    brand: 'BelleEpoque',
    category: 'Fashion',
    price: randomPrice(40, 300),
    countInStock: randomStock(),
    rating: randomRating(),
    numReviews: Math.floor(Math.random() * 60) + 10,
    sizes: ['S', 'M', 'L']
  });
}

// Android Phones (15)
for (let i = 1; i <= 15; i++) {
  const brand = androidBrands[i % androidBrands.length];
  additionalProducts.push({
    name: `${brand} Pro Android Smartphone ${i}`,
    image: androidImages[i % androidImages.length],
    description: 'A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.',
    brand: brand,
    category: 'Electronics',
    price: randomPrice(300, 1300),
    countInStock: randomStock(),
    rating: randomRating(),
    numReviews: Math.floor(Math.random() * 100) + 20
  });
}

// Apple Phones (15)
for (let i = 1; i <= 15; i++) {
  const model = appleModels[i % appleModels.length];
  additionalProducts.push({
    name: `iPhone ${model} ${i}`,
    image: appleImages[i % appleImages.length],
    description: 'The world\'s most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.',
    brand: 'Apple',
    category: 'Electronics',
    price: randomPrice(600, 1600),
    countInStock: randomStock(),
    rating: randomRating(),
    numReviews: Math.floor(Math.random() * 150) + 50
  });
}

// Gym Instruments (15)
for (let i = 1; i <= 15; i++) {
  additionalProducts.push({
    name: `Pro ${gymItems[i % gymItems.length]} ${i}`,
    image: gymImages[0], // Only 1 image available for now
    description: 'Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.',
    brand: 'IronCore',
    category: 'Gym',
    price: randomPrice(15, 600),
    countInStock: randomStock(),
    rating: randomRating(),
    numReviews: Math.floor(Math.random() * 80) + 10
  });
}

// Packaged Foods (15)
for (let i = 1; i <= 15; i++) {
  additionalProducts.push({
    name: `Gourmet ${foodItems[i % foodItems.length]} ${i}`,
    image: foodImages[0], // Only 1 image available for now
    description: 'Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.',
    brand: 'GreenBite',
    category: 'Grocery',
    price: randomPrice(3, 40),
    countInStock: randomStock(),
    rating: randomRating(),
    numReviews: Math.floor(Math.random() * 120) + 30
  });
}

let allProducts = [...products, ...additionalProducts];

// Shuffle the products list to mix previous ones
for (let i = allProducts.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
}

const fs = require('fs');
const content = `const products = ${JSON.stringify(allProducts, null, 2)};\n\nexport default products;`;
fs.writeFileSync('backend/data/products.js', content);
console.log('Successfully updated products.js with 114 products and randomized images.');
