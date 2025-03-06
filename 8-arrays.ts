import { z } from "zod";
import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const schema = z.object({
	name: z.string().describe("The name of the user"),
	age: z.number().describe("The age of the user"),
	email: z.string().email().describe("The email of the user"),
});

async function createFakeUsers(prompt: string) {
	const { object } = await generateObject({
		schema,
		prompt,
		output: "array",
		system: "You are generating fake user data.",
		model: anthropic("claude-3-7-sonnet-20250219"),
	});

	return object;
}

createFakeUsers("Create 10 fake users").then((users) => {
	console.log(users);
});
