import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Generate_script_prompt } from '../../../services/prompt';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,

});
async function Post(req) {
  const {topic} = req.json();
  const PROMPT = Generate_script_prompt.replace("{topic}",topic)  
  const completion = await openai.chat.completions.create({
    model: "google/gemma-3-4b-it:free",
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": PROMPT
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
            }
          }
        ]
      }
    ],
    
  });

  console.log(completion.choices[0].message);
  NextResponse.json(completion.choices[0].message?.content)
}


