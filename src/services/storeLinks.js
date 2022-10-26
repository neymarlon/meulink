
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let LinksSaves = JSON.parse(myLinks) || [];


    return LinksSaves;
}


// salvar um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);


    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink) {
        console.log('Esse link já exoste.')

        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))

    console.log('Link salvo com sosocco');
}


// deletar link salvo

export function deleteLink(links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('link deletado com sucesso')
    return myLinks;
}