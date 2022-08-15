import axios from 'axios';

export default (
  ref,
  startSocket,
  closeSocket,
  resolutionToMilliseconds,
  isFuture
) => ({
  onReady: (callback) => {
    callback({});
  },
  searchSymbols: () => {},
  resolveSymbol: async (
    symbolName,
    onSymbolResolvedCallback,
    onResolveErrorCallback
  ) => {
    try {
      const { data } = await axios.get(
        `${
          isFuture
            ? process.env.NEXT_PUBLIC_REST_API_ENDPOINT_FUTURE
            : process.env.NEXT_PUBLIC_REST_API_ENDPOINT
        }prices/chart-symbol/${symbolName}`
      );

      onSymbolResolvedCallback(data);
    } catch (error) {
      onResolveErrorCallback(error);
    }
  },
  getBars: async (
    symbolInfo,
    resolution,
    periodParams,
    onHistoryCallback,
    onErrorCallback
  ) => {
    const { from, to, firstDataRequest } = periodParams;
    const convertedResolution = resolutionToMilliseconds(resolution);
    if (firstDataRequest) {
      try {
        const pair = symbolInfo.ticker.split('/');
        const fiveDayAgo = 5 * 24 * 60 * 60 * 1000;
        const fromTime =
          to * 1000 - fiveDayAgo < from * 1000
            ? to * 1000 - fiveDayAgo
            : from * 1000;

        const { data } = await axios.get(
          `${
            isFuture
              ? process.env.NEXT_PUBLIC_REST_API_ENDPOINT_FUTURE
              : process.env.NEXT_PUBLIC_REST_API_ENDPOINT
          }prices/chart/${pair[0].toUpperCase()}/${pair[1].toUpperCase()}?from=${fromTime}&to=${
            to * 1000
          }&resolution=${convertedResolution}`
        );

        if (ref.current) {
          ref.current['lastBarItem'] = data[data.length - 1];
          ref.current['onHistoryCallback'] = onHistoryCallback;
          ref.current['fromTime'] = fromTime;
          ref.current['data'] = data;
        }

        if (data.length > 0) {
          closeSocket();
          startSocket(`${pair[0].toUpperCase()}${pair[1].toUpperCase()}`);
        }
        onHistoryCallback(data, { noData: data.length === 0 });
      } catch (error) {
        onErrorCallback(error);
      }
    } else {
      const pair = symbolInfo.ticker.split('/');
      const { data } = await axios.get(
        `${
          isFuture
            ? process.env.NEXT_PUBLIC_REST_API_ENDPOINT_FUTURE
            : process.env.NEXT_PUBLIC_REST_API_ENDPOINT
        }prices/chart/${pair[0].toUpperCase()}/${pair[1].toUpperCase()}?from=${
          from * 1000
        }&to=${to * 1000}&resolution=${convertedResolution}`
      );

      if (ref.current) {
        ref.current['fromTime'] = from * 1000;
      }

      onHistoryCallback(data, {
        noData: data.length === 0,
      });
    }
  },
  subscribeBars: async (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback
  ) => {
    if (ref.current) ref.current['onRealtimeCallback'] = onRealtimeCallback;
  },
  unsubscribeBars: () => {},
});
