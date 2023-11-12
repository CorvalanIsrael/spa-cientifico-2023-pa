const getHash = () => {
    const hash = window.location.href.split('/').pop()
    let max = 826 // Cantidad de personajes disponibles <-- Se podrían sacar este número llamando a la API
    let min = 1

    if(!hash) return '#/' 


    if(isNaN(+hash) || min > hash || max < hash) return '/error/404' 

    if(min < hash <= max){
        return hash 
    }
}

export default getHash;