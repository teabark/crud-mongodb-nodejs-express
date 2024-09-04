 import express from "express";
 import {Router} from "express";
 import {getProduct, getProducts, createProduct, updateProduct, deleteProduct} from "../controllers/product.controller.js";

 const router = Router();
  

 router.get("/", getProducts);
 router.get("/:id", getProduct);
 router.post("/", createProduct);
 router.put("/:id", updateProduct);
 router.delete("/:id", deleteProduct)

 export default router;