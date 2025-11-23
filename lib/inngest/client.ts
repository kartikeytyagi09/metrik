import { Inngest} from "inngest";

export const inngest = new Inngest({
    id: 'MetriK',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }}
})

//  npx inngest-cli@latest dev command to run inngest