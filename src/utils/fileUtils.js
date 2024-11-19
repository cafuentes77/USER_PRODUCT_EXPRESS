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

export const getDataById = async (id, pathData) => {
    try {
        const data = await readFile(pathData)
        const datafound = data.find(datafound => datafound.id === id)
        return datafound
    }catch (error) {
        throw new Error('no pudimos acceder a los datos por el Id')
    }
}

export const updateData = async (id, newData, pathData) => {
    try {
        const data = await readFile(pathData)
        const indexdata = data.findIndex(dataFound => dataFound.id === id)

        if(indexdata === -1) throw new Error('no pudimos encontrar el dato que buscas')

            //cortesia:Devolaver el dato anterior para comparar
            const oldData = {...data[indexdata]}

        data[indexdata] = { ...newData, id, active: true}
        await createFile(data, pathData)
        
        //Cortesia:
        return oldData


    }catch (error) {
        throw new Error('no pudimos actualizar los datos')

    }
}

export const permaDeleteData = async(id, pathData) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex( dataFound => dataFound.id === id );

        if(indexData === -1) throw new Error(`No pudimos encontrar la data`);

        const dataDelete = data[indexData]
        data.splice(indexData, 1)

        await createFile(data, pathData )

        return dataDelete
    } catch (error) {
        console.error("No pudimos actualizar la data");
    }
}


export const softDeleteData = async(id, pathData, Model) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex(dataFound => dataFound.id === id)
        if (indexData === -1) throw new Error(`No pudimos encontrar la data`);

        const newInstance = Model.formatearInstancea(data[indexData]);
        
        newInstance.desactive();
        
        data[indexData] = newInstance.getAllProperties()

        await createFile(data, pathData)        
    } catch (error) {
        console.error("No pudimos actualizar la data");
    }
}
