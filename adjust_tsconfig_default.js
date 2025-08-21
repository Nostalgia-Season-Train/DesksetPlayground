import { readdirSync, readFileSync, writeFileSync } from 'fs'

const ROOT_PATH = './dist/assets'

for (const file of readdirSync(ROOT_PATH)) {
  if (file.startsWith('index') && file.endsWith('js')) {
    const rawText = readFileSync(`${ROOT_PATH}/${file}`, 'utf-8')
    const text = rawText.replace('checkJs:!0', 'checkJs:false')  // 调整网页编辑器 tsconfig/checkJs 默认值 true > false
    writeFileSync(`${ROOT_PATH}/${file}`, text, 'utf-8')
  }
}
