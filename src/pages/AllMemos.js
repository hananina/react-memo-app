import MemoList from '../components/memos/MemoList';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'this is a first memo desuyo',
    content: 'this is a first memo content desuyo',
  },
  {
    id: '2',
    title: 'this is a 2nd memo desuyo',
    content: 'this is a 2nd memo content desuyo',
  },
  {
    id: '3',
    title: 'this is a Third memo desuyo',
    content: 'this is a Third memo content desuyo',
  },
];

function AllMemos() {
  return (
    <section>
      <h1>All Memos</h1>
      <MemoList memos={DUMMY_DATA} />
    </section>
  );
}

export default AllMemos;
