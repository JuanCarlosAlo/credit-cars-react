import {
	StyledCVCInput,
	StyledDateInput,
	StyledForm,
	StyledFormInput,
	StyledFormInputContainer,
	StyledLastRow,
	StyledLastRowContainer
} from './styles';

const FormContainer = ({ values, setValues }) => {
	return (
		<>
			<StyledForm>
				<form
					onSubmit={e => {
						e.preventDefault;
					}}
				>
					<StyledFormInputContainer>
						<label htmlFor='text'>Cardholder Name</label>
						<StyledFormInput
							type='text'
							value={values.name}
							onChange={e => filterText(values, setValues, e.target.value)}
						/>
					</StyledFormInputContainer>
					<StyledFormInputContainer>
						<label htmlFor='text'>Card Number</label>
						<input
							type='text'
							value={values.cardNumber}
							onChange={e => {
								filterNumbers(values, setValues, e.target.value);
							}}
						/>
					</StyledFormInputContainer>
					<StyledLastRowContainer>
						<StyledLastRow>
							<label htmlFor=''>Exp. Date (MM/YY)</label>
							<StyledDateInput
								type='text'
								value={values.exDateMonth}
								onChange={e => {
									filterMonth(values, setValues, e.target.value);
								}}
							/>
							<StyledDateInput
								type='text'
								value={values.exDateYear}
								onChange={e => {
									filterYear(values, setValues, e.target.value);
								}}
							/>
						</StyledLastRow>
						<StyledLastRow>
							<label htmlFor=''>CVC</label>

							<StyledCVCInput
								type='text'
								value={values.cvc}
								onChange={e => {
									filterCvc(values, setValues, e.target.value);
								}}
							/>
						</StyledLastRow>
					</StyledLastRowContainer>
				</form>
			</StyledForm>
		</>
	);
};

const changeName = (values, setValues, targetValue) =>
	setValues({ ...values, name: targetValue });
const changeNumber = (values, setValues, targetValue) => {
	if (
		targetValue.length === 4 ||
		targetValue.length === 9 ||
		targetValue.length === 13
	) {
		values += ' ';
	}
	console.log(targetValue);
	setValues({ ...values, cardNumber: targetValue });
};

const changeMonth = (values, setValues, targetValue) =>
	setValues({ ...values, exDateMonth: targetValue });
const changeYear = (values, setValues, targetValue) =>
	setValues({ ...values, exDateYear: targetValue });
const changeCvc = (values, setValues, targetValue) =>
	setValues({ ...values, cvc: targetValue });

const filterText = (values, setValues, targetValue) => {
	if (targetValue.length <= 15) {
		changeName(values, setValues, targetValue);
	}
};
const filterNumbers = (values, setValues, targetValue) => {
	if (targetValue.length <= 19) {
		changeNumber(values, setValues, targetValue);
	}
};
const filterMonth = (values, setValues, targetValue) => {
	if (targetValue.length <= 2) {
		changeMonth(values, setValues, targetValue);
	}
};
const filterYear = (values, setValues, targetValue) => {
	if (targetValue.length <= 2) {
		changeYear(values, setValues, targetValue);
	}
};
const filterCvc = (values, setValues, targetValue) => {
	if (targetValue.length <= 3) {
		changeCvc(values, setValues, targetValue);
	}
};

export default FormContainer;
