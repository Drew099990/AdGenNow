import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    phone: v.number(),
    credits: v.number(),
    paymentID: v.optional(v.string()),



})})