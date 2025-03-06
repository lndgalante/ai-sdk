import { z } from "zod";
import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const schema = z.object({
	recipe: z.object({
		name: z.string().describe("The name of the recipe"),
		ingredients: z.array(
			z.object({
				name: z.string().describe("The name of the ingredient"),
				quantity: z.string().describe("The quantity of the ingredient"),
			}),
		),
		steps: z.array(z.string().describe("The steps to make the recipe")),
	}),
});

async function createRecipe(prompt: string) {
	const { object } = await generateObject({
		model: anthropic("claude-3-5-haiku-latest"),
		schema,
		prompt,
		schemaName: "recipe",
		system: "You are a helpful assistant that creates recipes.",
	});

	return object;
}

createRecipe("I want to make a recipe for a chicken curry.").then((recipe) => {
	console.log(JSON.stringify(recipe, null, 2));
});
