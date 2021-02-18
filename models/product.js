const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const recordSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },

    artist: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },

    label: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },

    description: {
      type: String,
      // required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      // required: true,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
  //   shipping: {
  //     type: String,
  //     enum: ["Yes", "No"],
  //   },
    sleeveCondition: {
      type: String,
      enum: [ "New", "Mint", "Near Mint", "VG+", "VG", "Generic"]
    },
   mediaCondition: {
      type: String,
      enum: [ "New", "Mint", "Near Mint", "VG+", "VG", "Generic"]
    },
    
    catno: {
      type: String,
      trim: true,
     
      maxlength: 16,
      text: true,
    },

    format: {
      type: String,
      enum: [ '12"', '7"']
    },

    status: {
      type: String,
      trim: true,
      required: true,
      maxlength: 16,
      text: true,
    },
    // ratings: [
    //   {
    //     star: Number,
    //     postedBy: { type: ObjectId, ref: "User" },
    //   },
    // ],
  },
  { timestamps: true }
);



// productSchema.pre('validate',function(next){
//   if(this.title){
//     this.slug=slugify(this.title,{lower:true,strict:true})
//   }
//    next()
//   })
module.exports = mongoose.model("Record", recordSchema);