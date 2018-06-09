let animals = [
    {
      name: 'Armadillo',
      id: '1',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nine-banded_Armadillo.jpg/1200px-Nine-banded_Armadillo.jpg',
      description: 'None.'
    },
    {
      name: 'Tiger',
      id: '2',
      imageUrl: 'http://kids.sandiegozoo.org/sites/default/files/2017-06/animal-hero-tiger_0.jpg',
      description: 'None.'
    }
]

module.exports = {
    create: (req, res) => {
        let arrLength = animals.length-1
        let newId = animals[arrLength].id+1
        animals.push({name: req.body.name, id: newId, imageUrl: req.body.imageUrl, description: 'None.'})
        res.status(200).send(animals)
    },

    read: (req, res) => {
        res.status(200).send(animals)
    },

    update: (req, res) => {
        const updateDesc = req.params.desc
        const updateId = req.params.id
        const updateIndex = animals.findIndex(x => x.id == updateId)
        const keepName = animals[updateIndex].name
        const keepId = animals[updateIndex].id
        const keepImg = animals[updateIndex].imageUrl

        animals[updateIndex] = {
            name: keepName,
            id: keepId,
            imageUrl: keepImg,
            description: updateDesc
        }

        res.status(200).send(animals)
    },

    delete: (req, res) => {
        const deleteId = req.params.id
        const deleteIndex = animals.findIndex(x => x.id == deleteId)
        animals.splice(deleteIndex, 1)
        res.status(200).send(animals)
    }
}