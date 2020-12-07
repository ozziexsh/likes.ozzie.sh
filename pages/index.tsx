import React, { useMemo, useState } from 'react';
// @ts-ignore
import ReactResizeDetector from 'react-resize-detector';
import List from '../components/list';
import references from '../references';

export default function Home() {
  const [input, setInput] = useState('');
  const amount = useMemo(() => parseFloat(input), [input]);

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    if (value.match(/^[0-9]*$/) === null) {
      return;
    }
    setInput(value);
  }

  return (
    <div className={'flex flex-col items-center'}>
      <div className={'max-w-4xl p-12'}>
        <p className={'text-gray-800 leading-relaxed'}>
          It can be hard for our brains to grasp the numbers that we see
          everyday on social media. You might be sad that the video you posted
          only got 30 views, which doesn't initially seem like a lot, but can
          you imagine if 30 people walked into your bedroom and cheered you on?
          You'd lose your mind! On the other end of the spectrum: your post goes
          viral and receives 3 million likes! Do you know what 3 million people
          looks like?
        </p>

        <div
          className={
            'text-lg md:text-xl mt-4 flex flex-col items-center space-y-2 md:space-y-0 md:block'
          }
        >
          <label htmlFor={'num'}>My content received</label>
          <input
            id="num"
            type="text"
            value={input}
            onChange={onInputChange}
            className={'border-b mx-5 bg-gray-50'}
            placeholder={'154'}
          />
          <label htmlFor={'num'}>likes/views/purchases</label>
        </div>

        {amount > 0 ? (
          <>
            <hr className={'mt-6'} />
            <p className={'text-sm mt-4'}>
              Want to add more comparisons? This project is{' '}
              <a
                href="https://github.com/ozziexsh/likes.ozzie.sh"
                className={'underline'}
              >
                open source
              </a>
              !
            </p>
            {references.map((reference) => (
              <ReactResizeDetector key={reference.id} handleWidth>
                {({ width }: { width: number }) => (
                  <List width={width} reference={reference} total={amount} />
                )}
              </ReactResizeDetector>
            ))}
            <hr className={'mt-6'} />
          </>
        ) : null}
      </div>
      <div className="text-center py-2">
        <p className="text-xs">
          <a href="https://ozzie.sh">Made with ♥ by oz</a>
        </p>
      </div>
    </div>
  );
}
