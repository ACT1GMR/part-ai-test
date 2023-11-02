import clsxm from '../../helper/clsxm';

type Props = {
  onRowClick?: (id: string) => void;
  gridData: {
    names: string[];
    rows?: any;
  } | null;
};

export default function Grid({ gridData, onRowClick }: Props) {
  const { names, rows } = gridData || {};
  return (
    <div className='relative overflow-x-auto rounded-[16px] border border-[#182040] shadow-md'>
      <table className='w-full text-center text-sm text-blue-100 dark:text-blue-100'>
        <thead className='text-xs uppercase text-white dark:text-white'>
          <tr>
            {names &&
              names.map((name) => (
                <th
                  key={name}
                  scope='col'
                  className='h-[31px] border border-[#182040] text-[#7E848E]'
                >
                  {name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row, index) => (
              <tr
                key={row[0]}
                className={clsxm(
                  'cursor-pointer',
                  index % 2 !== 0 ? '' : 'bg-[#0C132C]',
                )}
                onClick={() => onRowClick && onRowClick(row[0])}
              >
                {row.slice(1, row.length).map((datum) => (
                  <td
                    key={datum}
                    className='h-[82px] border border-[#182040] px-6'
                  >
                    {datum}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
