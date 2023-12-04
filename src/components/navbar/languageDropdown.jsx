const Languageoption = (props) => {
  return (
    <select onChange={props.onChange } >
      <option>selec language</option>
      <option value={"chi"}>china</option>
      <option value={"en"}>english</option>
      <option value={"ko"}>korea</option>
      <option value={"marathi"}>marathi</option>
    </select>
  );
};

export default Languageoption;
