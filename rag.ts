import ollama from 'ollama'

const daisyui = await Bun.file('./daisyui.md').text()

const model = 'deepseek-r1:1.5b'

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
    stream: true,
  })
  return response
}

const prompt = 'you: '
process.stdout.write(prompt)
for await (const line of console) {
  process.stdout.write(`ollama: `)
  const response = await chat(line)
  for await (const part of response) {
    process.stdout.write(part.message.content)
  }
  process.stdout.write(`\n${prompt}`)
}
