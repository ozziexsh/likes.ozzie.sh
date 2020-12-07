import { Virtuoso } from 'react-virtuoso';
import { Reference } from '../references';

function getTotalUsed(total: number, max: number) {
  if (total >= max) {
    return total / max;
  }
  return 0;
}

interface ListProps {
  reference: Reference;
  width: number;
  total: number;
}

export default function List({ reference, width, total }: ListProps) {
  const svgWidth = 24;
  const totalUsed = getTotalUsed(total, reference.capacity);

  if (totalUsed === 0) {
    return null;
  }

  const numCols = Math.floor(width / svgWidth) - 1;
  const numRows = Math.ceil(totalUsed / numCols);

  function formatTitleNumber() {
    if (totalUsed % 2 !== 0) {
      return parseFloat(totalUsed.toFixed(2)).toLocaleString();
    }
    return totalUsed.toLocaleString();
  }

  return (
    <div className={'mt-6'}>
      <h2 className={'text-2xl font-semibold'}>
        {formatTitleNumber()} {reference.title}
      </h2>
      {reference.capacity !== 1 ? (
        <h3 className={'mt-1'}>
          Capacity: {reference.capacity.toLocaleString()}
        </h3>
      ) : null}
      {reference.description ? (
        <p className={'text-gray-600 text-sm mt-1'}>{reference.description}</p>
      ) : null}
      {reference.image ? (
        <div className={'mt-2'}>
          <img
            src={reference.image.url}
            alt={`photo of ${reference.title} capacity`}
            className={'max-w-full'}
          />
          <p>
            <a
              href={reference.image.creditUrl}
              className={'text-xs text-gray-600'}
              target={'_blank'}
            >
              {reference.image.credit}
            </a>
          </p>
        </div>
      ) : null}
      {/* todo figure out what to put in scroll for non-person stuff */}
      {reference.scroll ? (
        <div className={'mt-2 bg-gray-50 p-1'} style={{ height: '300px' }}>
          <Virtuoso
            totalCount={numRows}
            overscan={200}
            item={(index) => (
              <div>
                {Array.from({ length: Math.round(numCols) }).map(() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                    className={'inline-block'}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ))}
              </div>
            )}
          />
        </div>
      ) : null}
    </div>
  );
}
