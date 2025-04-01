import ollama from 'ollama'

const daisyui = await Bun.file('./daisyui.md').text()

const model = 'deepseek-r1:latest'

const chat = async (content: string) => {
  const messages = [
    {
      role: 'user',
      content: daisyui,
    },
    {
      role: 'user',
      content,
    },
  ]
  const response = await ollama.chat({
    model,
    messages,
  })
  return response.message.content
}

const prompt = 'you: '
process.stdout.write(prompt)
for await (const line of console) {
  const res = await chat(line)
  console.log(`ollama: ${res}`)
  process.stdout.write(prompt)
}
