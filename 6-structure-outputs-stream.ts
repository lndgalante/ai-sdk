import { z } from "zod";
import { streamObject } from "ai";
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
	const result = await streamObject({
		model: anthropic("claude-3-7-sonnet-20250219"),
		schema,
		prompt,
		schemaName: "recipe",
		system: "You are a helpful assistant that creates recipes.",
	});

	for await (const object of result.partialObjectStream) {
		console.log("\n ~ forawait ~ object:", object);
		console.clear();
		console.dir(object, { depth: null });
	}

	const finalObject = await result.object;

	return finalObject;
}

console.log("Creating recipe...");
createRecipe("I want to make a recipe for a chicken curry.")
	.then((recipe) => {
		console.log(JSON.stringify(recipe, null, 2));
	})
	.catch((error) => {
		console.error(error);
	});
