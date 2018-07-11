#! /usr/bin/env node

const fs = require('fs');

const modelPath = process.argv[2];
const controllersPath = process.argv[3];
const routesPath = process.argv[4];

if (typeof modelPath === 'undefined' || typeof controllersPath === 'undefined' || typeof routesPath === 'undefined') {
 throw new Error("argumentos inválidos");
}

