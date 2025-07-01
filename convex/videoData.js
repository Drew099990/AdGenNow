import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createNewVideo = mutation({
  args: {
    topic: v.string(),
    scriptVariant: v.any(),
    user: v.optional(v.id("users")), // Add user reference
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("videoData", {
      topic: args.topic,
      scriptVariant: args.scriptVariant,
      user: args.user, // Save user reference
    });

    return result; // Optionally return the result or a confirmation message
  },
});