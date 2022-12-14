export const API_ENDPOINTS = {
  USER: {
    PRE_LOGIN: 'pre-sign-in',
    LOGIN: 'sign-in',
    ME: 'me',
    REGISTER: 'register',

    FORGOT_VERIFY_ACCOUNT: 'forgot-password/verify-account',
    CONFIRM_FORGOT: 'forget-password/confirmed',
    REGISTER_VERIFY_PHONE: 'register/verify-phone',
    REGISTER_CONFIRM_CODE: 'register/confirm-code',
    CHANGE_PASSWORD: 'change-password',
    CONFIRM_CHANGE_PASSWORD: 'change-password/confirmed',
    ACCOUNT_SETTING: 'users/security/settings',
    LOGIN_HISTORY_SETTING: 'users/login-history',
    SECURITY_ACTION_HISTORY: 'users/security/security-action-history',
    SWITCH_PHONE_AUTH: 'users/security/switch-phone-authentication',
    SWITCH_EMAIL_AUTH: 'users/security/switch-email-authentication',
    SWITCH_GOOGLE_AUTH: 'users/security/2fa/switch',
    ENABLE_WITHDRAW_WHITELIST: 'users/withdrawal-whitelist/enable',
    DISABLE_WITHDRAW_WHITELIST: 'users/withdrawal-whitelist/disable',
    SET_ANTI_PHISHING_CODE: 'users/security/set-anti-phishing-code',
    UPDATE_PHONE: 'users/security/update-phone-number',
    UPDATE_EMAIL: 'users/security/update-email',
    GENERATE_2FA_CODE: 'users/security/2fa/generate',
    VERIFY_2FA_CODE: 'users/security/2fa/verify',
    ID_IDENTIFICATION: 'users/identity-verification',
  },
  VERIFY_CODE: {
    SEND_CODE_EMAIL: 'code/send-verify-code-email',
    SEND_CODE_PHONE: 'code/send-verify-code-phone',
    SEND_CODE_UNAUTHORIZE: 'code/send-verify-code-unauthorize',
    SEND_CONFIRM_CODE: 'code/send-verify-code',
  },
  WALLET: {
    EARN: '/earn/total-value',
    TOKENS: 'wallet/tokens',
    ASSETS: 'wallet/assets',
    WITHDRAW_CONFIG: 'wallet/withdraw-config',
    ASSETS_FUNDING: 'wallet/assets-funding',
    FUNDING_TO_SPOT_FEE: 'wallet/fee-rate-funding-spot',
    TRANSFER_SPOT_FUNDING: 'wallet/transfer-spot-to-funding',
    TRANSFER_SPOT_FUTURE: 'wallet/transfer-to-future',
    TRANSFER_FUTURE_SPOT: 'wallet/transfer-to-spot',
    TRANSFER_FUNDING_SPOT: 'wallet/transfer-funding-to-spot',
    GET_DEPOSIT_ADDRESS: 'wallet/deposit-address',
    DEPOSIT_HISTORY: 'wallet/deposit-history',
    DISTRIBUTION_HISTORY: 'wallet/distribution-history',
    WITHDRAW_HISTORY: 'wallet/withdraw-history',
    SUBMIT_WITHDRAW: 'wallet/withdraw',
    WHITELIST_ADDRESS: 'wallet/withdrawal-address',
    TOGGLE_WHITELIST_ADDRESS: 'wallet/withdrawal-address/toggle-whitelisted',
    WITHDRAW_FEE: 'wallet/withdraw-fee',
    CHECK_INTERNAL_TRANSFER: 'wallet/internal-transfer/verify',
    INTERNAL_TRANSFER: 'wallet/internal-transfer',
    INTERNAL_TRANSFER_HISTORY: 'wallet/internal-transfer/history',
  },
  TRADING: {
    MARKET_PRICE: 'prices/markets',
    TRADE_MARKET: (coin: string, currency: string) =>
      `trade/market/${coin}/${currency}`,
    OPEN_ORDER: 'order/open-orders',
    ORDER_HISTORY: 'order/order-history',
    CANCEL_ORDER: 'order/cancel-order',
    TRADE_HISTORY: 'order/trade-history',
    CREATE_ORDER: 'order/add-order',
    ORDER_DETAIL: 'order/order-details',
    ORDER_BOOK: 'order/order-book',
    FEE_PERCENT: 'trade/fee-percent',
  },
  STAKING: {
    PROFIT: 'staking/profit',
    STAKING_LIST: 'staking/list',
    OPEN_STAKING: 'staking/open-staking',
    CLOSE_STAKING: 'staking/close-staking',
    REDEEM_STAKING: 'staking/redeem-staking',
    STAKING_TRANSACTION: 'staking/transactions',
    STAKING_LIST_ASSET: 'staking/list-asset',
  },
  LIQUIDITY: {
    POOL: 'liquiditypool/pools',
    POOL_STAKING: 'liquiditypool/staking',
    UNCLAIMED_LIQUIDITY: 'liquiditypool/unclaimed-staking-rewards',
    UNCLAIMED_SWAP: 'liquiditypool/unclaimed-swap-rewards',
    LIQUIDITY_HISTORY: 'liquiditypool/staking-history',
    LIQUIDITY_CLAIM_HISTORY: 'liquiditypool/staking-reward-history',
    SWAP_HISTORY: 'liquiditypool/swap-history',
    SWAP_CLAIM_HISTORY: 'liquiditypool/swap-reward-history',
    CLAIM: 'liquiditypool/claim-staking-rewards',
    CLAIM_SWAP_REWARDS: 'liquiditypool/claim-swap-rewards',
    ADD: 'liquiditypool/add-staking',
    REMOVE: 'liquiditypool/remove-staking',
    SWAP: 'liquiditypool/swap',
  },
  LAUNCHPAD: {
    LIST: 'launchpad/list',
    ORDER: 'launchpad/order',
    DETAIL: (code: string) => `launchpad/detail/${code}`,
    USER_DETAIL: (code: string) => `launchpad/user-detail/${code}`,
    COMMIT: 'launchpad/commit',
    STAT: 'launchpad/stat',
    WALLET: 'launchpad/wallet',
  },
  LAUNCHPOOL: {
    TOKEN: 'launchpool/tokens',
    LIST: 'launchpool/list',
    ORDER_REWARD: 'launchpool/order/REWARD',
    ORDER_REDEEM: 'launchpool/order/REDEEM',
    ORDER_STAKE: 'launchpool/order/STAKE',
    ORDER_CLAIM: 'launchpool/order/CLAIM',
    DETAIL: (code: string) => `launchpool/detail/${code}`,
    USER_DETAIL: (code: string) => `launchpool/user-detail/${code}`,
    STAKE: 'launchpool/stake',
    REDEEM: 'launchpool/redeem',
    CLAIM: 'launchpool/claim',
  },
  VAULT: {
    REWARDS: 'vault/rewards',
    USER_REWARDS: 'vault/user-rewards',
    AUTO_TRANSFER: 'vault/autoTransfer',
    STAKE: 'vault/stake',
    REDEEM: 'vault/redeem',
  },
  REFERRAL: {
    REFERRAL_LIST: 'referral/list',
    CREATE_REFERRAL: 'referral/create',
    UPDATE_REFERRAL: 'referral/update',
    STATISTIC: 'referral/statistic',
    TRANSACTION_LIST: 'referral/transaction',
    OWNER: 'referral/owner',
    UPDATE_WHITE_LABEL: 'referral/update-white-label',
    UPDATE_AFFILIATE: 'referral/update-affiliate',
    GET_AFFILIATE: 'referral/affiliate',
  },
  P2P: {
    ORDER_LIST: 'p2p/order/list',
    ORDER_CREATE: 'p2p/order/create',
    CANCEL_ORDER: (id) => `p2p/order/${id}/cancel`,
    UPDATE_ORDER: (id) => `p2p/order/${id}/update`,
    TRANSACTION: (id) => `p2p/order/${id}/transactions`,
    ORDER_OPENING: 'p2p/order/my',
    ORDER_HISTORY: 'p2p/order-history',
    CREATE_TRANSACTION: 'p2p/transaction/create',
    TRANSACTION_DETAIL: (id) => `p2p/transaction/${id}`,
    TRANSACTION_CANCEL: (id) => `p2p/transaction/${id}/cancel`,
    TRANSACTION_APPEAL: (id) => `p2p/transaction/${id}/report`,
    TRANSACTION_CONFIRM_TRANSFER: (id) =>
      `p2p/transaction/${id}/confirm-bank-transfer`,
    TRANSACTION_CONFIRM_RELEASE: (id) =>
      `p2p/transaction/${id}/confirm-release-token`,
    TRANSACTION_PROCESSING: 'p2p/transaction-processing',
    TRANSACTION_HISTORY: 'p2p/transaction-history',
    MESSAGES: 'p2p/chat/messages',
    SEND_MESSAGE: 'p2p/chat/message/send',
    STATISTIC: (id) => `p2p/statistic/${id}`,
    FIAT_PRICE: (token, fiat) => `p2p/prices/${token}/${fiat}`,
  },
  PAYMENT: {
    LIST: 'payment/bank-account/list',
    CREATE: 'payment/bank-account/create',
    UPDATE: 'payment/bank-account/update',
    REMOVE: (id: string) => `payment/bank-account/${id}/remove`,
  },
};
