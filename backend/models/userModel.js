import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String, default: "" },
        lastName: { type: String, default: "" },
        email: { type: String, default: "" },
        mobileNumber: { type: String, default: '' },
        portfolio: { type: String, default: "" },
        address: { type: String, default: "" },
        carrierObjective: { type: String, default: "" },

        // this is nested proper that is it use the multiple education input so we use array 
        education: { type: Array, default: [] },
        skills: { type: Array, default: [] },
        experience: { type: Array, default: [] },
        projects: { type: Array, default: [] },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);

// module.exports = userModel;