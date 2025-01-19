# Typescript SDK for Open-VE

This is the Typescript SDK for Open-VE. It is a client library that allows you to interact with the Open-VE API.

## How to use

```bash
npm install open-ve-typescript-sdk
```

```typescript
import { Client } from "open-ve-typescript-sdk/client";
```

## Build and Release

```bash
npm version patch
npm run build
cp package.json dist/package.json
cd dist
npm publish
```
