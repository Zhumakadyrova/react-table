import "./Example1.css";
function Example1(props) {
  const output = props.items.map(function (item) {
    return (
      <tr>
        <td>{item}</td>;
      </tr>
    );
  });

  return (
    <table border="1">
      <tr>
        <th>name</th>
        <th>length</th>
      </tr>
      {output}
    </table>
  );
}
export default Example1;
