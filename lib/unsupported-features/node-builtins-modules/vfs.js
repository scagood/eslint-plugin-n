import { READ } from "@eslint-community/eslint-utils"

/**
 * @satisfies {import('../types.js').SupportVersionTraceMap}
 */
const vfs = {
    create: { [READ]: { experimental: ["26.4.0"] } },
    MemoryProvider: { [READ]: { experimental: ["26.4.0"] } },
    RealFSProvider: { [READ]: { experimental: ["26.4.0"] } },
    VirtualFileSystem: { [READ]: { experimental: ["26.4.0"] } },
    VirtualProvider: { [READ]: { experimental: ["26.4.0"] } },
}

/**
 * @satisfies {import('../types.js').SupportVersionTraceMap}
 */
export default {
    "node:vfs": {
        [READ]: { experimental: ["26.4.0"] },
        ...vfs,
    },
}
