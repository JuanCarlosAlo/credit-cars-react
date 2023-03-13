import styled from 'styled-components';

const StyledForm = styled.div`
	padding: 1rem;
	padding-top: 5rem;
`;

const StyledFormInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
`;

const StyledFormInput = styled.input`
	width: 90%;
`;
const StyledDateInput = styled.input`
	width: 25%;
`;
const StyledLastRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 50%;
	gap: 1rem;
	width: 50%;
`;
const StyledLastRowContainer = styled.div`
	font-size: 1.3rem;
	display: flex;

	gap: 1rem;
	width: 100%;
`;
const StyledCVCInput = styled.input`
	width: 100%;
`;

export {
	StyledFormInput,
	StyledFormInputContainer,
	StyledForm,
	StyledDateInput,
	StyledLastRow,
	StyledLastRowContainer,
	StyledCVCInput
};
