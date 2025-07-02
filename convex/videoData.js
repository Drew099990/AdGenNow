import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createNewVideo = mutation({
  args: {
    topic: v.string(),
    scriptVariant: v.any(),
    user: v.optional(v.string()), // Add user reference
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

export const getData = query({
  args: { user: v.optional(v.string("users")) },
  handler: async (ctx, args) => {
    if (!args.user) return [];
    const videos = await ctx.db
      .query("videoData")
      .filter(q => q.eq(q.field("user"), args.user))
      .collect();
    if (videos.length === 0) return [];
    const last = videos[videos.length - 1];
    return [{ topic: last.topic, scriptVariant: last.scriptVariant }];
  },
});

export const uploadImage = mutation({
  args: {
    image: v.string(), // base64 string
    user: v.optional(v.string()),
    name: v.optional(v.string()),
    type: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Store the image as a new videoData entry with asserts field
    const result = await ctx.db.insert("videoData", {
      asserts: args.image, // Store base64 image in asserts field
      user: args.user,
      topic: args.name ,
      scriptVariant: null,
      script: null,
      avater: null,
      voice: null,
      voiceUrl: null,
      avaterUrl: null,
      videoUrl: null,
    });
    return result;
  },
});