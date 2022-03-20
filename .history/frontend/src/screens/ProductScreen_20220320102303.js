import { useReducer } from 'react';
import { useParams } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, products }, dispatch] = useReducerducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
