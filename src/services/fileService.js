import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const ___filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(___filename);

export const createFile = async (data, pathData) => {
    try {

        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        await fs.mkdir(path.dirname(datafilePath), { recursive: true })

        await fs.writeFile(datafilePath, JSON.stringify(data, null, 4), 'utf-8', (err) => {
            throw new Error(`Error al crear el archivo: ${err}`);
        });

    } catch (error) {
        throw new Error(`Error al crear el archivo: ${error}`)
    }
}

export const readFile = async (pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        const data = await fs.readFile(datafilePath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error(`No pudemos leer el archivo: ${error}`)
        return null
    }
}