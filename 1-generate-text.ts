import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const model = anthropic("claude-3-5-haiku-latest");

export async function answerMyQuestion(prompt: string) {
	const { text } = await generateText({
		model,
		prompt,
	});

	return text;
}

answerMyQuestion("What is the capital of France?").then(console.log);
