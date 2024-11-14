import { createFile, readFile } from "../services/fileService.js"

export const createDataFile = async (data, dataPath) => {
    try {
    const datafile = await readFile(dataPath);
    let dataJson = null

    !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [...datafile, data] // if - else ternario

    await createFile(dataJson, dataPath)
    } catch (error) {
        throw new Error(`Error al gestionar la creacion del archivo con la data. ERROR: ${error}`)
    }
}

export const getAllData = async(pathData) => {
    try {
        const data = await readFile(pathData)
        return data
    } catch (error) {
    throw new Error('no pudimos acceder a los datos')
    }
}
