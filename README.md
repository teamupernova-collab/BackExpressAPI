## ExpressTypeAPIs
proyecto para el back usando Node Express

## requisitos
- instalar Node.js

## Instalación
1.npm install
2.npm run dev
3. genera la secret key para JWT_SECRET con el comando `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` y cópiala en tu archivo `.env` como el valor de JWT_SECRET.
4. Asegúrate de tener MongoDB en ejecución y de configurar las variables de entorno en un archivo `.env` con los valores adecuados para tu base de datos y JWT_SECRET.

## Uso
- El servidor se ejecutará en `http://localhost:3000`.
