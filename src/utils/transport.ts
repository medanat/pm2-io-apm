import Debug from 'debug'
import * as stringify from 'json-stringify-safe'

const debug = Debug('axm:transport')

export default class Transport {
  static send (args: Error | any): number {

    /**
     * For debug purpose
     */
    if (process.env.MODULE_DEBUG) {
      debug(args)
    }

    if (!process.send) {
      return -1
    }

    const msg = args instanceof Error ? args.message : args

    try {
      process.send(JSON.parse(stringify(msg)))
    } catch (e) {
      debug('Process disconnected from parent !')
      debug(e.stack || e)
      process.exit(1)
    }

    return 0
  }
}
