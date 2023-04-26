import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function runCompletion (url) {
  var user_content = "summarize " + url + "'s privacy policy in four short bullet points and if not summarize whatever you can find";
  var msgs = [{role: "system",
              content: "You are a helpful assistant and may be sometimes asked other questions and given tasks."
              }, 
            {role: "user", 
            content: user_content}
        ]
  openai.createChatCompletion
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: msgs,
  });
  console.log(completion.data.choices[0].message.content);
  //return completion.data.choices[0].message.content;
  return completion.data.choices[0].message.content;
}

const express = require("express")
const bodyParser = require('body-parser');
const app = express()



app.use(express.static("public"))
app.use(bodyParser.json());


app.post("/postpolicy", function (req, res) {
  console.log('Got url:', req.body.url);
  runCompletion(req.body.url).then(response => {
    //console.log('response::' + response);
    return res.status(200).json({
      success: true,
      message: response,
    });
    //res.send(response)
  });

})

// app.get("/getpolicy", function (req, res) {
//   runCompletion().then(response => {
//     console.log('response::' + response);
    
//     return res.status(200).json({
//       success: true,
//       message: response,
//     });
//     //res.send(response)
//   });
//   // var response = runCompletion();
//   // console.log('back')
//   // res.send(response)
// })

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running... at http://localhost:3000"));