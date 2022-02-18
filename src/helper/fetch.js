const baseUrl = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';

export const Fetch = (endpoint) => {
    const url = `${ baseUrl }/${ endpoint }`;

    return fetch(url);
}