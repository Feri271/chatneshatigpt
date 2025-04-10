
const axios = require('axios');

exports.handler = async (event) => {
    const userInput = event.request.intent.slots.userInput.value;
    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: 'gpt-4',
            messages: [{ role: 'user', content: userInput }]
        },
        {
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            }
        }
    );

    const reply = response.data.choices[0].message.content;

    return {
        version: "1.0",
        response: {
            shouldEndSession: false,
            outputSpeech: {
                type: "PlainText",
                text: reply
            }
        }
    };
};
