const User = require("./../models/user");
const Record = require("./../models/product");
const Cart = require("./../models/cart");

exports.userCart = async (req, res) => {
  const { cart } = req.body;
  console.log("cart[0].count: ", cart[0].count);
  console.log("cart[0]:  ---->", cart[0]);

  //create array of products
  let products = [];

  const user = await User.findOne({ email: req.user.email }).exec();

  //check if cart with logged in user id already exists
let cartExistByThisUser = await Cart.findOne({ orderedBy: user._id }).exec();

  if (cartExistByThisUser) {
    cartExistByThisUser.remove();
    console.log("removed old cart");
  }
  //create cart object
  for (let i = 0; i < cart.length; i++) {
    let object = {};
    object.product = cart[i]._id;
    object.count = cart[i].count;
    //get price for creating total - get from db rather than front end for security
    let {price} = await Record.findById(cart[i]._id)
      .select("price")
      .exec();
    object.price = price;
    // push object to cart array
    products.push(object);
  }
  console.log("REQ.BODY ____>", req.body);
  console.log("products", products);

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }

  console.log("cart total : ", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    orderedBy: user._id,
  }).save();

  console.log("newCart:----> ", newCart);
  res.json({ ok: true });
};

exports.getUserCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();
  console.log("USER: ------->", user);
  console.log('user._id', user._id)
  let cart = await Cart.findOne({ orderedBy: user._id })
   .populate("products.product", "_id title price")
    .exec();
  console.log("(controllers/getUserCart--CART------->", cart);
  const { products, cartTotal } = cart;
  console.log("products", products);
  res.json({ products, cartTotal }); //req.data.products
};

exports.emptyUserCart = async (req, res) => {
  console.log("empty cart");
  const user = await User.findOne({ email: req.user.email }).exec();

  const cart = await Cart.findOneAndRemove({ orderedBy: user._id }).exec();
  res.json(cart);
  console.log("cart", cart);
};

exports.saveAddress = async (req, res) => {
  const userAddress = await User.findOneAndUpdate(
    { email: req.user.email },
    { address: req.body.address }
  ).exec();
console.log("user address in controllers/user : ", userAddress.address)
  res.json({ ok: true });
};
