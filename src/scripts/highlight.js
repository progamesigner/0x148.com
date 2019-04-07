const languageNameMappings = name => ({
    ['coffeescript']: 'CoffeeScript',
    ['cpp']: 'C++',
    ['cs']: 'C#',
    ['css']: 'CSS',
    ['html']: 'HTML',
    ['http']: 'HTTP',
    ['js']: 'JavaScript',
    ['json']: 'JSON',
    ['objectivec']: 'Objective-C',
    ['php']: 'PHP',
    ['sql']: 'SQL',
    ['toml']: 'TOML',
    ['ts']: 'TypeScript',
    ['typescript']: 'TypeScript',
    ['xml']: 'XML',
    ['yaml']: 'YAML'
}[name] || name)

export default block => {
    const code = block.querySelector('code[data-lang]')
    if (code !== null) {
        block.setAttribute('data-lang', languageNameMappings(code.getAttribute('data-lang')))
    }
}
