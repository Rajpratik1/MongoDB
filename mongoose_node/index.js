const mongoose = require("mongoose");

// MongoDB URI for connection
const uri = 'mongodb+srv://rajpratik512002:Pratik512002@cluster0.jngza.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0';

// Connecting to MongoDB
mongoose.connect(uri)
 

// Creating a schema for Product
const productSchema = new mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean,  // Corrected field name
});

// Data to be inserted
const data1 = { 
    name: 'Designer Handbag2',
    company: '64c23350e32f4a51b19b9231',
    price: 2466,
    colors: ['#333333', '#cccccc', '#00ff00'],
    image: '/images/product-laptop.png',
    category: '64c2342de32f4a51b19b924e',
    isFeatured: true,  // Corrected field name
};



// Creating a model for Product
const Product = mongoose.model("Product", productSchema);

const main = async () => {
    try {
        // Inserting the data
        // await Product.insertMany([data1]);
        // console.log("Data inserted successfully!");
        
        // Update data 

        // await Product.findOneAndUpdate({name:"Designer Handbag2", price:2466}, {$set:{price:2499}});

        // Delete the data

        await Product.deleteOne({price:{$eq: 2499}});
        
        const data = await Product.find({ price:{$eq:2499}});
        console.log("Found data:", data);

    } catch (error) {
        console.log("Error:", error);
    } finally {
        // Closing the connection
        mongoose.connection.close();
    }
};

// Running the main function
main();
