import express from 'express';

const app = express();

app.get('/users', () => {
    console.log('Acesso');
});

app.listen(3333);