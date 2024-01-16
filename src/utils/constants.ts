/*//////////////////////////////////////////////////////////////
                            GENERAL
//////////////////////////////////////////////////////////////*/

export const SUPPORTED_AORI_CHAINS = new Set([
    1, // Ethereum
    5, // Goerli
    42161, // Arbitrum One
]);

/*//////////////////////////////////////////////////////////////
                        WEBSOCKET URLS
//////////////////////////////////////////////////////////////*/

export const AORI_API: string = "wss://api.aori.io";
export const AORI_FEED: string = "wss://feed.aori.io";
export const AORI_PRODUCTION_API: string = "wss://api.aori.io";
export const AORI_PRODUCTION_FEED: string = "wss://feed.aori.io";
export const AORI_STAGING_API: string = "wss://staging.api.aori.io";
export const AORI_STAGING_FEED: string = "wss://staging.feed.aori.io";
export const AORI_DEVELOPMENT_API: string = "wss://dev.api.aori.io";
export const AORI_DEVELOPMENT_FEED: string = "wss://dev.feed.aori.io";

/*//////////////////////////////////////////////////////////////
                        HTTP POST URLS
//////////////////////////////////////////////////////////////*/

// Main Aori API for facilitating CRUD operations
export const AORI_HTTP_API: string = "https://api.aori.io";
export const AORI_HTTP_PRODUCTION_API: string = "https://api.aori.io";
export const AORI_HTTP_STAGING_API: string = "https://staging.api.aori.io";
export const AORI_HTTP_DEVELOPMENT_API: string = "https://dev.api.aori.io";

// Taker Service for facilitating UX-friendly Market Orders
export const AORI_TAKER_API: string = "https://taker.aori.io";
export const AORI_TAKER_PRODUCTION_API: string = "https://taker.aori.io";
export const AORI_TAKER_STAGING_API: string = "https://staging.taker.aori.io";
export const AORI_TAKER_DEVELOPMENT_API: string = "https://dev.taker.aori.io";

// Data Provider API
export const AORI_DATA_PROVIDER_API: string = "https://provider.aori.io";

// Pricing Provider API
export const AORI_PRICING_PROVIDER_API: string = "https://pricing.aori.io";

// Solution Store
export const AORI_SOLUTION_STORE_API: string = "https://solution.aori.io";

// Mempool Provider API
export const AORI_MEMPOOL_PROVIDER_API: string = "https://mempool.aori.io";

/*//////////////////////////////////////////////////////////////
                    ORDER CONFIGURATION
//////////////////////////////////////////////////////////////*/

export const AORI_V2_SINGLE_CHAIN_ZONE_ADDRESS = "0x8558eCbA75DB19df2Fb1B70fe8661D296F68dFE7";

export const defaultDuration = 24 * 60 * 60;
export const maxSalt = 10_000_000;