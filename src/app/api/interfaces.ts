export interface Contacto {
    descripcion: string,
    enlace: string,
    logo: string
}

export interface Experiencia {
    empresa: string,
    inicio: string,
    fin: string,
    puesto: string,
    descripcion: string,
    logo: string
}


export interface Formacion {
    posicion: number;
    nombre: string;
    establecimiento: string;
    fechaInicio: string;
    fechaFin: string;
    logo: string;
}