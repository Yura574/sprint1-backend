import express, {Response, Request} from 'express'

const app = express()
const port = 3000

app.get('/', (res: Response, req: Request) => {
    res.send('<h1>saas <ul style="color: red"> <li> hi1212 </li> <li>2</li> <li>3</li></ul> </h1> ')
})
app.listen(port, () => {
    console.log(`App started on ${port} port`)
})