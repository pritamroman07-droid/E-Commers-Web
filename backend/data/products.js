const products = [
  {
    "name": "Elegant Women's Leather Leggings 18",
    "image": "/images/model1.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 109.81,
    "countInStock": 3,
    "rating": 3.8,
    "numReviews": 56,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Elegant Women's Leather Leggings 8",
    "image": "/images/womens_fashion_1.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 292.63,
    "countInStock": 18,
    "rating": 3.2,
    "numReviews": 23,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Elegant Women's High Heels 13",
    "image": "/images/model3.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 73.55,
    "countInStock": 27,
    "rating": 4.7,
    "numReviews": 23,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Premium Men's Bomber Jacket 9",
    "image": "/images/jacket.jpg",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 90.12,
    "countInStock": 27,
    "rating": 4.7,
    "numReviews": 54,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Elegant Red Evening Gown",
    "image": "/images/model2.jpg",
    "description": "Stunning velvet evening gown in deep ruby red. Features an off-shoulder design and a graceful train. Ideal for formal events and luxury galas.",
    "brand": "SweetFashion",
    "category": "Fashion",
    "price": 249.99,
    "countInStock": 5,
    "rating": 5,
    "numReviews": 18,
    "sizes": [
      "M",
      "L"
    ]
  },
  {
    "name": "Xenon Pro Android Smartphone 13",
    "image": "/images/android_phone_3.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "Xenon",
    "category": "Electronics",
    "price": 1023.15,
    "countInStock": 5,
    "rating": 3.9,
    "numReviews": 46
  },
  {
    "name": "PixelPro Pro Android Smartphone 11",
    "image": "/images/android_phone_1.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "PixelPro",
    "category": "Electronics",
    "price": 703.01,
    "countInStock": 25,
    "rating": 4.6,
    "numReviews": 50
  },
  {
    "name": "iPhone 13 Mini 9",
    "image": "/images/apple_phone_1.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1065.43,
    "countInStock": 49,
    "rating": 3.3,
    "numReviews": 161
  },
  {
    "name": "Gourmet Roasted Almonds 6",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 9.07,
    "countInStock": 29,
    "rating": 3.4,
    "numReviews": 137
  },
  {
    "name": "Sony Playstation 4 Pro White Version",
    "image": "/images/playstation.jpg",
    "description": "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    "brand": "Sony",
    "category": "Electronics",
    "price": 399.99,
    "countInStock": 11,
    "rating": 5,
    "numReviews": 12
  },
  {
    "name": "Gourmet Veggie Chips 13",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 28.89,
    "countInStock": 1,
    "rating": 3.1,
    "numReviews": 84
  },
  {
    "name": "Minimalist White Sneakers",
    "image": "/images/sneakers.jpg",
    "description": "Clean and minimalist white sneakers. Comfortable for all-day wear and fits perfectly with any outfit.",
    "brand": "UrbanStep",
    "category": "Fashion",
    "price": 65,
    "countInStock": 12,
    "rating": 4.6,
    "numReviews": 14
  },
  {
    "name": "Alpha Pro Android Smartphone 4",
    "image": "/images/phone.jpg",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "Alpha",
    "category": "Electronics",
    "price": 1101.19,
    "countInStock": 45,
    "rating": 3.5,
    "numReviews": 78
  },
  {
    "name": "iPhone XR Classic 6",
    "image": "/images/apple_phone_2.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1218.92,
    "countInStock": 19,
    "rating": 4.6,
    "numReviews": 117
  },
  {
    "name": "Premium Men's Leather Belt 14",
    "image": "/images/jacket.jpg",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 47.22,
    "countInStock": 48,
    "rating": 4.8,
    "numReviews": 10,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "iPhone XR Classic 13",
    "image": "/images/apple_phone_1.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1572.16,
    "countInStock": 18,
    "rating": 4.3,
    "numReviews": 55
  },
  {
    "name": "Premium Men's Oxford Shirt 10",
    "image": "/images/mens_fashion.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 88.94,
    "countInStock": 8,
    "rating": 3.5,
    "numReviews": 20,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Gourmet Granola Cluster 14",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 4.12,
    "countInStock": 49,
    "rating": 3.9,
    "numReviews": 44
  },
  {
    "name": "Pro Foam Roller 4",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 215.63,
    "countInStock": 35,
    "rating": 3,
    "numReviews": 82
  },
  {
    "name": "iPhone 14 Plus 8",
    "image": "/images/apple_phone.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 642.16,
    "countInStock": 2,
    "rating": 4.5,
    "numReviews": 61
  },
  {
    "name": "Pro Yoga Mat 3",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 500.96,
    "countInStock": 33,
    "rating": 3.7,
    "numReviews": 64
  },
  {
    "name": "Xenon Pro Android Smartphone 8",
    "image": "/images/android_phone_3.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "Xenon",
    "category": "Electronics",
    "price": 389.42,
    "countInStock": 15,
    "rating": 4.4,
    "numReviews": 47
  },
  {
    "name": "Elegant Women's Maxi Skirt 19",
    "image": "/images/model2.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 155.32,
    "countInStock": 49,
    "rating": 3.2,
    "numReviews": 65,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "NovaTech Pro Android Smartphone 10",
    "image": "/images/android_phone.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "NovaTech",
    "category": "Electronics",
    "price": 852.46,
    "countInStock": 50,
    "rating": 3.5,
    "numReviews": 39
  },
  {
    "name": "Gourmet Fruit & Nut Mix 10",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 38.23,
    "countInStock": 9,
    "rating": 3.1,
    "numReviews": 45
  },
  {
    "name": "Amazon Echo Dot 3rd Generation",
    "image": "/images/alexa.jpg",
    "description": "Meet Echo Dot - Our most popular voice-controlled speaker, now with a fabric design and improved speaker for richer and louder sound.",
    "brand": "Amazon",
    "category": "Electronics",
    "price": 29.99,
    "countInStock": 0,
    "rating": 4,
    "numReviews": 12
  },
  {
    "name": "Pro Treadmill 15",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 267.31,
    "countInStock": 39,
    "rating": 3.1,
    "numReviews": 26
  },
  {
    "name": "Elegant Women's Handbag 14",
    "image": "/images/womens_fashion.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 230.69,
    "countInStock": 36,
    "rating": 3.5,
    "numReviews": 11,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Pro Resistance Bands 2",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 64.12,
    "countInStock": 31,
    "rating": 4.4,
    "numReviews": 78
  },
  {
    "name": "Logitech G-Series Gaming Mouse",
    "image": "/images/mouse.jpg",
    "description": "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    "brand": "Logitech",
    "category": "Electronics",
    "price": 49.99,
    "countInStock": 7,
    "rating": 3.5,
    "numReviews": 10
  },
  {
    "name": "Elegant Women's Summer Romper 6",
    "image": "/images/model3.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 215.54,
    "countInStock": 14,
    "rating": 3.4,
    "numReviews": 12,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Pro Weight Bench 14",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 584.23,
    "countInStock": 28,
    "rating": 4.3,
    "numReviews": 64
  },
  {
    "name": "Premium Men's Trench Coat 18",
    "image": "/images/mens_fashion_3.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 73.67,
    "countInStock": 19,
    "rating": 4.7,
    "numReviews": 54,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Gourmet Dark Chocolate 3",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 10.24,
    "countInStock": 9,
    "rating": 4.8,
    "numReviews": 67
  },
  {
    "name": "Pro Treadmill 6",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 156.27,
    "countInStock": 10,
    "rating": 4.9,
    "numReviews": 51
  },
  {
    "name": "iPhone 14 Plus 1",
    "image": "/images/apple_phone_1.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1362.52,
    "countInStock": 18,
    "rating": 4.1,
    "numReviews": 165
  },
  {
    "name": "Premium Men's V-Neck Sweater 16",
    "image": "/images/mens_fashion_1.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 97.82,
    "countInStock": 3,
    "rating": 4.6,
    "numReviews": 12,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "iPhone 11 Pro 256GB Memory",
    "image": "/images/phone.jpg",
    "description": "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    "brand": "Apple",
    "category": "Electronics",
    "price": 599.99,
    "countInStock": 7,
    "rating": 4,
    "numReviews": 8
  },
  {
    "name": "Elegant Women's Wool Coat 17",
    "image": "/images/womens_fashion_3.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 64.59,
    "countInStock": 42,
    "rating": 3.8,
    "numReviews": 67,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Fresh Farm Eggs (12 pack)",
    "image": "/images/eggs.jpg",
    "description": "Farm fresh brown eggs from cage-free chickens. High in protein and perfect for breakfast.",
    "brand": "FarmSide",
    "category": "Grocery",
    "price": 3.5,
    "countInStock": 20,
    "rating": 4.5,
    "numReviews": 22
  },
  {
    "name": "Elegant Women's Silk Blouse 20",
    "image": "/images/model3.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 70.5,
    "countInStock": 11,
    "rating": 3,
    "numReviews": 37,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Elegant Women's High Heels 3",
    "image": "/images/womens_fashion_3.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 181.35,
    "countInStock": 2,
    "rating": 3.6,
    "numReviews": 14,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "iPhone 15 Pro 4",
    "image": "/images/apple_phone.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 979.57,
    "countInStock": 33,
    "rating": 4.4,
    "numReviews": 114
  },
  {
    "name": "Extra Virgin Olive Oil",
    "image": "/images/olive_oil.jpg",
    "description": "Premium cold-pressed extra virgin olive oil. Ideal for salads, dressings, and gourmet cooking.",
    "brand": "Ophelia",
    "category": "Grocery",
    "price": 18.99,
    "countInStock": 15,
    "rating": 4.9,
    "numReviews": 18
  },
  {
    "name": "Gourmet Roasted Almonds 15",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 33.45,
    "countInStock": 18,
    "rating": 3.3,
    "numReviews": 82
  },
  {
    "name": "Gourmet Quinoa Crackers 2",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 13.16,
    "countInStock": 24,
    "rating": 4.8,
    "numReviews": 77
  },
  {
    "name": "Elegant Women's Wool Coat 7",
    "image": "/images/womens_fashion.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 267.01,
    "countInStock": 48,
    "rating": 4,
    "numReviews": 44,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Elegant Women's Pleated Skirt 1",
    "image": "/images/womens_fashion_1.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 262.81,
    "countInStock": 8,
    "rating": 3.6,
    "numReviews": 41,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Organic Whole Grain Pasta",
    "image": "/images/pasta.jpg",
    "description": "Healthy and delicious organic whole grain pasta. Perfect for a nutritious meal with high fiber content.",
    "brand": "Fields & Harvest",
    "category": "Grocery",
    "price": 4.99,
    "countInStock": 50,
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Elegant Women's Cashmere Sweater 2",
    "image": "/images/womens_fashion_2.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 212.54,
    "countInStock": 24,
    "rating": 4.7,
    "numReviews": 37,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "iPhone 12 Pro 5",
    "image": "/images/apple_phone_1.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 902.15,
    "countInStock": 46,
    "rating": 3.2,
    "numReviews": 188
  },
  {
    "name": "Premium Men's Casual Blazer 5",
    "image": "/images/mens_fashion.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 155.03,
    "countInStock": 20,
    "rating": 3.1,
    "numReviews": 35,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Pro Elliptical 7",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 428.04,
    "countInStock": 6,
    "rating": 4.8,
    "numReviews": 77
  },
  {
    "name": "Elegant Women's Handbag 4",
    "image": "/images/model1.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 226.19,
    "countInStock": 45,
    "rating": 4.5,
    "numReviews": 62,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Premium Men's V-Neck Sweater 6",
    "image": "/images/mens_fashion_1.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 44.69,
    "countInStock": 8,
    "rating": 3.9,
    "numReviews": 36,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Elegant Women's Evening Dress 5",
    "image": "/images/model2.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 239.88,
    "countInStock": 24,
    "rating": 4.2,
    "numReviews": 58,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Gourmet Dark Chocolate 12",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 16.34,
    "countInStock": 8,
    "rating": 4.8,
    "numReviews": 109
  },
  {
    "name": "Premium Men's Oxford Shirt 20",
    "image": "/images/mens_fashion.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 31.25,
    "countInStock": 26,
    "rating": 3.9,
    "numReviews": 5,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "GalaxyEdge Pro Android Smartphone 12",
    "image": "/images/android_phone_2.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "GalaxyEdge",
    "category": "Electronics",
    "price": 911.22,
    "countInStock": 1,
    "rating": 3.1,
    "numReviews": 40
  },
  {
    "name": "Gourmet Granola Cluster 5",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 36.06,
    "countInStock": 20,
    "rating": 3.2,
    "numReviews": 53
  },
  {
    "name": "Floral Summer Maxi Dress",
    "image": "/images/model1.jpg",
    "description": "Beautifully crafted floral summer dress with a flowy silhouette. Perfect for garden parties or beach vacations. Made from breathable organic cotton.",
    "brand": "SweetFashion",
    "category": "Fashion",
    "price": 79.99,
    "countInStock": 15,
    "rating": 4.9,
    "numReviews": 32,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Premium Men's Leather Belt 4",
    "image": "/images/jacket.jpg",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 142.31,
    "countInStock": 19,
    "rating": 4.8,
    "numReviews": 27,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Classic Black Leather Jacket",
    "image": "/images/jacket.jpg",
    "description": "Timeless black leather jacket made from premium grade-A leather. Durable, stylish, and perfect for any occasion.",
    "brand": "Vogue",
    "category": "Fashion",
    "price": 129.99,
    "countInStock": 5,
    "rating": 4.7,
    "numReviews": 9
  },
  {
    "name": "Elegant Women's Evening Dress 15",
    "image": "/images/womens_fashion_1.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 268.17,
    "countInStock": 20,
    "rating": 4.8,
    "numReviews": 34,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "GalaxyEdge Pro Android Smartphone 7",
    "image": "/images/android_phone_2.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "GalaxyEdge",
    "category": "Electronics",
    "price": 364.61,
    "countInStock": 42,
    "rating": 4.1,
    "numReviews": 40
  },
  {
    "name": "Gourmet Fruit & Nut Mix 1",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 25.23,
    "countInStock": 36,
    "rating": 4,
    "numReviews": 114
  },
  {
    "name": "Premium Men's Polo Shirt 13",
    "image": "/images/mens_fashion_3.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 51.01,
    "countInStock": 47,
    "rating": 4.9,
    "numReviews": 34,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Premium Men's Cargo Shorts 7",
    "image": "/images/mens_fashion_2.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 66.87,
    "countInStock": 5,
    "rating": 3.1,
    "numReviews": 44,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "PixelPro Pro Android Smartphone 6",
    "image": "/images/android_phone_1.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "PixelPro",
    "category": "Electronics",
    "price": 717.73,
    "countInStock": 6,
    "rating": 4.7,
    "numReviews": 30
  },
  {
    "name": "Premium Men's Chino Pants 11",
    "image": "/images/mens_fashion_1.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 38.59,
    "countInStock": 35,
    "rating": 3.9,
    "numReviews": 34,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Chic Blue Cocktail Dress",
    "image": "/images/model3.jpg",
    "description": "A modern take on the classic cocktail dress. This cobalt blue piece features an asymmetrical neckline and a tailored fit. Versatile for both office and evening wear.",
    "brand": "SweetFashion",
    "category": "Fashion",
    "price": 115,
    "countInStock": 10,
    "rating": 4.8,
    "numReviews": 24,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Premium Men's Chino Pants 1",
    "image": "/images/mens_fashion_1.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 128.34,
    "countInStock": 1,
    "rating": 4,
    "numReviews": 31,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Elegant Women's Maxi Skirt 9",
    "image": "/images/womens_fashion_2.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 216.52,
    "countInStock": 24,
    "rating": 3.5,
    "numReviews": 48,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "NovaTech Pro Android Smartphone 5",
    "image": "/images/android_phone.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "NovaTech",
    "category": "Electronics",
    "price": 1057.05,
    "countInStock": 11,
    "rating": 4.5,
    "numReviews": 32
  },
  {
    "name": "Elegant Women's Silk Blouse 10",
    "image": "/images/womens_fashion_3.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 114,
    "countInStock": 31,
    "rating": 4.2,
    "numReviews": 40,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "Pro Yoga Mat 12",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 343.38,
    "countInStock": 42,
    "rating": 3.8,
    "numReviews": 24
  },
  {
    "name": "iPhone 12 Pro 12",
    "image": "/images/apple_phone.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1599.34,
    "countInStock": 6,
    "rating": 3.1,
    "numReviews": 142
  },
  {
    "name": "NovaTech Pro Android Smartphone 15",
    "image": "/images/android_phone.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "NovaTech",
    "category": "Electronics",
    "price": 1008.71,
    "countInStock": 3,
    "rating": 4.1,
    "numReviews": 79
  },
  {
    "name": "iPhone SE Special Edition 3",
    "image": "/images/airpods.jpg",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 611.73,
    "countInStock": 3,
    "rating": 3.6,
    "numReviews": 76
  },
  {
    "name": "Premium Men's Bomber Jacket 19",
    "image": "/images/jacket.jpg",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 186.34,
    "countInStock": 20,
    "rating": 4.9,
    "numReviews": 15,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Premium Men's Polo Shirt 3",
    "image": "/images/mens_fashion_3.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 182.8,
    "countInStock": 1,
    "rating": 3.7,
    "numReviews": 36,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Elegant Women's Cashmere Sweater 12",
    "image": "/images/model2.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 52.5,
    "countInStock": 38,
    "rating": 4.5,
    "numReviews": 66,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "GalaxyEdge Pro Android Smartphone 2",
    "image": "/images/android_phone_2.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "GalaxyEdge",
    "category": "Electronics",
    "price": 792.31,
    "countInStock": 10,
    "rating": 4.3,
    "numReviews": 105
  },
  {
    "name": "Elegant Women's Pleated Skirt 11",
    "image": "/images/model1.jpg",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 150.92,
    "countInStock": 18,
    "rating": 4.4,
    "numReviews": 16,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  },
  {
    "name": "iPhone 13 Mini 2",
    "image": "/images/apple_phone_2.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1580.67,
    "countInStock": 26,
    "rating": 3,
    "numReviews": 178
  },
  {
    "name": "Pro Kettlebell Set 10",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 541.43,
    "countInStock": 44,
    "rating": 3.9,
    "numReviews": 36
  },
  {
    "name": "Gourmet Quinoa Crackers 11",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 32.48,
    "countInStock": 24,
    "rating": 4.5,
    "numReviews": 50
  },
  {
    "name": "Cannon EOS 80D DSLR Camera",
    "image": "/images/camera.jpg",
    "description": "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    "brand": "Cannon",
    "category": "Electronics",
    "price": 929.99,
    "countInStock": 5,
    "rating": 3,
    "numReviews": 12
  },
  {
    "name": "Premium Men's Casual Blazer 15",
    "image": "/images/mens_fashion.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 70.91,
    "countInStock": 26,
    "rating": 4.1,
    "numReviews": 18,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Xenon Pro Android Smartphone 3",
    "image": "/images/android_phone_3.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "Xenon",
    "category": "Electronics",
    "price": 1091.11,
    "countInStock": 24,
    "rating": 3.3,
    "numReviews": 45
  },
  {
    "name": "Pro Foam Roller 13",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 79.55,
    "countInStock": 49,
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Alpha Pro Android Smartphone 9",
    "image": "/images/phone.jpg",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "Alpha",
    "category": "Electronics",
    "price": 817.65,
    "countInStock": 20,
    "rating": 4.6,
    "numReviews": 86
  },
  {
    "name": "iPhone 15 Pro Max 7",
    "image": "/images/airpods.jpg",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 751.03,
    "countInStock": 4,
    "rating": 4.8,
    "numReviews": 178
  },
  {
    "name": "Gourmet Veggie Chips 4",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 28.56,
    "countInStock": 49,
    "rating": 3.1,
    "numReviews": 126
  },
  {
    "name": "Pro Weight Bench 5",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 450.85,
    "countInStock": 36,
    "rating": 4,
    "numReviews": 71
  },
  {
    "name": "Pro Adjustable Dumbbell 9",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 87.79,
    "countInStock": 15,
    "rating": 4.4,
    "numReviews": 58
  },
  {
    "name": "iPhone 14 Plus 15",
    "image": "/images/airpods.jpg",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 622.08,
    "countInStock": 43,
    "rating": 3.3,
    "numReviews": 54
  },
  {
    "name": "Gourmet Protein Bar 9",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 39.27,
    "countInStock": 12,
    "rating": 4.1,
    "numReviews": 124
  },
  {
    "name": "iPhone SE Special Edition 10",
    "image": "/images/apple_phone_2.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 774.35,
    "countInStock": 17,
    "rating": 3.8,
    "numReviews": 146
  },
  {
    "name": "iPhone 15 Pro Max 14",
    "image": "/images/apple_phone_2.png",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1202.27,
    "countInStock": 26,
    "rating": 4.7,
    "numReviews": 178
  },
  {
    "name": "Gourmet Peanut Butter 8",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 17.47,
    "countInStock": 11,
    "rating": 3.9,
    "numReviews": 109
  },
  {
    "name": "Gourmet Organic Honey 7",
    "image": "/images/packaged_food.png",
    "description": "Nutritious and delicious snacks for a healthy lifestyle. Made with organic, responsibly sourced ingredients.",
    "brand": "GreenBite",
    "category": "Grocery",
    "price": 17.05,
    "countInStock": 14,
    "rating": 4.2,
    "numReviews": 84
  },
  {
    "name": "Pro Resistance Bands 11",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 424.35,
    "countInStock": 9,
    "rating": 4.9,
    "numReviews": 81
  },
  {
    "name": "Premium Men's Trench Coat 8",
    "image": "/images/mens_fashion_3.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 68.22,
    "countInStock": 48,
    "rating": 3.9,
    "numReviews": 12,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Airpods Wireless Bluetooth Headphones",
    "image": "/images/airpods.jpg",
    "description": "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    "brand": "Apple",
    "category": "Electronics",
    "price": 89.99,
    "countInStock": 10,
    "rating": 4.5,
    "numReviews": 12
  },
  {
    "name": "Pro Kettlebell Set 1",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 320.86,
    "countInStock": 49,
    "rating": 3.6,
    "numReviews": 44
  },
  {
    "name": "Premium Men's Denim Jacket 2",
    "image": "/images/mens_fashion_2.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 59.25,
    "countInStock": 27,
    "rating": 4.4,
    "numReviews": 17,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Premium Men's Denim Jacket 12",
    "image": "/images/mens_fashion_2.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 40.17,
    "countInStock": 34,
    "rating": 3.5,
    "numReviews": 6,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "Alpha Pro Android Smartphone 14",
    "image": "/images/phone.jpg",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "Alpha",
    "category": "Electronics",
    "price": 500.94,
    "countInStock": 16,
    "rating": 3.2,
    "numReviews": 81
  },
  {
    "name": "Premium Men's Cargo Shorts 17",
    "image": "/images/mens_fashion_2.png",
    "description": "A stylish and comfortable piece for the modern man. Made with high-quality fabrics and attention to detail.",
    "brand": "UrbanVogue",
    "category": "Fashion",
    "price": 136.09,
    "countInStock": 12,
    "rating": 3,
    "numReviews": 28,
    "sizes": [
      "M",
      "L",
      "XL"
    ]
  },
  {
    "name": "iPhone 15 Pro 11",
    "image": "/images/airpods.jpg",
    "description": "The world's most powerful personal device. Designed to be durable and beautiful, with industry-leading privacy features.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 1115.39,
    "countInStock": 5,
    "rating": 4.6,
    "numReviews": 165
  },
  {
    "name": "Pro Pull-up Bar 8",
    "image": "/images/gym_equipment.png",
    "description": "Achieve your fitness goals with professional-grade equipment. Built for durability and maximum efficiency.",
    "brand": "IronCore",
    "category": "Gym",
    "price": 246.43,
    "countInStock": 15,
    "rating": 3.4,
    "numReviews": 33
  },
  {
    "name": "PixelPro Pro Android Smartphone 1",
    "image": "/images/android_phone_1.png",
    "description": "A powerhouse of technology. Features a stunning display, lightning-fast performance, and an incredible camera system.",
    "brand": "PixelPro",
    "category": "Electronics",
    "price": 1192.26,
    "countInStock": 46,
    "rating": 4.8,
    "numReviews": 113
  },
  {
    "name": "Elegant Women's Summer Romper 16",
    "image": "/images/womens_fashion_2.png",
    "description": "Exquisite design meets everyday comfort. This piece is a must-have for any fashion-forward wardrobe.",
    "brand": "BelleEpoque",
    "category": "Fashion",
    "price": 218.42,
    "countInStock": 31,
    "rating": 4.2,
    "numReviews": 58,
    "sizes": [
      "S",
      "M",
      "L"
    ]
  }
];

export default products;