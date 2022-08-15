import { QueryPrams } from './types';
import { QueryPrams as FutureQueryParams } from '../dataFuture/types';
import { ShowError, ShowSuccess } from 'views/components/message';
export type MutateParams = {
  params?: QueryPrams | FutureQueryParams;
  onSuccess?: Function;
  onError?: Function;
  showError?: boolean;
  successCode?: string;
};

export const handleMutate = (mutate: Function, field: MutateParams) => {
  const { onSuccess, params, onError, showError, successCode } = field;

  return mutate(params, {
    onSuccess: (data: any) => {
      if (successCode) ShowSuccess(successCode);
      if (onSuccess) onSuccess(data);
    },
    onError: (error: any) => {
      if (showError) {
        if (typeof error.response === 'object') {
          ShowError(error.response.message);
        } else {
          ShowError(error.statusCode === 500 ? error.message : error.response);
        }
      }
      if (onError) onError(error);
    },
  });
};
