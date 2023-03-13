import FormContainer from '../formContainer/FormContainer';
import Header from '../header/Header';

const Container = ({ values, setValues }) => {
	return (
		<>
			<Header values={values} />
			<FormContainer values={values} setValues={setValues} />
		</>
	);
};

export default Container;
