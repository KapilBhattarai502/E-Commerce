import { Category } from "../models/category.model"


const createProduct=async(reqData)=>{
    let topLevel=await Category.findOne({name:reqData.topLevelCategory});

    if(!topLevel){
        topLevel=new Category({
            name:reqData.topLevelCategory,
            level:1
        })
    }

    let secondLevel=await Category.find({
        name:reqData.secondLevelCategory,
        parentCategory:topLevel._id,

    })

    if(!secondLevel){
        secondLevel=new Category ({
            name:reqData.secondLevelCategory,
            parentCategory:topLevel._id,
            level:2
        })
    }

    let thirdLevel=await Category.findOne({
        name:reqData.thirdLevelCategory,
        parentCategory:secondLevel._id,
    })
    if(!thirdLevel){
        thirdLevel=new Category({
            name:reqData.thirdLevelCategory,
            parentCategory:secondLevel._id,
            level:3,
        })
    }

}