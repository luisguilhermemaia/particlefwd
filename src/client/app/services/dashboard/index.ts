import { useQuery } from '@apollo/client';

import { Query } from '../../types/graphql-zeus';
import { GET_DASHBOARD } from '../../queries/dashboard';

export const useDashboard = () => {
  const { data, loading, error } = useQuery<Query>(GET_DASHBOARD);

  return {
    data: data?.dashboard,
    loading,
    error,
  };
};
