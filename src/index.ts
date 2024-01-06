import express, {Response, Request} from 'express'
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser())

const products = [{id: 0,title: 'tomato'}, {id: 1,title: 'orange'}]
app.get('/products', (req: any, res: Response) => {
    res.send(products)
})
app.get('/products?title', (req: any, res: Response) => {
    res.send(products)
})
app.get('/products/:title', (req: any, res: Response) => {
    const index = products.findIndex(p => p.title === req.params.title)
    if (index) {
        return res.send(products[index])
    }
    res.send(404)
})

app.delete('/products/:title', (req: Request, res: Response) => {
    const index = products.findIndex(p => p.title === req.params.title)
    if (index >= 0) {
        console.log('index', index)
        products.splice(index, 1)
        return res.send(`${req.params.title} was deleted`)
    } else {
        res.send(404)
    }
})

app.post('/products', (req: Request, res: Response) => {
    let id = 0
    for (let i = 0; i < products.length; i++) {
        ++id
    }
    const newProduct = {id: id, title: req.body.title}
    products.push(newProduct)
    return res.status(201).send(newProduct)
})

app.put('/products', (req:Request, res: Response)=> {
    const {id, title} = req.body
    console.log(id)
    console.log(title)
    const index = products.findIndex(p => p.id === id)
    products.splice(index, 1, {id, title})
    return res.status(201).send('готово')
})
app.get('/city', (req: any, res: Response) => {
    res.send(adresses)
})

const adresses = [{id: 1, title: 'Minsk'}, {id: 2, title: 'Moscow'}]
app.listen(port, () => {
    console.log(`App started on ${port} port`)
})