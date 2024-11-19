import { v4 as uuidv4 } from 'uuid';
import { 
    createDataFile, 
    getAllData, 
    getDataById, 
    updateData, 
    permaDeleteData, 
    softDeleteData, 
    getAllActiveData, 
    } from '../utils/fileUtils.js';

export class Usuario {
    #id
    #name
    #lastname
    #email
    #active
    #rol

    constructor(name, lastname, email, rol) {
        this.#id = uuidv4()
        this.#name = name;
        this.#lastname = lastname;
        this.#email = email;
        this.#rol = rol;
        this.#active = true;
    }

    get id() {
        return this.#id
    }

    get nameComplete() {
        return `${this.#name} ${this.#lastname}`
    }

    get name() {
        return this.#name
    }

    get lastname() {
        return this.#lastname
    }

    get email() {
        return this.#email
    }

    get rol() {
        return this.#rol
    }

    get active() {
        return this.#active
    }

    setId (newId) {
        this.#id = newId
    }

    setname(newName) {
        this.#name = newName
    }

    setLastname(newLastname) {
        this.#lastname = newLastname
    }

    setEmail(newEmail) {
        this.#email = newEmail
    }

    /*setActive() {
        this.#active = !this.#active
    }*/

    desactive(){
        this.#active = false
    }

    active(){
        this.#active = true
    }

    getAllPropierties() {
        return {
            id: this.#id,
            name: this.#name,
            lastname: this.#lastname,
            email: this.#email,
            rol: this.#rol,
            active: this.#active
        }
    }

    static formatearInstacia(objeto){
        try {
            const {id, name, lastname, email, rol } = objeto;

            const nuevaInstancia = new Usuario(name, lastname, email, rol);
            nuevaInstancia.setId(id)

            return nuevaInstancia
        }catch (error) {
            console.error('problemas al formatear la instacia de Usuario')
        }
    }

    static async crear(data) {
        try {
            const { name, lastname, email, rol } = data
            const usuario = new Usuario(name, lastname, email, rol)
            const usuarioObjet = usuario.getAllPropierties()

            await createDataFile(usuarioObjet, 'usuarios.json')

            return usuarioObjet
        } catch (error) {
            throw new Error(`Fallo al crear un nuevo usuario, ERROR: ${error}`)
        }
    }

    static async encontrarTodos() {
        try {
            const usuarios = await getAllData('usuarios.json')
            return usuarios
        } catch (error) {
            throw new Error('Error al obtener los datos del usuario')
        }
    }

    static async encontrarPorId(id) {
        try {
            const usuario = await getDataById(id, 'usuarios.json')
            return usuario
        } catch (error) {
            throw new Error(`Error al obtener los datos del usuario, ERROR: ${err}`);
        }
    }

    static async actualizar(id, data) {
        try {
            const actualizrUsuario = await updateData(id, data, 'usuarios.json')
            return actualizrUsuario
        }catch (error){
            throw new Error(`Fallo al actualizar el usuario, ERROR: ${err}`);
        }
    }

    static async borrarForEvaaa(id) {
        try {
            const usuarioBorrar = await permaDeleteData(id, 'usuarios.json');
            return usuarioBorrar
        }catch (error){
            throw new Error(`Fallo al borrar permaentemente el usuario, ERROR: ${error}`)
        }
    }

    static async delete(id) {
        try {
            await softDeleteData(id, 'usuarios.json', Usuario)
        }catch (error){
            throw new Error(`Fallo al borrar el usuario, ERROR: ${error}`);
        }
    }

    static obtenerUsuariosActivos() {
        try {
            const usuarios = getAllActiveData('usuarios.json')
        }catch (error){
            throw new Error('Error al obtener los datos del usuarios')
        }
    }

    static obtenerUsuariosActivosPorId() {
        try {
            const usuarios = getActiveDatabyId(id,'usuarios.json')
            return usuarios
        }catch (error){
            throw new Error('Error al obtener los datos del usuarios')
        }
        }
}
