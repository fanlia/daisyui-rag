import ollama from 'ollama'
import * as cheerio from 'cheerio'

let model = 'qwen2.5:0.5b'

let system_messages = []
let history_messages = []

const get_messages = async () => {
  return [...system_messages, ...history_messages]
}

const add_messages = async (content: string) => {
  if (content.startsWith('/system')) {
    content = content.slice(7).trim()
    system_messages = [
      {
        role: 'system',
        content,
      },
    ]
    return
  } else if (content.startsWith('/file')) {
    try {
      content = await Bun.file(content.slice(5).trim()).text()
      history_messages.push({
        role: 'user',
        content,
      })
    } catch (e) {
      console.log('file invalid')
    }
    return true
  } else if (content.startsWith('/url')) {
    try {
      content = await fetch(content.slice(4).trim())
        .then((res) => res.text())
        .then((html) => {
          const $ = cheerio.load(html)
          $('script').remove()
          $('style').remove()
          return $('body').text().trim().replace(/\s+/g, ' ')
        })
      history_messages.push({
        role: 'user',
        content,
      })
    } catch (e) {
      console.log('url invalid')
    }
    return true
  } else if (content.startsWith('/clear')) {
    history_messages = []
    return
  } else if (content.startsWith('/model')) {
    model = content.slice(6).trim()
    return
  } else if (content.startsWith('/list')) {
    const names = (await ollama.list().then((res) => res.models))
      .map((d) => `- ${d.model}`)
      .join('\n')
    console.log(`models:\n${names}`)
    return
  } else if (content.startsWith('/dump')) {
    try {
      const filename = (content.slice(5).trim() || 'promp') + '.json'
      const messages = await get_messages()
      await Bun.write(filename, JSON.stringify(messages, null, 2))
      console.log('prompt saved to', filename)
    } catch (e) {
      console.log('file invalid')
    }
    return
  } else if (!content) {
    return
  } else {
    history_messages.push({
      role: 'user',
      content,
    })
  }
  return true
}

const chat = async (messages) => {
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
  const need_chat = await add_messages(line)
  const messages = await get_messages()
  console.log({ messages, model })
  if (need_chat) {
    let content = ''
    const response = await chat(messages)
    for await (const part of response) {
      content += part.message.content
      process.stdout.write(part.message.content)
    }
    history_messages.push({
      role: 'assistant',
      content,
    })
  }
  process.stdout.write(`\n${prompt}`)
}
