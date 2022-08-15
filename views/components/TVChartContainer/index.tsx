import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useAppState } from 'src/context/AppContext';
import {
  ResolutionString,
  ChartingLibraryWidgetOptions,
} from './charting_library/charting_library';
import DATAFEED from './datafeed';

type Props = {
  symbol: string;
  tvWidgetRef: any;
  isFuture: boolean;
};

type TVFunction = {
  onRealtimeCallback: Function;
  lastBarItem: any;
  fromTime: number;
};
const CHARTING_RESOLUTION_MULTIPLICITY = { '1D': 1440, D: 10080 };

const TVChartContainer: React.FC<Props> = ({
  symbol,
  tvWidgetRef,
  isFuture,
}) => {
  const { isDark } = useAppState();
  const socketIo = useRef(null);
  const chartSymbolRef = useRef('');
  const chartRef = useRef();
  const functionRef = useRef<TVFunction>({
    onRealtimeCallback: null,
    lastBarItem: null,
    fromTime: null,
  });

  const bgColor = isDark ? 'rgb(22, 26, 30)' : '#fff';

  const changeTheme = () => {
    if (tvWidgetRef.current) {
      tvWidgetRef.current.changeTheme(isDark ? 'Dark' : 'Light');
      setTimeout(() => {
        tvWidgetRef.current.applyOverrides({
          volumePaneSize: 'medium',
          'paneProperties.background': bgColor,
          'paneProperties.backgroundGradientStartColor': bgColor,
          'paneProperties.backgroundGradientEndColor': bgColor,
        });
      }, 500);
    }
  };

  const resolutionToMilliseconds = (resolution: string): number => {
    let minutes = 0;
    if (resolution.match(/^\d+$/)) {
      minutes = parseInt(resolution);
    } else {
      minutes = CHARTING_RESOLUTION_MULTIPLICITY[resolution];
    }
    return minutes * 60 * 1000;
  };

  const chartConfig = {
    interval: '5' as ResolutionString,
    fullscreen: false,
    locale: 'en',
    timezone: 'Asia/Seoul',
    container_id: 'trading-view-chart',
    library_path: '/tradingview/charting_library/',
    custom_css_url: '/tradingview/styles.css',
    client_id: 'alphateam-holdings',
    user_id: 'public_user_id',
    disabled_features: [
      'volume_force_overlay',
      'use_localstorage_for_settings',
    ],
    loading_screen: {
      foregroundColor: bgColor,
      backgroundColor: bgColor,
    },
    enabled_features: [
      'dont_show_boolean_study_arguments',
      'hide_last_na_study_output',
    ],
    theme: isDark ? 'Dark' : 'Light',
    overrides: {
      volumePaneSize: 'medium',
      'paneProperties.background': bgColor,
      'paneProperties.backgroundGradientStartColor': bgColor,
      'paneProperties.backgroundGradientEndColor': bgColor,
      'mainSeriesProperties.candleStyle.upColor': 'rgb(14, 203, 129)',
      'mainSeriesProperties.candleStyle.downColor': 'rgb(246, 70, 93)',
    },
    studies_overrides: {
      'volume.volume.color.0': 'rgba(14, 203, 129, 0.6)',
      'volume.volume.color.1': 'rgba(246, 70, 93, 0.5)',
    },
    drawings_access: {
      type: 'black',
      tools: [],
    },
  };

  const startSocket = (symbolName: string) => {
    socketIo.current = isFuture
      ? io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`, {
          transports: ['websocket'],
          path: '/future-socket',
        })
      : (socketIo.current = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`, {
          transports: ['websocket'],
        }));

    socketIo.current.emit('subscribeOrderBook', {
      symbol: symbolName,
    });

    socketIo.current.on('connect', () => {
      socketIo.current.on(
        isFuture ? 'future.newChartItem' : 'newChartItem',
        (data) => {
          try {
            const { onRealtimeCallback, lastBarItem } = functionRef.current;
            if (onRealtimeCallback && tvWidgetRef.current) {
              const symbolInterval = tvWidgetRef.current.symbolInterval();
              let price = data.price;
              let volume = data.quantity;
              let resolution = resolutionToMilliseconds(
                symbolInterval.interval
              );
              let time = Math.floor(data.createdAt / resolution) * resolution;
              let existingBar = lastBarItem;
              if (lastBarItem && time == lastBarItem.time) {
                existingBar.volume += volume;
                existingBar.high = Math.max(price, lastBarItem.high);
                existingBar.low = Math.min(price, lastBarItem.low);
                existingBar.close = price;
              } else {
                existingBar = {
                  time: time,
                  high: price,
                  low: price,
                  open: price,
                  close: price,
                  volume: volume,
                };
              }
              functionRef.current.lastBarItem = existingBar;
              if (onRealtimeCallback) {
                onRealtimeCallback(existingBar);
              }
            }
          } catch (error) {}
        }
      );
    });
  };

  const closeSocket = () => {
    if (socketIo.current) socketIo.current.close();
  };

  const startLoadChart = (inputSymbol: string) => {
    tvWidgetRef.current = null;
    const tvWidget = new window.TradingView.widget({
      symbol: inputSymbol,
      container: chartRef.current,
      datafeed: DATAFEED(
        functionRef,
        startSocket,
        closeSocket,
        resolutionToMilliseconds,
        isFuture
      ),
      ...chartConfig,
    } as ChartingLibraryWidgetOptions);

    tvWidget.onChartReady(() => {
      tvWidgetRef.current = tvWidget;

      tvWidget.chart().createStudy(
        'Moving Average',
        false,
        false,
        [7],
        {
          'Plot.linewidth': 1,
          'Plot.color': '#F19C37',
        },
        {
          checkLimit: true,
          priceScale: 'as-series',
          allowChangeCurrency: false,
          disableUndo: true,
        }
      );

      tvWidget.chart().createStudy(
        'Moving Average',
        false,
        false,
        [25],
        {
          'Plot.linewidth': 1,
          'Plot.color': '#E73DF5',
        },
        {
          checkLimit: true,
          priceScale: 'as-series',
          allowChangeCurrency: false,
          disableUndo: true,
        }
      );

      tvWidget.chart().createStudy(
        'Moving Average',
        false,
        false,
        [99],
        {
          'Plot.linewidth': 1,
          'Plot.color': '#74FCFC',
        },
        {
          checkLimit: true,
          priceScale: 'as-series',
          allowChangeCurrency: false,
          disableUndo: true,
        }
      );
      tvWidget
        .activeChart()
        .onVisibleRangeChanged()
        .subscribe(null, async ({ to }) => {
          if (functionRef.current.fromTime >= (to - 36 * 60 * 60) * 1000) {
            const fiveDayAgo = 5 * 24 * 60 * 60 * 1000;
            const fromTime = functionRef.current.fromTime - fiveDayAgo;

            tvWidget.activeChart().setVisibleRange(
              {
                from: fromTime / 1000,
                to: functionRef.current.fromTime / 1000,
              },
              { percentRightMargin: 60 }
            );
          }
        });
    });
  };

  const reloadChart = (inputSymbol: string) => {
    closeSocket();

    if (tvWidgetRef.current) {
      tvWidgetRef.current.setSymbol(
        inputSymbol,
        '5' as ResolutionString,
        () => {}
      );
    } else {
      startLoadChart(inputSymbol);
    }
  };

  useEffect(() => {
    if (!chartSymbolRef.current && symbol) {
      startLoadChart(symbol);
    }

    if (chartSymbolRef.current && symbol && chartSymbolRef.current !== symbol) {
      reloadChart(symbol);
    }

    chartSymbolRef.current = symbol;
  }, [symbol]);

  useEffect(() => {
    return () => {
      chartSymbolRef.current = '';
      closeSocket();
    };
  }, []);

  useEffect(() => {
    changeTheme();
  }, [isDark]);

  return <div ref={chartRef} id='trading-view-chart' />;
};

export default TVChartContainer;
