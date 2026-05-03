import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i',
    },
  } : {};

  const category = req.query.category ? { category: req.query.category } : {};
  
  const rating = req.query.rating ? { 
    rating: { $gte: Number(req.query.rating) } 
  } : {};

  const price = (req.query.priceMin || req.query.priceMax) ? {
    price: {
      ...(req.query.priceMin && { $gte: Number(req.query.priceMin) }),
      ...(req.query.priceMax && { $lte: Number(req.query.priceMax) }),
    }
  } : {};

  const products = await Product.find({ ...keyword, ...category, ...rating, ...price });
  res.json(products);
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// @desc    Get AI-powered product recommendations
// @route   GET /api/products/:id/recommendations
// @access  Public
const getRecommendedProducts = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    // Simple AI-like logic: find products in the same category, excluding the current one
    const recommendations = await Product.find({
      category: product.category,
      _id: { $ne: product._id }, // Don't recommend the same product
    }).limit(4); // Limit to 4 suggestions

    res.json(recommendations);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export { getProducts, getProductById, createProduct, getRecommendedProducts };
