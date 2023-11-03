"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testServer = void 0;
const supertest_1 = __importDefault(require("supertest"));
const Server_1 = require("../src/server/Server");
exports.testServer = (0, supertest_1.default)(Server_1.server);
