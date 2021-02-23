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
router.post("/api/product", authCheck, adminCheck, create);
router.post("/api/products", list);
router.get("/api/products/total", productsCount);
router.post("/api/products", list);

router.get("/api/product/:slug", read);
router.get("/api/products/:count", listAll); // products/100
router.delete("/api/product/:slug", authCheck, adminCheck, remove);
router.put("/api/product/:slug", authCheck, adminCheck, update);

//related
router.get("/api/product/related/:productId", listRelated);

// search
router.post("/api/search/filters", searchFilters);

module.exports = router;
