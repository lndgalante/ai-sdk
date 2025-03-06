import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

async function classifySentiment(prompt: string) {
	const result = await generateObject({
		model: anthropic("claude-3-7-sonnet-20250219"),
		output: "enum",
		enum: ["positive", "negative", "neutral"],
		prompt,
		system:
			"You are a helpful assistant that classifies sentiment. Classify the sentiment of the following text by either positive, negative, or neutral.",
	});

	console.log(result.object);
}

classifySentiment("This is terrible!");
