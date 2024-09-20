import Client from 'ssh2-sftp-client';

const sftp = new Client();

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
    .catch((err: Error) => {
        console.error('An error occurred:', err.message);
    })
    .finally(() => {
        sftp.end();
    });
