"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ssh2_sftp_client_1 = __importDefault(require("ssh2-sftp-client"));
const sftp = new ssh2_sftp_client_1.default();
const config = {
    host: 'your.sftp.server.com',
    port: 22,
    username: 'your-username',
    password: 'your-password',
};
sftp.connect(config)
    .then(() => {
    return sftp.put('local/path/to/yourfile.txt', '/remote/path/yourfile.txt');
})
    .then(() => {
    console.log('File uploaded successfully');
})
    .catch((err) => {
    console.error('An error occurred:', err.message);
})
    .finally(() => {
    sftp.end();
});
