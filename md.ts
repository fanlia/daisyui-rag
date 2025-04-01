import daisyui from './daisyui.json'

const { name, version, components } = daisyui

const md = `
# ${name}

## version

${version}

## components

${components
  .map(
    ({ name, description, usages }) => `
### ${name}
${description}

#### usages
${usages
  .map(
    ({ title, code }) => `
##### ${title}

\`\`\`html
${code}
\`\`\`
  `,
  )
  .join('\n')}
  `,
  )
  .join('\n')}

`

await Bun.write('daisyui.md', md)
