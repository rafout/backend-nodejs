import app from './src/app';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
});    
