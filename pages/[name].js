import { useRouter } from 'next/router';

const Name = () => {
  const router = useRouter();
  const query = router.query;
  const { name } = query;
  return (
    <div>
      <p>Hello {name}. This is a cool app!</p>
    </div>
  );
};

export default Name;
