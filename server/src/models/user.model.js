import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    phone: {
      type: String,
      trim: true,
    },

    college: {
      type: String,
      trim: true,
    },

    degree: {
      type: String,
      trim: true,
    },

    graduationYear: {
      type: Number,
    },

    skills: {
      type: [String],
      default: [],
    },

    preferredRoles: {
      type: [String],
      default: [],
    },

    preferredLocations: {
      type: [String],
      default: [],
    },

    github: {
      type: String,
      trim: true,
    },

    linkedin: {
      type: String,
      trim: true,
    },

    portfolio: {
      type: String,
      trim: true,
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    profileCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("User", userSchema);