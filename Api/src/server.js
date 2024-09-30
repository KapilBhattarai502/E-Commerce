import app from './index.js'
import 'dotenv/config'

const PORT=6464;



app.listen(PORT,(req,res)=>{
    console.log(`App is listening to port ${PORT}`)
})