# Montar proyecto NodeJS con Typescript

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


## TSLINT
```sh
npm install -D tslint
./node_modules/.bin/tslint --init
```
```
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "no-console": false
  },
  "rulesDirectory": []
}
```

## ExpressJS
```sh
npm install express
npm install --save-dev @types/express
```

## ts-node-dev
```sh
sudo npm i ts-node-dev -g
```

```
"scripts": {
    ...
    "dev": "ts-node-dev --respawn src/index.ts"
}
```