import { Mastra } from "@mastra/core/mastra";
import { ConsoleLogger } from "@mastra/core/logger";
import { mbtiAgent } from "./agents/mbti-agent";

export const mastra = new Mastra({
  agents: { mbtiAgent },
  logger: new ConsoleLogger({
    name: "MBTI Diagnosis Agent",
    level: "info",
  }),
});
