import Option from '../atoms/Option';

const Options = ({ data }) => {
  return data.map((item) => (
    <Option value={item.value} text={item.text} key={item.text} />
  ));
};

export default Options;
