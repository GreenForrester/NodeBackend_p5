import winston, { format, transports } from 'winston'; //library for logging
import path from 'path';


const logDirectory = process.env.LOG_DIRECTORY || '/var/log/app';
//Pino-loki is alternative to winston-loki for better performance
const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    }),
    new winston.transports.File({ filename: path.join(logDirectory, 'combined.log') }),
    new winston.transports.File({ filename: path.join(logDirectory, 'error.log'), level: 'error' })
  ],
});

export default logger;