const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  listAll,
  remove,
  read,
  update,
  list,
  productsCount,
  searchFilters,
  listRelated,
} = require("../controllers/product");

// routes
router.post("/product", authCheck, adminCheck, create);
router.post("/products", list);
router.get("/products/total", productsCount);
router.post("/products", list);

router.get("/product/:slug", read);
router.get("/products/:count", listAll); // products/100
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.put("/product/:slug", authCheck, adminCheck, update);

//related
router.get("/api/product/related/:productId", listRelated);

// search
router.post("/api/search/filters", searchFilters);

module.exports = router;
