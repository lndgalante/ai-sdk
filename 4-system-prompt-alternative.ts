import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const model = anthropic("claude-3-5-haiku-latest");

export async function summarizeText(prompt: string) {
	const { textStream } = await streamText({
		model,
		messages: [
			{
				role: "system",
				content: `You are a helpful assistant that summarizes text.
    You will be given a text and you will need to summarize it in a few sentences.
    You will also be given a list of topics that you can summarize the text into.
    You will need to choose the most relevant topic and summarize the text into that topic.
    `,
			},
			{
				role: "user",
				content: prompt,
			},
		],
	});

	for await (const text of textStream) {
		process.stdout.write(text);
	}

	return textStream;
}

summarizeText(
	`La Segunda Guerra Mundialnota 2​ fue un conflicto militar global que se desarrolló entre 1939 y 1945. En ella se vieron implicadas la mayor parte de las naciones del mundo —incluidas todas las grandes potencias, así como prácticamente todas las naciones europeas— agrupadas en dos alianzas militares enfrentadas: los Aliados, por un lado, y las Potencias del Eje, por otro. Fue la mayor contienda bélica en la historia de la humanidad, con más de cien millones de militares movilizados y un estado de guerra total en que los grandes contendientes destinaron toda su capacidad económica, militar y científica al servicio del esfuerzo bélico, borrando la distinción entre recursos civiles y militares. Marcada por hechos de enorme repercusión que incluyeron la muerte masiva de civiles (el Holocausto, los bombardeos masivos sobre ciudades y el uso, por primera vez en un conflicto bélico, de armas nucleares), la Segunda Guerra Mundial fue la más mortífera de la historia, con un resultado de entre 50 y 70 millones de víctimas, el 2,5 % de la población mundial de esa época.2​

El comienzo del conflicto se suele situar en el 1 de septiembre de 1939, con la invasión alemana de Polonia, cuando Hitler se decidió a la incorporación de una de sus reivindicaciones expansionistas más delicadas: El Corredor Polaco, que implicaba la invasión de la mitad occidental de Polonia; la mitad oriental, junto con Estonia, Letonia y Lituania fue ocupada por la Unión Soviética, mientras que Finlandia logró mantener su independencia de los soviéticos (guerra de Invierno). El Reino Unido y Francia le declararon la guerra a Alemania, que esperaban que esta fuera, como una repetición de la guerra de trincheras de la Primera Guerra Mundial («guerra de mentira») para la que habían tomado toda clase de precauciones (línea Maginot) que demostraron ser del todo inútiles. Las maniobras espectaculares de la blitzkrieg («guerra relámpago») proporcionaron en pocos meses a Alemania el control de Noruega, Dinamarca, Países Bajos, Bélgica y la propia Francia, mientras que el ejército británico escapaba in extremis desde las playas de Dunkerque durante la batalla de Francia. La mayor parte del continente europeo estaba ocupado por el ejército alemán o por sus aliados, entre los que destacaba la Italia fascista, cuya aportación militar no fue muy significativa (batalla de los Alpes, guerra greco-italiana).

La batalla de Inglaterra, la primera completamente aérea de la historia, mantuvo durante el periodo siguiente la presión sobre el nuevo gobierno de Winston Churchill, decidido a la resistencia («sangre, sudor y lágrimas») y que finalmente venció, entre otras cosas gracias a una innovación tecnológica (el radar) y al decisivo apoyo estadounidense, que negoció en varias entrevistas con Franklin D. Roosevelt (Carta del Atlántico, 14 de agosto de 1941).

En 1941, la necesidad estratégica de ocupar los campos petrolíferos del Cáucaso impulsó a Alemania a invadir la Unión Soviética (operación Barbarroja), inicialmente exitosa, pero que se estancó en la batalla de Moscú y los sitios de Leningrado y Stalingrado. Al mismo tiempo, Japón, en su campaña de expansión por Asia y en venganza por el embargo económico que el gobierno estadounidense les había impuesto, atacó Pearl Harbor el 7 de diciembre de 1941; la agresión precipitó la entrada de Estados Unidos en la guerra. Pocos meses después, la batalla de Midway (en julio de 1942) marcaría un punto de inflexión en la guerra del Pacífico ante el debilitamiento de la capacidad de combate japonesa frente a los estadounidenses. En el norte de África, los británicos frenaron el avance de los Afrika Korps alemanes desde Libia hacia Egipto en la batalla de El Alamein (1942), después de la invasión italiana al canal de Suez (1940).

El periodo final de la guerra se caracterizó por las complejas operaciones necesarias para los desembarcos aliados en Europa (Sicilia, en julio de 1943; Anzio, en enero de 1944; Normandía, en junio de 1944) y por el hundimiento del frente oriental, en el que se libraron las operaciones con tanques más encarnizadas de la historia (batalla de Kursk, especialmente en Prójorovka, julio de 1943), mientras en el frente occidental los alemanes experimentaban armas tecnológicamente muy desarrolladas (misiles V-1 y V-2) y soportaban bombardeos destructivos sobre sus ciudades a una escala nunca antes vista (bombardeo de Dresde, en febrero de 1945) y la destrucción total de su capital (batalla de Berlín, entre abril y mayo de 1945).

En el frente del Pacífico, los estadounidenses tuvieron que desalojar isla a isla a los japoneses, tanto en el sur del Pacífico (Guadalcanal, en agosto de 1942) como en Filipinas (Manila, en febrero de 1945); tras librar las mayores batallas navales de la historia (batalla del Mar del Coral, en mayo de 1942; batalla de Midway, en junio de 1942; batalla del Golfo de Leyte, en octubre de 1944), alcanzaron tierras niponas (Iwo Jima, en febrero de 1945 y Okinawa, en abril de 1945). En agosto de 1945, el presidente de Estados Unidos, Harry S. Truman ordenó bombardear con las recién inventadas armas nucleares las ciudades de Hiroshima y Nagasaki. La devastación causada por el ataque, que a la larga se cobraría la vida de 250 000 personas, precipitó la capitulación de Japón.

A diferencia de la Primera Guerra Mundial, la rendición (tanto la japonesa como la alemana) se produjo por derrota incondicional, sin pasar por ningún tipo de negociación. Las conversaciones decisivas fueron las que plantearon la división de Europa en zonas de influencia entre los aliados, y que se negociaron en sucesivas cumbres (conferencia de Teherán, el 1 de diciembre de 1943; conferencia de Yalta, en febrero de 1945; y conferencia de Potsdam, en julio de 1945).

La Segunda Guerra Mundial alteró las relaciones políticas y la estructura social del mundo. Tras la conflagración, se fundó la Organización de las Naciones Unidas con el fin de fomentar la cooperación internacional y de prevenir potenciales conflictos. La Unión Soviética y Estados Unidos se erigieron como superpotencias rivales, estableciéndose el escenario para la Guerra Fría, que se prolongó durante los siguientes cuarenta y seis años. Al mismo tiempo, la influencia de las grandes potencias europeas entró en decadencia, materializada en el inicio de la descolonización de Asia y África. La mayoría de los países cuyas industrias habían sido perjudicadas abordaron la recuperación económica con la ayuda financiera del país americano (plan Marshall), mientras que la integración política emergía como un esfuerzo para establecer las relaciones de posguerra.`,
);
