import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const ___filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(___filename);

const datafilePath = path.join(__dirname, `../data/${pathData}`)

export const createFile = async (data, pathdata) => {
        try {
            await fs.mkdir(path.dirname(datafilePath), {recursive:true})

            await fs.writeFile(datafilePath, JSON.stringify(data, null, 4), 'utf-8', (err) => {
                throw new Error(`Error al crear el archivo: ${err}`);
            });

        }catch (error) {
            throw new Error(`Error al crear el archivo: ${error}`);
        }
}