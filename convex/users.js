import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const newUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user exists
    const userData = await ctx.db.query("users").filter(q => q.eq(q.field("email"), args.email)).collect();

    // If user does not exist
    if (!userData || userData.length === 0) {
      const data = {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credits: 30,
      };

      try {
        // Insert new user into the database
        const result = await ctx.db.insert("users", data);
        console.log(result);
        return {
          ...data,
          _id: result,
        };
      } catch (error) {
        console.error("Error inserting user:", error);
        throw new Error("Failed to create new user");
      }
    }

    // Return existing user data
    return userData[0];
  },
});