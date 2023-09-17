import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // This is also the default, can be omitted
  dangerouslyAllowBrowser: true,
});

// makes the open ai request
async function chatRequest(input, messages, setMessages) {
  const complete = await openai.completions.create({
    model: "text-davinci-003",
    prompt: input,
    max_tokens: 30,
  });

  // Create a new message object
  const newMessage = {
    text: complete.choices[0].text,
    user: "Bot",
  };

  console.log(complete.choices[0].text);

  setMessages([...messages, newMessage]);
  
}

export default chatRequest;
