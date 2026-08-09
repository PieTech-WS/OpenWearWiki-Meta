import { readFileSync } from 'node:fs'
import { basename } from 'node:path'

interface ProductWikiName {
  zh_CN?: string
  en_US?: string
}

interface ProductWikiData {
  name?: ProductWikiName
}

const titleMap = new Map<string, string>()

export default {
  watch: './*.json',
  paths: (files: string[]) =>
    files.map((file) => {
      const device = basename(file, '.json')

      try {
        const json = JSON.parse(readFileSync(file, 'utf-8')) as ProductWikiData
        const title =
          json.name?.zh_CN?.trim() || json.name?.en_US?.trim() || device
        titleMap.set(device, title)
      }
      catch {
        titleMap.set(device, device)
      }

      return {
        params: {
          device,
        },
      }
    }),
  transformPageData: (pageData: { params?: Record<string, unknown> }) => {
    const device =
      typeof pageData.params?.device === 'string' ? pageData.params.device : ''

    if (!device) {
      return
    }

    const title = titleMap.get(device)

    if (!title) {
      return
    }

    return { title }
  },
}
