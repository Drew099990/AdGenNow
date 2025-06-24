import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const newUser = mutation({
  //expected inputsfrom workspaceProvider
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user exists
    const userData = await ctx.db.query("users").filter(q => q.eq(q.field("email"), args.email)).collect();

    // If user does not exist
    if (userData.length === 0) {

      const data = {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credits: 30,
      };

      const result = await ctx.db.insert("users", {
        ...data,
      });

      return {
        ...data,
        _id: result,
      };
    }

    // Return existing user data
    return userData[0];
  },
});