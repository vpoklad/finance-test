export default function Tickets({ response }) {
  return (
    <div>
      <ul>
        {response.map(item => (
          <li key={item.ticker}>
            <span>{item.ticker}</span>
            <span> price: {item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
