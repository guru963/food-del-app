// scripts/bulkUpload.js
import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';

// Your full food array here
export const food_list = [
     {
        
        name: "Chicken Salad",
        image: "food_4",
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
       
        name: "Lasagna Rolls",
        image: "food_5",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        
        name: "Peri Peri Rolls",
        image: "food_6",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
       
        name: "Chicken Rolls",
        image: "food_7",
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
       
        name: "Veg Rolls",
        image: "food_8",
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
       
        name: "Ripple Ice Cream",
        image: "food_9",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
       
        name: "Fruit Ice Cream",
        image: "food_10",
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
       
        name: "Jar Ice Cream",
        image: "food_11",
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        
        name: "Vanilla Ice Cream",
        image: "food_12",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
       
        name: "Chicken Sandwich",
        image: "food_13",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        
        name: "Vegan Sandwich",
        image: "food_14",
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        
        name: "Grilled Sandwich",
        image: "food_15",
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
       
        name: "Bread Sandwich",
        image: "food_16",
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        
        name: "Cup Cake",
        image: "food_17",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        
        name: "Vegan Cake",
        image: "food_18",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        
        name: "Butterscotch Cake",
        image: "food_19",
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
       
        name: "Sliced Cake",
        image: "food_20",
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
       
        name: "Garlic Mushroom ",
        image: "food_21",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        
        name: "Fried Cauliflower",
        image: "food_22",
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
       
        name: "Mix Veg Pulao",
        image: "food_23",
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        
        name: "Rice Zucchini",
        image: "food_24",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    },
    {
        
        name: "Cheese Pasta",
        image: "food_25",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    },
    {
        
        name: "Tomato Pasta",
        image: "food_26",
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        
        name: "Creamy Pasta",
        image: "food_27",
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        
        name: "Chicken Pasta",
        image: "food_28",
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
       
        name: "Buttter Noodles",
        image: "food_29",
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        
        name: "Veg Noodles",
        image: "food_30",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
       
        name: "Somen Noodles",
        image: "food_31",
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
       
        name: "Cooked Noodles",
        image: "food_32",
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }
]

const uploadFood = async (food) => {
  try {
    const form = new FormData();
    form.append("name", food.name);
    form.append("price", food.price);
    form.append("description", food.description);
    form.append("category", food.category);
    form.append("image", fs.createReadStream(`./assets/frontend_assets/${food.image}.png`));

    const response = await axios.post("http://localhost:4000/api/food/add", form, {
      headers: form.getHeaders()
    });

    console.log(`✅ Uploaded: ${food.name}`);
  } catch (error) {
    console.error(`❌ Error uploading ${food.name}:`, error.message);
  }
};

const run = async () => {
  for (let food of food_list) {
    await uploadFood(food);
  }
};

run();
