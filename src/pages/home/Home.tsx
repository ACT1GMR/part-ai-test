import Grid from './../../components/grid/Grid';

import { useGetUsersGridData } from './hooks';
import { useNavigate } from 'react-router';
import { BarLoader, SyncLoader } from 'react-spinners';

export default function Home() {
  const { gridData, isLoading } = useGetUsersGridData();
  const navigate = useNavigate();

  return (
    <div className='text-c flex items-center justify-center'>
      {gridData && (
        <Grid onRowClick={(id) => navigate(`/${id}`)} gridData={gridData} />
      )}
      {isLoading && <BarLoader color='#36d7b7' />}
    </div>
  );
}
