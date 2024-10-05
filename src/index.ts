import { Context, Schema } from 'koishi'

export function apply(ctx: Context, config: Config) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    ctx.i18n.define('zh-CN-ZAKO', require('./zh-CN-ZAKO.yml'))
}

export interface MessageState {
    count: number
    interval?: Disposable
}

export interface Config {}

export const filter = false
export const Config = Schema.object({})

export const name = 'locale-zh-CN-ZAKO'
