import { productServiceCreateProduct,  productServiceFindProductById,  productServiceUpdateProduct, productServicecreateMultipleProduct, productServicedeleteProduct, productServicegetAllProducts, } from "../services/product.service.js"


export const createProduct=async(req,res)=>{

    try {
        const product=await productServiceCreateProduct(req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message});
    }

}

export const updateProduct=async(req,res)=>{

    const productId=req.params.id;
    try {
        const product=await productServiceUpdateProduct(productId,req.body);
        return res.status(201).send(product);
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

    
}

export const findProductById=async(req,res)=>{

    const productId=req.params.id;

   
    try {
        const product=await productServiceFindProductById(productId);
        return res.status(201).send(product);
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

    
}

export const getAllProducts=async(req,res)=>{

    // const productId=req.params.id;
   
    
    try {
        const products=await productServicegetAllProducts(req.query);
        
       
        return res.status(201).send(products);
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

    
}
export const createMultipleProduct=async(req,res)=>{

    // const productId=req.paramas.id;
    try {
        const products=await productServicecreateMultipleProduct(req.body);
        return res.status(201).send({message:"Products Created Sucessfully"},success);
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

    
}

export const deleteProduct=async(req,res)=>{

    const productId=req.paramas.id;
    try {
        await productServicedeleteProduct(productId);
        return res.status(201).send({message:"Product deleted Sucessfully"},success);
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

    
}

