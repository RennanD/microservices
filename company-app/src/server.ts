import express, { response } from 'express';

const app = express()

app.get('/',(request, response) => {
  response.json({
    ok: true
  })
})

app.listen(process.env.PORT || 4000, () =>{
  console.log('Company is running 🔥')
});