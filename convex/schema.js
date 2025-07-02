import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    credits: v.number(),
    paymentID: v.optional(v.string()),



}),videoData:defineTable({
    topic:v.string(),
    scriptVariant:v.any(),
    script:v.optional(v.any()),
    asserts:v.optional(v.any()),
    avater:v.optional(v.any()),
    voice:v.optional(v.any()),
    voiceUrl:v.optional(v.any()),
    avaterUrl:v.optional(v.any()),
    videoUrl:v.optional(v.any()),
    user: v.optional(v.string()) // Add user reference
})})
