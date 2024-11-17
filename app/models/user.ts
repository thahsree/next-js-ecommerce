import { Document, model, models, Schema } from "mongoose";


//interfaces 

interface Address {
    street: string;
    city: string;
    state: string;
    postal_code: Number;
    country: string

}

interface Product{
    productId:string;
    qty:Number;
    size:Number;
    createdAt:Date
}

interface Wishlist {

    products:Product[];
}

interface Cart {
    products:Product[];
}

interface user extends Document {
    email: string;
    phone: number;
    address?: Address;
    username: string;
    image: string;
    wishlist?:Wishlist;
    cartlist?:Cart;
    password?: string
}


//schemas 

const addressSchema = new Schema<Address>({
    street: {
        type: String,
        required: [true, 'street is required']
    },
    city: {
        type: String,
        required: [true, 'city required']
    },
    state: {
        type: String,
        required: [true, 'state is required']
    },
    postal_code: {
        type: Number,
        required: [true, 'postal-code is required']
    },
    country: {
        type: String,
        required: [true, 'country is required']
    }

})


//product schema for adding products into cart and wishlist , not actual product details
const productSchema = new Schema<Product>(
    {
        productId:{
            type:String,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        size:{
            type:Number,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now,
            required:true
        }
    }
    
)

const wishlistSchema = new Schema<Wishlist>(
    {
        products:{
            type:[productSchema],
            required:true
        }
    },
    {
        timestamps:true
    }
)

const CartSchema = new Schema<Cart>(
    {
        products:{
            type:[productSchema],
            required:true
        }
    },
    {
        timestamps:true
    }
)

const userSchema = new Schema<user>(
    {
        email: {
            type: String,
            unique: true,
            required: [true, "email is required"],
        },
        phone: {
            type: Number,
            required:false
        },
        username: {
            type: String,
            required: [true, 'username required']
        },
        address: {
            type: addressSchema,
            required: false,
            // validate: {
            //     validator: function (value: Address | undefined): boolean {
            //         // If address is provided, validate each required field in addressSchema
            //         if (value) {
            //             return (
            //                 !!value.street &&
            //                 !!value.city &&
            //                 !!value.state &&
            //                 !!value.postal_code &&
            //                 !!value.country
            //             );
            //         }

            //         return true; // No address provided is acceptable


            //     },
            //     message: "Complete address information is required when adding an address"
            // }

        },
        image: {
            type: String
        },
        wishlist:{
            type:wishlistSchema,
            required:false
        },
        cartlist:{
            type:CartSchema,
            required:false,
        },
        password:{
            type: String,
            required:false
        }
    },
    {
        timestamps: true
    }
)

const User = models.User || model('User', userSchema);

export default User;