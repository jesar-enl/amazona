import { useParams } from 'react-router-dom';

export default function ProductScreen() {
  const params = useParams();
  const {slug} = params;
  return ()
}
