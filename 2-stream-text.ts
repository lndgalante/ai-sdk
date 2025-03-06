import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const model = anthropic("claude-3-5-haiku-latest");

export async function answerMyQuestion(prompt: string) {
	const { textStream } = await streamText({
		model,
		prompt,
	});

	for await (const text of textStream) {
		process.stdout.write(text);
	}

	return textStream;
}

answerMyQuestion("What is the color of the sun?");
