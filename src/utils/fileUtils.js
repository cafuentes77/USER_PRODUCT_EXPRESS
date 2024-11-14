import { createFile, readFile } from "../services/fileService.js"

export const createDataFile = async (data, dataPath) => {
    const datafile = await readFile(dataPath)
    let dataJson = null

    !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [...datafile, data] // if - else ternario

    await createFile(data, dataPath)
}
