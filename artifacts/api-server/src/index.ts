import app from "./app";
import { logger } from "./lib/logger";

// This block will now only run for local development, not on Vercel
if (!process.env.VERCEL) {
  const rawPort = process.env["PORT"] ?? "3000";
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  app.listen(port, (err?: Error) => {
    if (err) {
      logger.error({ err }, "Error listening on port");
      process.exit(1);
    }
    logger.info({ port }, "Server listening");
  });
}

// This will be the handler for Vercel
export default app;
