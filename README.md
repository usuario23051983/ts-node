#Montar proyecto NodeJS con Typescript

```sh
mkdir ts-node
cd ts-node
npm init -y
npm install --save-dev typescript
npx tsc --init
```

Editamos el fichero tsconfig.json con las siguientes propiedades:

```
{
 "compilerOptions": {
  "target": "es5",
   "module": "commonjs",
   "outDir": "./dist",
   "rootDir": "./src",
   "strict": true,
   "noImplicitAny": true,
   "strictNullChecks": true,
   "esModuleInterop": true,
   "skipLibCheck": true,
   "forceConsistentCasingInFileNames": true
},
 "exclude": [
   "node_modules",
   "**/*.spec.ts"
  ]
}
```

```sh
mkdir src
echo "console.log('Hola!')" > index.ts
```

Editamos el fichero package.json para incluir los siguientes scripts:

```
"scripts": {
   "build": "tsc --build tsconfig.json",
   "build:watch": "tsc --build tsconfig.json --watch"
},
```

Ejecutamos:

```sh
npm run build
```

Ya tenemos el fichero /dist/index.js generado correctamente

```sh
node /dist/index.js
```

