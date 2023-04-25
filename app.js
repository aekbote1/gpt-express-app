import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
var msgs = [{role: "system",
            content: "You are a helpful coding assistant and may be sometimes asked other questions and given tasks."
            },
            {role: "user", 
            content: "summarize verizon.com’s privacy policy and if not summarize whatever you can find"}
        ]

async function runCompletion () {
  
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: msgs,
  });
  console.log(completion.data.choices[0].message.content);
  return completion.data.choices[0].message.content;
  }

const express = require("express")
const app = express()



app.use(express.static("public"))

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.post("/postpolicy", function (req, res) {
  runCompletion().then(response => {
    console.log('response::' + response);
    res.send(response)
  });
  // var response = runCompletion();
  // console.log('back')
  // res.send(response)
})

app.get("/getpolicy", function (req, res) {
  runCompletion().then(response => {
    console.log('response::' + response);
    res.send(response)
  });
  // var response = runCompletion();
  // console.log('back')
  // res.send(response)
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running... at http://localhost:3000"));